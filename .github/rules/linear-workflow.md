# Linear ワークフロー

## プロジェクト

すべての Issue は **linear-github-vscode-test** プロジェクトに紐付ける。

## Issue ステータスの流れ

`Backlog → Todo → In Progress → Done`

- ブランチ作成・作業開始時: **In Progress**
- PR マージ完了時: **Done**

## Issue の構造化（入れ子）

大きな機能を分割する場合、Linear Issue も親子関係で構造化する。
`create_issue` の `parentId` でサブ Issue を親に紐付ける。

## GitHub 連携

- PR タイトル・説明に `SC-<番号>` を含めると Linear Issue に自動リンク
- PR の `body` に `Closes SC-<番号>` でマージ時にステータス自動変更

## 手順

具体的な操作手順は以下のスキルを参照:

- Issue 作成: `prompts/new-feature.prompt.md`
- ステータス更新: `prompts/cleanup.prompt.md`
