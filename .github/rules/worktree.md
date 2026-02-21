# Git Worktree ルール

## 作成場所

worktree は必ず **`.worktrees/` ディレクトリ配下**に作成する。

```bash
# 正しい
git worktree add .worktrees/<branch-name> <branch-name>

# 間違い（ワークスペース外に作成してはいけない）
git worktree add ../worktrees/<branch-name> <branch-name>
```

`.worktrees/` は `.gitignore` に登録済み。

## worktree 名

ブランチ名からプレフィックス（`nanikasheila/`）を除いた部分を使う。

```bash
# ブランチ: nanikasheila/sc-18-chore-rules-and-skills
# worktree: .worktrees/sc-18-chore-rules-and-skills
git worktree add .worktrees/sc-18-chore-rules-and-skills nanikasheila/sc-18-chore-rules-and-skills
```

## 入れ子ブランチの worktree

親ブランチからサブブランチを切る場合:

```bash
# 親の worktree に移動してサブブランチを作成
cd .worktrees/sc-14-feat-parent
git branch nanikasheila/sc-15-feat-sub-a
cd ../..

# サブブランチの worktree を作成
git worktree add .worktrees/sc-15-feat-sub-a nanikasheila/sc-15-feat-sub-a
```

## クリーンアップ

マージ後は worktree → ローカルブランチ → リモート参照の順に削除:

```bash
git worktree remove .worktrees/<branch-name>
git branch -D <branch-name>
git fetch --prune
```
