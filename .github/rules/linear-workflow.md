# Linear ワークフロー

## プロジェクト

すべての Issue は対象プロジェクトに紐付ける。
プロジェクト固有の ID は `skills/wf-new-feature/` スキル内で管理する。

## Issue ステータスの流れ

`Backlog → Todo → In Progress → Done`

- ブランチ作成・作業開始時: **In Progress**
- PR マージ完了時: **Done**

## Issue の構造化（入れ子）

大きな機能を分割する場合、Issue も親子関係で構造化する。
`create_issue` の `parentId` でサブ Issue を親に紐付ける。

## GitHub 連携

- PR タイトル・説明に Issue ID を含めると Issue トラッカーに自動リンク
- PR の `body` に `Closes <Issue ID>` でマージ時にステータス自動変更

## 手順

具体的な操作手順は以下のスキルを参照:

- Issue 作成: `skills/wf-new-feature/`
- ステータス更新: `skills/wf-cleanup/`
