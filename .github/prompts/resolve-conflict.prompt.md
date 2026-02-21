---
description: "PR マージ時のコンフリクトを解消する"
---

# コンフリクト解消

PR マージが `405 Pull Request is not mergeable` で失敗した場合に使用してください。

## 手順

### 1. ベースブランチの最新をフェッチ

```bash
cd .worktrees/<ブランチ名>
git fetch origin <ベースブランチ>
```

### 2. ベースブランチをマージ

```bash
git merge origin/<ベースブランチ>
```

### 3. コンフリクト解消

- コンフリクトしたファイルを確認: `git diff --name-only --diff-filter=U`
- 各ファイルのコンフリクトマーカー（`<<<<<<<`, `=======`, `>>>>>>>`）を解消
- **両方の変更を統合する**のが基本方針（一方を捨てない）

### 4. コミット＆プッシュ

```bash
git add -A
git commit -m "merge: resolve conflict with <競合ブランチ> (SC-<番号>)"
git push origin <フルブランチ名>
```

### 5. PR を再マージ

```
mcp_io_github_git_merge_pull_request:
  owner: "nanikasheila"
  repo: "linear-github-vscode-test"
  pullNumber: <PR番号>
  merge_method: "merge"
```
