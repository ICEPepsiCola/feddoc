# Web项目目录结构推荐

项目目录结构保持一致，有助于多人合作和理解

### 简要说明

* index.js主入口，router路由划分
* pages 所有路由页面
* layout 布局层
* components 所有组件。包括原子组件、业务公用组件、页面独有组件
* server api引入入口
* assets sass、图片资源入口，不常修改数据
* utils 工具文件夹

### 详细说明

```
├── public 公共静态资源目录
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src 代码主包
│   ├── config.ts 配置
│   ├── index.tsx 入口文件
│   ├── App.less 主页面样式/主要样式
│   ├── App.tsx 主页面
│   ├── assets css、image、svg等资源
│   │   └── logo.png
│   ├── blocks 403/400等页面
│   │   ├── 403.tsx
│   │   ├── 404.tsx
│   │   ├── 500.tsx
│   │   ├── Login.tsx
│   │   └── login.less
│   ├── components 组件库
│   │   └── KeyboardWrapper.tsx
│   ├── layout 布局层
│   │   ├── BasicLayout.tsx
│   │   └── Header.tsx
│   ├── pages 页面层
│   │   ├── message.tsx
│   │   ├── order.less
│   │   └── order.tsx
│   ├── router 路由层
│   │   ├── index.tsx
│   │   └── source.tsx
│   ├── server api层
│   │   ├── index.ts
│   └── utils 工具层
│       ├── formatRoutes.ts
│       ├── http.ts
│       └── userInfo.ts
├── README.md 项目说明
├── *.json babel等配置文件
├── cli.js 启动命令
├── *.js webpack等配置文件
├── package.json 
├── tsconfig.json 
└── *.lock npm lock
```
