# KatakanaMic

<BR>
  
## このプログラムについて
ボタンを押してマイクで話かけると、漢字も含めてカタカナに変換して返してくれます。<BR>
Chromeでのみ動作確認済み。<BR>
NeosVR側でカタカナの文字列を受け取ってイベントを起こさせる想定で作っています。<BR>
現在開発中の為、正常に動作しません。<BR>
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
クライアントへのメッセージ送信時に意図通りの形式に送信されない。<BR>
NeosVR上でマルチユーザーで使用した場合の動作検証未実施<BR>
<BR>

## 問い合わせについて

製作者はプログラムには疎いので、質問していただいても恐らく回答できるだけの知識がないと思います。<BR>
<BR>

## ライセンス等

CCBY。<BR>
大したプログラムでもないので、「e1ght3」のクレジットさえ表記していただければ好きに使っていただいて構いません。<BR>
kuromoji.js を使用しているので、そちらのライセンスにも従ってください。<BR>
[https://github.com/takuyaa/kuromoji.js/](https://github.com/takuyaa/kuromoji.js/)<BR>
<BR>
dict の中身は以下の URL から取得をしています。<BR>
[https://cdn.jsdelivr.net/gh/takuyaa/kuromoji.js@master/dict/](https://cdn.jsdelivr.net/gh/takuyaa/kuromoji.js@master/dict/)
