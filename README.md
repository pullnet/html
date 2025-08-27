# 共通クラス

## display

レスポンシブ対応の display 系のクラスは Bootstrap 風に`class="d-md-flex d-none"`
のように使えます。  
Bootstrap は min ベースで普段のブレイクポイントは max ベースなので、Bootstrap とは逆のクラスを指定する点だけお気を付けください。  
例  
PC 専用 `class="d-md-none d-block"`  
SP 専用 `class="d-none d-md-block"`

# 関数の使い方

## setClamp

### 概要

`setClamp` は、 **画面幅に応じてサイズが自動で伸縮する CSS の `clamp()` を生成する SCSS 関数** です。  
メディアクエリを使わなくても、指定した最小値〜最大値の間で線形補間してくれるので、レスポンシブデザインがシンプルに書けます。

---

### シンタックス

```scss
@function setClamp(
  $min, // 最小サイズ(px)
  $max, // 最大サイズ(px)
  $min-view-port: 375, // ビューポート最小幅(px)
  $max-view-port: 1920, // ビューポート最大幅(px)
  $rem: 16 // ルートフォントサイズ(px)
)
```

- `$min` と `$max` を px 単位で指定
- ビューポート幅 `$min-view-port` ～ `$max-view-port` の間で線形にスケーリング
- 出力は `rem` に変換されます

---

### 返り値

```css
clamp(最小値, 可変式, 最大値)
```

例：

```scss
font-size: setClamp(16, 32);
```

出力：

```css
font-size: clamp(1rem, 0.75rem + 1vw, 2rem);
```

- 画面幅 375px → 16px (1rem)
- 画面幅 1920px → 32px (2rem)
- その間は自動補間

---

### 使用例

#### フォントサイズ

```scss
.title {
  font-size: setClamp(16, 32);
}
```

#### パディング・マージン

```scss
.section {
  padding: setClamp(20, 60);
}
```

#### アイコンサイズ

```scss
.icon {
  width: setClamp(24, 48);
  height: setClamp(24, 48);
}
```

---

### 使いどころ

- フォントサイズを **スマホ → PC で自然に拡大**させたいとき
- セクション間の余白（`margin` / `padding`）を **画面幅に応じて可変にしたいとき**
- アイコンやボタンサイズを **レスポンシブに調整したいとき**

👉 メディアクエリを細かく書く必要がなくなり、CSS がすっきりします。

---

### 注意点

- 最小値・最大値は **px 指定**してください（内部で `rem` に変換されます）
- `$rem` がプロジェクトのルートフォントサイズと一致しているか確認してください（通常 16px）
- 特定のブレイクポイントで「ピタッと固定」したい場合はメディアクエリを併用してください
