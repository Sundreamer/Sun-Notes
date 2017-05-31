## 前言

- 之前在Sf上看到一篇使用 `Vue + Vuex` 来构建一个简单笔记的单页应用的文章（[链接](https://segmentfault.com/a/1190000005891026?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io#articleHeader15)），觉得还不错。

- 由于那篇文章里面使用的 `Vue + Vuex` 都是1.0的版本，所以自己用2.0的版本重新写了一个，大体结构上差不多

- 增加了一些功能
    + 使用 `Vue-router` 实现编辑笔记和查看笔记两种模式的切换
    + 用正则写了一个简易的 **Markdown** 编译器，支持大部分 **Markdown** 语法
    + 使用 `localStorage` 来保存笔记

- [在线Demo](#)

## 安装使用

``` bash
# 克隆项目代码
git clone git@github.com:Sundreamer/Sun-Notes.git

# 进入到项目根目录
cd sun-notes

# 安装依赖包
npm install

# serve with hot reload at localhost:8080
npm run dev

```
