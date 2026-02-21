# Copilot Instructions

## Git Worktree

`git worktree add` を実行する際は、必ずワークスペース内の `.worktrees/` ディレクトリ配下に作成すること。
これにより、ワークスペース外のディレクトリへのアクセス許可確認を回避できる。

```bash
# 正しい例
git worktree add .worktrees/<branch-name> <branch-name>

# 間違い（ワークスペース外に作成してはいけない）
git worktree add ../worktrees/<branch-name> <branch-name>
```

`.worktrees/` は `.gitignore` に登録済み。
