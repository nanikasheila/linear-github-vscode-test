# コントリビューションガイド

このプロジェクトへの貢献方法について説明します。

## 開発フロー

1. **Linear で Issue を作成**する（または既存の Issue を確認）
2. Issue に対応する**ブランチを作成**する
3. `git worktree` を使って**並列で作業**する
4. 変更をコミットして **Pull Request** を作成する
5. レビュー後、PR をマージすると Linear Issue が自動的に完了になる

## ブランチ命名規則

Linear Issue のIDを含むブランチ名を使用します：

```
nanikasheila/sc-<issue番号>-<簡潔な説明>
```

例：
- `nanikasheila/sc-5-docs-contributing`
- `nanikasheila/sc-6-feat-math-module`

## Git Worktree の使い方

並列編集のため、`.worktrees/` ディレクトリ配下に worktree を作成します：

```bash
# ブランチを作成
git branch nanikasheila/sc-<番号>-<説明>

# worktree を作成（必ず .worktrees/ 配下に）
git worktree add .worktrees/<ブランチ名> <ブランチ名>

# worktree の一覧を確認
git worktree list

# 作業が終わったら worktree を削除
git worktree remove .worktrees/<ブランチ名>
```

> **注意**: `.worktrees/` は `.gitignore` に登録済みなので、リポジトリには含まれません。

## 入れ子ブランチ（ネストブランチ）

大きな機能を分割して作業する場合、**親ブランチから更にサブブランチを切る**ことができます。

### 構造イメージ

```
main
 └── sc-14-feat-parent          ← 親ブランチ（機能全体）
      ├── sc-15-feat-sub-a       ← サブブランチA
      └── sc-16-feat-sub-b       ← サブブランチB
```

### 手順

#### 1. 親ブランチを作成して worktree を用意

```bash
git branch nanikasheila/sc-14-feat-parent
git worktree add .worktrees/sc-14-feat-parent nanikasheila/sc-14-feat-parent
```

#### 2. 親ブランチからサブブランチを作成

```bash
# 親ブランチの worktree に移動
cd .worktrees/sc-14-feat-parent

# 親ブランチを起点にサブブランチを作成
git branch nanikasheila/sc-15-feat-sub-a

# メインの作業ディレクトリに戻る
cd ../..

# サブブランチの worktree を作成
git worktree add .worktrees/sc-15-feat-sub-a nanikasheila/sc-15-feat-sub-a
```

#### 3. マージ順序（重要）

サブブランチは**親ブランチに対して PR** を作成します（main に直接マージしない）。
すべてのサブブランチを親にマージした後、親ブランチを main にマージします。

```
1. sc-15-feat-sub-a  →  sc-14-feat-parent  （PR: base=親ブランチ）
2. sc-16-feat-sub-b  →  sc-14-feat-parent  （PR: base=親ブランチ）
3. sc-14-feat-parent  →  main               （PR: base=main）
```

#### 4. サブブランチ間のコンフリクト解決

サブブランチ同士がコンフリクトする場合、先にマージされたサブの変更を後のサブに取り込みます：

```bash
cd .worktrees/sc-16-feat-sub-b
git fetch origin
git merge nanikasheila/sc-14-feat-parent  # 親を取り込み（先にマージされたサブの変更含む）
# コンフリクトを解決 → commit → push
```

### Linear Issue の構造化

入れ子ブランチに対応する Linear Issue も parent-child で構造化すると管理しやすくなります：

- **SC-14** 親Issue: feat: 全体機能
  - **SC-15** サブIssue: feat: サブ機能A
  - **SC-16** サブIssue: feat: サブ機能B

## コミットメッセージ

[Conventional Commits](https://www.conventionalcommits.org/) に従います：

- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメントのみの変更
- `chore:` ビルドや補助ツールの変更
- `refactor:` リファクタリング

Linear Issue を自動で紐付けるため、コミットメッセージに `SC-<番号>` を含めてください：

```
feat: mathモジュールの追加 (SC-6)
```

## Pull Request

- PR のタイトルまたは説明に Linear Issue ID（例: `SC-6`）を含めてください
- PR がマージされると、Linear の Issue ステータスが自動更新されます
- **マージ方式**: 分岐履歴を残すため merge commit（`--no-ff`）を使用します
  - GitHub PR では「Create a merge commit」を選択
  - squash merge は使わない（ブランチの分岐・合流が履歴に残らなくなるため）

### 入れ子ブランチの PR

入れ子構造の場合、PR の `base` ブランチに注意してください：

| PR | base（マージ先） | head（変更元） |
|---|---|---|
| サブ → 親 | `nanikasheila/sc-14-feat-parent` | `nanikasheila/sc-15-feat-sub-a` |
| 親 → main | `main` | `nanikasheila/sc-14-feat-parent` |

サブブランチの PR がすべてマージされてから、親ブランチの PR を main にマージします。
