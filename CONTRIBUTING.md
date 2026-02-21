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
