# コミットメッセージ規約

## フォーマット

```
<type>: <説明> (SC-<番号>)
```

## Type 一覧

| type | 用途 |
|---|---|
| `feat` | 新機能 |
| `fix` | バグ修正 |
| `docs` | ドキュメントのみの変更 |
| `chore` | ビルドや補助ツールの変更 |
| `refactor` | リファクタリング |
| `merge` | コンフリクト解消のマージコミット |

## Linear 連携

コミットメッセージに `SC-<番号>` を含めると、Linear Issue に自動リンクされる。

## 例

```
feat: mathモジュールの追加 (SC-6)
docs: ブランチクリーンアップ手順を追記 (SC-17)
merge: resolve conflict with SC-15 validator in index.js (SC-16)
```
