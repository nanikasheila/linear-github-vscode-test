```instructions
# Copilot Instructions

## プロジェクト設定

プロジェクト固有の設定は `.github/settings.json` で管理する。
新規プロジェクトでは `wf-init` スキルを使って初期設定を行う。

### settings.json の構造

| セクション | 説明 |
|---|---|
| `github` | GitHub リポジトリ情報（owner, repo, mergeMethod） |
| `issueTracker` | Issue トラッカー設定（provider, team, prefix 等） |
| `branch` | ブランチ命名設定（user, format） |
| `project` | プロジェクト基本情報（name, language, entryPoint） |

## .github 4層構造

本リポジトリの `.github/` は以下の4層で構成されている。

| 層 | ディレクトリ | 役割 | 適用方法 |
|---|---|---|---|
| **Instructions** | `instructions/` | フォルダ・拡張子単位のガイドライン | `applyTo` パターンで自動適用 |
| **Rules** | `rules/` | 宣言的ポリシー（何をすべきか・してはいけないか） | 常時適用 |
| **Skills** | `skills/` | ワークフロー手順のパッケージ | エージェントがタスクに応じて自動ロード |
| **Agents** | `agents/` | 専門特化のカスタムエージェント | ユーザーが Chat から選択 or サブエージェント呼出 |

## Instructions（自動適用ガイドライン）

`applyTo` パターンに一致するファイルを開いているとき、自動的にコンテキストに追加される。

| ファイル | 適用対象 | 内容 |
|---|---|---|
| `instructions/common.instructions.md` | `**/*` | コーディング規約・セキュリティ・構成概要 |

## Rules（開発ルール）

開発時のルール。必ず従うこと。ルールは**ポリシー**のみを定める。

| ファイル | 内容 |
|---|---|
| `rules/development-workflow.md` | 開発フロー全体の定義（設計→実装→テスト→レビュー→PR→クリーンアップ） |
| `rules/branch-naming.md` | ブランチ命名規則 |
| `rules/commit-message.md` | コミットメッセージ規約 |
| `rules/merge-policy.md` | マージ方式（merge commit、squash 禁止） |
| `rules/worktree.md` | Git Worktree の使い方と制約 |
| `rules/linear-workflow.md` | Issue トラッカーの管理ルール |

## Skills（自動ロードされるワークフロー手順）

エージェントがタスク内容に応じて自動的に読み込み、手順に従って実行する。
スキルは「どう実行するか」の**具体的手順**をパッケージ化したもの。
すべてのスキルは `.github/settings.json` から設定を読み取る。

| スキル | 用途 | 使うタイミング |
|---|---|---|
| `skills/wf-init/` | プロジェクト初期設定 | `.github/` を新規プロジェクトに導入したとき |
| `skills/wf-new-feature/` | 新規作業開始 | Issue 作成 → ブランチ → worktree 準備 |
| `skills/wf-submit-pr/` | PR 提出・マージ | コミット → プッシュ → PR 作成 → マージ |
| `skills/wf-resolve-conflict/` | コンフリクト解消 | PR マージが失敗した場合 |
| `skills/wf-nested-merge/` | 入れ子マージ | サブ → 親 → main の順序マージ |
| `skills/wf-cleanup/` | クリーンアップ | マージ後の worktree・ブランチ・Issue 整理 |

## Agents（カスタムエージェント）

機能特化のエージェント。Chat の参加者メニューから選択できる。

| エージェント | 役割 | tools |
|---|---|---|
| `agents/developer.agent.md` | 実装・デバッグ・テスト | vscode, execute, read, edit, search, web, todo |
| `agents/reviewer.agent.md` | コードレビュー・品質検証 | read, search, web, todo |
| `agents/manager.agent.md` | タスク分解・エージェント間の統括 | agent/runSubagent, todo |

## 各層の使い分け

| | instructions | rules | skills | agents |
|---|---|---|---|---|
| **内容** | ガイドライン | ポリシー | 手順 | 振る舞い |
| **粒度** | ファイル/フォルダ単位 | リポジトリ全体 | タスク単位 | 役割単位 |
| **起動** | applyTo で自動 | 常時参照 | タスクで自動ロード | ユーザー選択 or サブエージェント |
| **例** | コーディング規約 | squash 禁止 | PR 作成手順 | レビュー専門家 |

```
