# ブランチ命名規則

## フォーマット

```
<github-user>/<prefix>-<issue番号>-<type>-<簡潔な説明>
```

- `<github-user>`: GitHub ユーザー名
- `<prefix>`: Issue トラッカーのプレフィックス（例: `sc`）
- `<type>`: Conventional Commits のプレフィックスに準拠: `feat`, `fix`, `docs`, `chore`, `refactor`
- `<説明>`: 英語のケバブケース（例: `math-module`, `branch-cleanup`）

## 例

| Issue | ブランチ名 |
|---|---|
| SC-6: mathモジュール追加 | `nanikasheila/sc-6-feat-math-module` |
| SC-17: ドキュメント更新 | `nanikasheila/sc-17-docs-branch-cleanup` |

## 注意事項

- Issue ID を必ず含めること（GitHub ↔ Issue トラッカーの自動連携に必要）
- ブランチ名は短く、内容がわかるものにする
