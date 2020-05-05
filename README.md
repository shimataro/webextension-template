# webextensions-template

![Test](https://github.com/shimataro/webextensions-template/workflows/Test/badge.svg)
[![codecov](https://codecov.io/gh/shimataro/webextensions-template/branch/develop/graph/badge.svg?token=rbCV3IBzut)](https://codecov.io/gh/shimataro/webextensions-template)

TypeScriptとYAMLで書くWebExtensions

## ビルド方法

### 必要ソフトウェア

* [Node.js](https://nodejs.org/) v8以降（NPM 5.6以降）

### ビルド

`dist`以下に拡張機能が作成される

```bash
npm ci
npm run build
```

### パッケージ作成

ビルド後に以下を実行

```bash
npm run package-build
```

`dist/web-ext-artifacts`以下にパッケージが作成される

### パッケージに署名

あらかじめパッケージを作成し、以下の環境変数を設定しておく

* `WEB_EXT_API_KEY`: APIキー（<https://addons.mozilla.org/en-US/developers/addon/api/key/>）
* `WEB_EXT_API_SECRET`: APIシークレット
* `WEB_EXT_ID`: 拡張機能ID（`{UUID}` / `ID`）

```bash
npm run package-sign
```

`dist/web-ext-artifacts`以下に署名されたパッケージが作成される

### 依存npmパッケージの更新

以下のコマンドを実行すると、依存パッケージが更新されたブランチが作成される。
それをpush＆mergeで更新完了。

```bash
./scripts/update-dependencies
```

### 新しいリリースの作成

以下のコマンドを実行すると、新しいリリース用のブランチが作成される。
あとは端末に表示された指示通りに行えばリリース完了。

```bash
./scripts/create-new-release NEW_VERSION
```

`NEW_VERSION`には新しいバージョン（セマンティックバージョニング）を指定。

[リリース](https://github.com/shimataro/webextensions-template/releases)が完了すると、自動的に署名付きパッケージが添付される。

## 使用方法

### Mozilla Firefox

#### パッケージ化していないアドオンを読み込む場合

* `about:debugging` にアクセス
* 「一時的なアドオンを読み込む」をクリック
* `dist/manifest.json`を選択（実際は`dist`直下にあるファイルならなんでもOK）

#### パッケージ化したけど署名していないアドオンを読み込む場合

* `about:debugging` にアクセス
* 「一時的なアドオンを読み込む」をクリック
* `dist/web-ext-artifacts`以下のパッケージ化したアドオンを選択

#### 署名済みのアドオンを読み込む場合

* `about:addons` にアクセス
* ⚙をクリック→「ファイルからアドオンをインストール」をクリック
* `dist/web-ext-artifacts`以下の署名済みアドオンを選択

もしくはアドオンファイルをブラウザにドラッグ＆ドロップ

### Google Chrome

開発中…

## ドキュメント

* [WebExtensions](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions)
* [extensions API](https://developer.chrome.com/extensions)

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
