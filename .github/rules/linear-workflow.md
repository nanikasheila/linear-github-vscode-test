# Linear ワークフロー

## プロジェクト

すべての Issue は **linear-github-vscode-test** プロジェクトに紐付ける。

## Issue ステータスの流れ

```
Backlog → Todo → In Progress → Done
```

- ブランチ作成・作業開始時: **In Progress**
- PR マージ完了時: **Done**

## Issue の構造化（入れ子）

大きな機能を分割する場合、Linear Issue も親子関係で構造化する:

- **SC-14** 親 Issue: feat: 全体機能
  - **SC-15** サブ Issue: feat: サブ機能A
  - **SC-16** サブ Issue: feat: サブ機能B

`create_issue` の `parentId` でサブ Issue を親に紐付ける。

## GitHub 連携

- PR タイトル・説明に `SC-<番号>` を含めると Linear Issue に自動リンク
- PR の `body` に `Closes SC-<番号>` でマージ時にステータス自動変更
- Linear team: `SheilaChan`（ID: `63d42d51-b0eb-488d-907d-a02a6607a680`）
- Linear project ID: `bf5f12db-1f62-42af-9a0f-78337cb33fb2`
