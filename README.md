# spa-sample

* [x]node のバージョン確認(9.3)
* [x]service worker
  * サンプル作成済み
* [ ]クリテイィカル CSS
* [x]css のプロパティ順の指定の確認
  * stylelint-order でアルファベット順にしよう
* [x]class 命名規則(BEM)
  * `block__element--modifire`の形で
* [ ]端末の動作確認
* [x]pug 導入
* [ ]action の key の定数定義方法
* [ ]エディタとリンターの設定を確認しておく
  * prettier-atom がなんか変だがまあ良い
* [ ]eslint の設定
  * 改行の設定
* [ ]セキュリティ周りを調査しておく
* [ ]セッション/ログイン管理に関して調査をしておく
* [ ]環境毎、媒体毎の設定値の連携を考える
* [ ]ブラウザでサクッと動作を確認する

```
// ダメくさい
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssFlexibility from 'postcss-flexibility';
```

* [ ]コアな機能部分のみ
* ~~ログイン~~
* ルーティング
* riot の動作確認

## 開発時に改修したい

* c 環境上で submodules をビルドするようにする
* 媒体側で commit + push は時間がかかるしコンフリクトとかが面倒くさそう

### css

* 命名規則は BEM で
  * `block__element--modifire`の形で
* セレクタの使用はなし！
* 必ず、tag > .aaa に対して当てるようにする

## spa-sample で確認してもらうところ

* [ ]ストア周りの設計
* [ ]formatter のタイミング
* [ ]使用ライブラリの選定
  * コアな機能部分を一旦当てる
  * 見た目部分は使用とデザインによるため
* [ ]css の命名ルール
* [ ]eslint の設定(共有)
* [ ]stylelint の設定(共有)
