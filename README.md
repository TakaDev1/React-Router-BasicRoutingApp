# React-Router-BasicRoutingApp

React Routerを使用して、HomeページとAboutページの基本的なルーティングを実装した練習用アプリです。

## 概要

`BrowserRouter`、`Routes`、`Route`、`Link`を使用して、ページ間のルーティングとナビゲーションを実装しています。

## 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS
* Vite

## 機能

* Homeページの表示
* Aboutページの表示
* 共通ナビゲーション
* Home → Aboutのページ遷移
* About → Homeのページ遷移

## ルーティング

| URL      | コンポーネント | ページ   |
| -------- | ------- | ----- |
| `/`      | `Home`  | Home  |
| `/about` | `About` | About |

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## React Routerの構成

### BrowserRouter

アプリケーション全体のルーティングを管理します。

```tsx
<BrowserRouter>
  ...
</BrowserRouter>
```

### Routes

アプリケーションで使用するルートをまとめます。

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### Route

URLと表示するコンポーネントを対応付けます。

```tsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

### Link

ページを再読み込みせずに別のルートへ遷移します。

```tsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

## Navigation

共通ナビゲーションにはTailwind CSSを使用しています。

```tsx
<nav className="flex gap-4 p-4 bg-gray-100">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</nav>
```

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。

## 学習ポイント

* `BrowserRouter`によるルーティング管理
* `Routes`と`Route`によるルート定義
* `Link`によるページ遷移
* 共通ナビゲーションの作成
* React RouterとTypeScriptの組み合わせ
* ページコンポーネントと共通コンポーネントの分離
