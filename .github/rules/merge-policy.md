# マージポリシー

## マージ方式: Merge Commit（`--no-ff`）

PR マージには **merge commit** を使用する。**squash merge は禁止**。

### 理由

- 分岐・合流の履歴が `git log --graph` で可視化できる
- どのブランチからどの変更が来たかが明確になる
- squash すると全コミットが1つに潰れ、ブランチの存在が消える

### GitHub API での指定

```
merge_method: "merge"
```

### GitHub UI での操作

PR マージ時に「**Create a merge commit**」を選択する。
「Squash and merge」や「Rebase and merge」は使わないこと。

## 入れ子ブランチのマージ順序

```
1. サブブランチ → 親ブランチ（base = 親ブランチ）
2. 親ブランチ → main（base = main）
```

サブブランチの PR をすべてマージしてから、親ブランチの PR を main にマージする。
