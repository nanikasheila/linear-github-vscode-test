# Copilot Instructions

## 開発ルール

開発時のルールは `.github/rules/` に定義されている。必ず従うこと。
ルールは「何をすべきか・してはいけないか」の**ポリシー**のみを定める。

| ルールファイル | 内容 |
|---|---|
| `rules/branch-naming.md` | ブランチ命名規則 |
| `rules/commit-message.md` | コミットメッセージ規約 |
| `rules/merge-policy.md` | マージ方式（merge commit、squash 禁止） |
| `rules/worktree.md` | Git Worktree の使い方と制約 |
| `rules/linear-workflow.md` | Linear Issue の管理ルール |

## スキル（自動ロードされるワークフロー手順）

繰り返し実行する手順は `.github/skills/` にスキルとして定義されている。
エージェントがタスク内容に応じて自動的に読み込み、手順に従って実行する。
スキルは「どう実行するか」の**具体的手順**をパッケージ化したもの。

| スキル | 用途 | 使うタイミング |
|---|---|---|
| `skills/new-feature/` | 新規作業開始 | Linear Issue 作成 → ブランチ → worktree 準備 |
| `skills/submit-pr/` | PR 提出・マージ | コミット → プッシュ → PR 作成 → マージ |
| `skills/resolve-conflict/` | コンフリクト解消 | PR マージが失敗した場合 |
| `skills/nested-merge/` | 入れ子マージ | サブ → 親 → main の順序マージ |
| `skills/cleanup/` | クリーンアップ | マージ後の worktree・ブランチ・Issue 整理 |

## prompts と skills の違い

| | `.github/prompts/` | `.github/skills/` |
|---|---|---|
| **起動方法** | ユーザーが Copilot Chat から手動で選択 | エージェントがタスクに応じて自動ロード |
| **用途** | 対話テンプレート | ワークフロー手順のパッケージ |
