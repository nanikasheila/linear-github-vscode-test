---
description: "変更をコミットし、PR を作成してマージする"
---

# PR 提出・マージ

worktree での変更が完了した後、以下の手順でコミットから PR マージまでを実行してください。

## 入力

- 対象ブランチ名
- Linear Issue ID（例: `SC-18`）
- マージ先（`main` またはの親ブランチ名）

## 手順

### 1. コミット

```bash
cd .worktrees/<ブランチ名>
git add -A
git commit -m "<type>: <説明> (SC-<番号>)"
```

### 2. プッシュ

```bash
git push origin <フルブランチ名>
```

### 3. PR 作成

```
mcp_io_github_git_create_pull_request:
  owner: "nanikasheila"
  repo: "linear-github-vscode-test"
  base: "<マージ先ブランチ>"      # main または親ブランチ
  head: "<フルブランチ名>"
  title: "<type>: <説明> (SC-<番号>)"
  body: "## SC-<番号>: <説明>\n\n### 変更内容\n- <変更の要約>\n\nCloses SC-<番号>"
```

### 4. マージ（merge commit）

```
mcp_io_github_git_merge_pull_request:
  owner: "nanikasheila"
  repo: "linear-github-vscode-test"
  pullNumber: <PR番号>
  merge_method: "merge"
  commit_title: "Merge pull request #<PR番号>: <PRタイトル>"
```

### 5. マージ失敗時（コンフリクト）

コンフリクトが発生した場合は `resolve-conflict` スキルを使用してください。
