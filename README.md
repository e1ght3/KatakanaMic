# KatakanaMic

## このプログラムについて
ボタンを押してマイクで話かけると、漢字も含めてカタカナに変換して返してくれます。
Chromeでのみ動作確認済み。

## 使い方
コードを一式取得して以下を実行してください。

server.jsのディレクトリに移動して以下のセットアップを実行(必要に応じて)
npm init -y
npm install express ws http

サーバー起動
node server.js

ブラウザからアクセス
http://localhost:3000

## 既知の問題
ローカルで実行する分には問題ありませんが、
Web上から実行すると読み込み時に固まります。

## 問い合わせについて
製作者はプログラムには疎いので、質問していただいても恐らく回答できるだけの知識がないと思います。

## ライセンス等
CCBY。
大したプログラムでもないので、「e1ght3」のクレジットさえ表記していただければ好きに使っていただいて構いません。
kuromoji.jsを使用しているので、そちらのライセンスにも従ってください。
[https://github.com/takuyaa/kuromoji.js/](https://github.com/takuyaa/kuromoji.js/)

dictの中身は以下のURLから取得をしています。
[https://cdn.jsdelivr.net/gh/takuyaa/kuromoji.js@master/dict/](https://cdn.jsdelivr.net/gh/takuyaa/kuromoji.js@master/dict/)