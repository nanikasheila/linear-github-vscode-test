---
description: "Linear Issue を作成し、ブランチと worktree を準備する"
---

# 新規フィーチャー開始

以下の手順で新しい作業を開始してください。

## 入力

ユーザーが作業内容を説明します。以下を判断してください:
- Issue タイトル（`<type>: <説明>` 形式）
- ブランチ名（`nanikasheila/sc-<番号>-<type>-<説明>`）
- 親 Issue がある場合はその ID

## 手順

### 1. Linear Issue を作成

```
mcp_my-mcp-server_create_issue:
  title: "<type>: <説明>"
  description: "## 概要\n<作業内容>\n\n## タスク\n- [ ] <具体的なタスク>"
  team: "SheilaChan"
  projectId: "bf5f12db-1f62-42af-9a0f-78337cb33fb2"
  state: "In Progress"
  parentId: "<親IssueのID（ある場合）>"
```

返却された `identifier`（例: `SC-18`）を記録する。

### 2. ブランチを作成

```bash
git branch nanikasheila/sc-<番号>-<type>-<説明>
```

### 3. Worktree を作成

```bash
git worktree add .worktrees/sc-<番号>-<type>-<説明> nanikasheila/sc-<番号>-<type>-<説明>
```

### 4. 作業開始

worktree ディレクトリ内でファイルの変更を行う。

## 入れ子ブランチの場合

親ブランチが既にある場合:

```bash
# 親の worktree に移動
cd .worktrees/<親ブランチ名>

# サブブランチを作成（親から分岐）
git branch nanikasheila/sc-<番号>-<type>-<説明>

# メインディレクトリに戻る
cd ../..

# サブ worktree を作成
git worktree add .worktrees/sc-<番号>-<type>-<説明> nanikasheila/sc-<番号>-<type>-<説明>
```
