````markdown
# 開発ワークフロー

> コーディング規約は `instructions/common.instructions.md`、各フェーズの具体的手順は `skills/` を参照。

## 原則

- すべての開発作業は **Worktree 上**で実施する（main ブランチ直接編集禁止）
- 各作業は **Issue 起票 → 設計 → 実装 → テスト → レビュー → PR → クリーンアップ** のフローで進める
- プロジェクト固有の設定は `.github/settings.json` から取得する

## フロー概要

```
1. Issue 起票 & Worktree 作成   → skills/new-feature/
2. 設計
3. 実装
4. テスト
5. コードレビュー               → agents/reviewer.agent.md
6. PR 提出 & マージ             → skills/submit-pr/
7. ドキュメント・ルール更新
8. クリーンアップ               → skills/cleanup/
```

## 1. Issue 起票 & Worktree 作成

- `new-feature` スキルに従い、Issue を作成しブランチ・worktree を準備する
- ブランチ命名: `rules/branch-naming.md` に従う
- worktree 配置: `rules/worktree.md` に従う

## 2. 設計フェーズ

- コードベースを調査し、影響範囲・変更ファイル・テスト方針を明確にする
- 大規模な変更の場合、ユーザー承認を得てから実装に進む
- 入れ子ブランチが必要な場合はこの段階で構造を決定する

## 3. 実装フェーズ

- Worktree 上でコード変更を行う
- `instructions/common.instructions.md` のコーディング規約に従う
- コミットメッセージ: `rules/commit-message.md` に従う

## 4. テストフェーズ

- 新規モジュールには対応するテストを作成する
- 既存テストがある場合は全件 PASS を維持する
- テストコマンドはプロジェクトに応じて実行する

## 5. コードレビュー

変更規模に応じてレビュー方法を選択する:

| 規模 | 方法 |
|---|---|
| 小規模（1–2 ファイル） | セルフレビュー or `reviewer` エージェント単体 |
| 中規模（3–5 ファイル） | `reviewer` エージェントでレビュー |
| 大規模（6+ ファイル or 設計変更） | `manager` エージェントで複数レビュアーを並列起動 |

### レビュー観点

| 観点 | 確認内容 |
|---|---|
| 設計・構造 | モジュール分割、責務分離、既存パターンとの整合性 |
| ロジック・正確性 | 計算ロジック、エッジケース、エラーハンドリング |
| テスト品質 | カバレッジ、境界値テスト、テストの独立性 |

### 指摘対応

- 指摘があれば修正 → テスト再実行 → 再レビュー（必要に応じて）
- 全レビュアー LGTM で PR フェーズへ進む

## 6. PR 提出 & マージ

- `submit-pr` スキルに従い、コミット → プッシュ → PR 作成 → マージ
- マージ方式: `rules/merge-policy.md` に従う
- コンフリクト発生時: `resolve-conflict` スキルで解消
- 入れ子ブランチ: `nested-merge` スキルでサブ → 親 → main の順序マージ

## 7. ドキュメント・ルール更新

マージ前に以下を確認し、必要に応じて更新する:

| 変更種別 | 更新対象 |
|---|---|
| 新機能追加 | instructions + 該当 skills + copilot-instructions.md |
| 既存機能の改善 | 該当 skills + rules（影響がある場合） |
| アーキテクチャ変更 | instructions + copilot-instructions.md |
| バグ修正のみ | 原則不要（挙動が変わる場合は該当ファイルを更新） |

## 8. クリーンアップ

- `cleanup` スキルに従い、worktree・ブランチ・Issue を整理する
- Issue ステータス: `rules/linear-workflow.md` に従い Done に更新

````
