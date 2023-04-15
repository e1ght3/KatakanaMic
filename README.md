# KatakanaMic
<BR>
## このプログラムについて
ボタンを押してマイクで話かけると、漢字も含めてカタカナに変換して返してくれます。<BR>
Chromeでのみ動作確認済み。<BR>
<BR>
## 使い方
コードを一式取得して以下を実行してください。<BR>
<BR>
server.jsのディレクトリに移動して以下のセットアップを実行(必要に応じて)<BR>
npm init -y<BR>
npm install express ws http<BR>
<BR>
サーバー起動<BR>
node server.js<BR>
<BR>
ブラウザからアクセス<BR>
http://localhost:3000<BR>
<BR>
## 既知の問題
ローカルで実行する分には問題ありませんが、<BR>
Web上から実行すると読み込み時に固まります。<BR><BR>
<BR>
## 問い合わせについて
製作者はプログラムには疎いので、質問していただいても恐らく回答できるだけの知識がないと思います。<BR>
<BR>
## ライセンス等
CCBY。<BR>
大したプログラムでもないので、「e1ght3」のクレジットさえ表記していただければ好きに使っていただいて構いません。<BR>
kuromoji.jsを使用しているので、そちらのライセンスにも従ってください。<BR>
[https://github.com/takuyaa/kuromoji.js/](https://github.com/takuyaa/kuromoji.js/)<BR>
<BR>
dictの中身は以下のURLから取得をしています。<BR>
[https://cdn.jsdelivr.net/gh/takuyaa/kuromoji.js@master/dict/](https://cdn.jsdelivr.net/gh/takuyaa/kuromoji.js@master/dict/)
