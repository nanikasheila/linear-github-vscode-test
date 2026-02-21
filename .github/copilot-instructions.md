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

## 入れ子ブランチ（ネストブランチ）

親ブランチからサブブランチを切る場合も、worktree は同様に `.worktrees/` 配下に作成する。
サブブランチは親ブランチの worktree 内で `git branch` して作成する。

```bash
# 親ブランチの worktree で作業中にサブブランチを作成
cd .worktrees/sc-14-feat-parent
git branch nanikasheila/sc-15-feat-sub-a
cd ../..
git worktree add .worktrees/sc-15-feat-sub-a nanikasheila/sc-15-feat-sub-a
```

サブブランチの PR は親ブランチに対して作成する（main ではない）。
全サブブランチを親にマージした後、親ブランチを main にマージする。

## マージ方式

分岐履歴を残すため、PR マージには merge commit（`--no-ff`）を使用する。squash merge は使わない。
GitHub API で `merge_method: "merge"` を指定する。
