# Copilot Instructions

## 開発ルール

開発時のルールは `.github/rules/` に定義されている。必ず従うこと。

| ルールファイル | 内容 |
|---|---|
| `rules/branch-naming.md` | ブランチ命名規則 |
| `rules/commit-message.md` | コミットメッセージ規約 |
| `rules/merge-policy.md` | マージ方式（merge commit、squash 禁止） |
| `rules/worktree.md` | Git Worktree の使い方と制約 |
| `rules/linear-workflow.md` | Linear Issue の管理ルール |

## スキル（再利用可能な手順）

繰り返し実行する手順は `.github/prompts/` にスキルとして定義されている。
該当する作業を行う際は、対応するスキルの手順に従うこと。

| スキルファイル | 用途 | 使うタイミング |
|---|---|---|
| `prompts/new-feature.prompt.md` | 新規作業開始 | Linear Issue 作成 → ブランチ → worktree 準備 |
| `prompts/submit-pr.prompt.md` | PR 提出・マージ | コミット → プッシュ → PR 作成 → マージ |
| `prompts/resolve-conflict.prompt.md` | コンフリクト解消 | PR マージが失敗した場合 |
| `prompts/nested-merge.prompt.md` | 入れ子マージ | サブ → 親 → main の順序マージ |
| `prompts/cleanup.prompt.md` | クリーンアップ | マージ後の worktree・ブランチ・Issue 整理 |
