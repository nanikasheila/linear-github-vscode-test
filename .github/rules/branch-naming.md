# ブランチ命名規則

## フォーマット

```
nanikasheila/sc-<issue番号>-<type>-<簡潔な説明>
```

- `<type>` は Conventional Commits のプレフィックスに準拠: `feat`, `fix`, `docs`, `chore`, `refactor`
- `<説明>` は英語のケバブケース（例: `math-module`, `branch-cleanup`）

## 例

| Linear Issue | ブランチ名 |
|---|---|
| SC-6: mathモジュール追加 | `nanikasheila/sc-6-feat-math-module` |
| SC-17: ドキュメント更新 | `nanikasheila/sc-17-docs-branch-cleanup` |

## 注意事項

- Linear Issue ID（`sc-<番号>`）を必ず含めること（GitHub ↔ Linear の自動連携に必要）
- ブランチ名は短く、内容がわかるものにする
