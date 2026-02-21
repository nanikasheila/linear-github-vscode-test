---
description: "マージ完了後のクリーンアップ処理を実行する"
---

# クリーンアップ

PR マージ後に worktree、ローカルブランチ、Linear Issue を整理してください。

## 入力

- 対象ブランチ名（複数可）
- Linear Issue ID（複数可）

## 手順

### 1. Worktree の削除

```bash
git worktree remove .worktrees/<ブランチ名>
```

### 2. ローカルブランチの削除

```bash
git branch -D <フルブランチ名>
```

### 3. リモート参照の整理

```bash
git fetch --prune
```

### 4. main ブランチの更新

```bash
git checkout main
git pull origin main
```

### 5. Linear Issue のステータス更新

```
mcp_my-mcp-server_update_issue:
  id: "SC-<番号>"
  state: "Done"
```

## 一括クリーンアップ

複数ブランチを同時にクリーンアップする場合:

```bash
# worktree 一括削除
git worktree remove .worktrees/<ブランチA>
git worktree remove .worktrees/<ブランチB>

# ローカルブランチ一括削除
git branch -D <フルブランチA> <フルブランチB>

# リモート参照整理＆main更新
git fetch --prune
git checkout main
git pull origin main
```

## マージ済みブランチの一括削除（ブランチが溢れた場合）

```bash
git branch -r --merged main | grep 'origin/' | grep -v 'main' | \
  sed 's|origin/||' | xargs git push origin --delete
git branch --merged main | grep -v 'main' | xargs git branch -D
git fetch --prune
```
