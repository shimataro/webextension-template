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

パッケージを作成後に以下を実行

あらかじめ、環境変数`WEB_EXT_API_KEY`にAPIキーを、`WEB_EXT_API_SECRET`にAPIシークレットを保存しておく: <https://addons.mozilla.org/en-US/developers/addon/api/key/>

```bash
npm run package-sign
```

`dist/web-ext-artifacts`以下に署名されたパッケージが作成される

※ソフトウェアを[リリース](https://github.com/shimataro/webextensions-template/releases)すると自動的に署名付きパッケージが添付される

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

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
