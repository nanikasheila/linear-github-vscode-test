# ブランチ命名規則

## フォーマット

```
<github-user>/<prefix>-<issue番号>-<type>-<簡潔な説明>
```

- `<github-user>`: `.github/settings.json` の `branch.user`
- `<prefix>`: `.github/settings.json` の `issueTracker.prefix`（小文字）
- `<type>`: Conventional Commits のプレフィックスに準拠: `feat`, `fix`, `docs`, `chore`, `refactor`
- `<説明>`: 英語のケバブケース（例: `math-module`, `branch-cleanup`）

## 例

| Issue | ブランチ名 |
|---|---|
| `<PREFIX>-6`: 新機能追加 | `<user>/<prefix>-6-feat-new-module` |
| `<PREFIX>-17`: ドキュメント更新 | `<user>/<prefix>-17-docs-update` |

> 具体的な `<user>` と `<prefix>` の値は `.github/settings.json` を参照。

## 注意事項

- Issue ID を必ず含めること（GitHub ↔ Issue トラッカーの自動連携に必要）
- ブランチ名は短く、内容がわかるものにする
