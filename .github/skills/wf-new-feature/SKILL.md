````skill
---
name: wf-new-feature
description: Issue を作成し、ブランチと worktree を準備して新規作業を開始する。ユーザーが新しいタスクや機能の作業を始めたいときに使用する。
---

# 新規フィーチャー開始

## 前提

`.github/settings.json` からプロジェクト設定を読み取って使用する。

## 入力

ユーザーが作業内容を説明する。以下を判断:
- Issue タイトル（`<type>: <説明>` 形式）
- ブランチ名（`settings.branch.format` に従う）
- 親 Issue がある場合はその ID

## 手順

### 0. 設定読み込み

`.github/settings.json` を読み取り、以下の値を使用する:
- `issueTracker.provider` — Issue トラッカー種別
- `issueTracker.mcpServer` — MCP サーバー名
- `issueTracker.team` — チーム名
- `issueTracker.projectId` — プロジェクト ID
- `issueTracker.prefix` — Issue プレフィックス（以降 `<prefix>` と表記）
- `branch.user` — ブランチのユーザー名（以降 `<user>` と表記）

### 1. Issue を作成

`issueTracker.provider` が `"none"` の場合はこのステップをスキップする。

```
mcp_<issueTracker.mcpServer>_create_issue:
  title: "<type>: <説明>"
  description: "## 概要\n<作業内容>\n\n## タスク\n- [ ] <具体的なタスク>"
  team: "<issueTracker.team>"
  projectId: "<issueTracker.projectId>"
  state: "In Progress"
  parentId: "<親IssueのID（ある場合）>"
```

返却された `identifier`（例: `<prefix>-20`）を記録する。

### 2. ブランチを作成

```bash
git branch <user>/<prefix>-<番号>-<type>-<説明>
```

### 3. Worktree を作成

```bash
git worktree add .worktrees/<prefix>-<番号>-<type>-<説明> <user>/<prefix>-<番号>-<type>-<説明>
```

### 4. 作業開始

worktree ディレクトリ内でファイルの変更を行う。

## 入れ子ブランチの場合

親ブランチが既にある場合:

```bash
# 親の worktree に移動
cd .worktrees/<親ブランチ名>

# サブブランチを作成（親から分岐）
git branch <user>/<prefix>-<番号>-<type>-<説明>

# メインディレクトリに戻る
cd ../..

# サブ worktree を作成
git worktree add .worktrees/<prefix>-<番号>-<type>-<説明> <user>/<prefix>-<番号>-<type>-<説明>
```

````
