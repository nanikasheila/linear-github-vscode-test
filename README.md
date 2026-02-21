# Linear × GitHub × VSCode 連携テスト

Linear、GitHub、VSCode の連携を検証するためのテストリポジトリです。

## 目的

- Linear の Issue と GitHub の PR/Branch を連携させる
- VSCode 上での開発ワークフローを確認する
- Linear → GitHub → VSCode の一連の流れをテストする

## 連携フロー

1. **Linear** で Issue を作成
2. Linear から **ブランチを作成**（自動的に GitHub にブランチが作られる）
3. **VSCode** でブランチをチェックアウトして開発
4. GitHub に **Pull Request** を作成
5. PR をマージすると Linear の Issue が自動的に完了になる

## セットアップ

### 必要なもの

- [Linear](https://linear.app/) アカウント
- [GitHub](https://github.com/) アカウント
- [VSCode](https://code.visualstudio.com/) + 拡張機能
  - [Linear extension for VSCode](https://marketplace.visualstudio.com/items?itemName=nicepkg.aide-pro)（任意）
  - [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

### Linear と GitHub の連携設定

1. Linear の Settings → Integrations → GitHub を選択
2. GitHub アカウントを接続
3. このリポジトリを連携対象に追加

## テスト手順

- [ ] Linear で Issue を作成してみる
- [ ] Issue からブランチを作成する
- [ ] VSCode でブランチを切り替えてコードを変更する
- [ ] PR を作成して Linear Issue との紐付けを確認する
- [ ] PR マージ後に Linear Issue のステータスが変わることを確認する

## プロジェクト構成

```
├── index.js          # メインエントリーポイント
├── math.js           # 数学ユーティリティ（add, subtract, multiply, divide, power, modulo）
├── string.js         # 文字列操作（reverse, capitalize, truncate）
├── utils.js          # 汎用ユーティリティ（range, shuffle, sleep）
├── package.json      # プロジェクト設定・scripts
├── CONTRIBUTING.md   # コントリビューションガイド
├── README.md         # このファイル
└── .github/
    └── copilot-instructions.md  # Copilot 設定
```
