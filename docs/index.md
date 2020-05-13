---
home: true
heroImage: https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png
heroText: vuepress-theme-vdoing
tagline: 🚀一款简洁高效的VuePress 知识管理&博客 主题
actionText: 快速上手 →
actionLink: /pages/a2f161/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 结构化
    details: 自动生成侧边栏、目录页、索引页、面包屑等，轻松构建一个结构化知识库
    # link: /web/ # 可选
    # imgUrl: /img/web.png # 可选
  - title: 碎片化&个性化
    details: 博客功能提供一种碎片化形态，文章想写就写。并提供个性化博客配置，个性由你定义
    # link: /ui/
    # imgUrl: /img/ui.png
  - title: 简洁高效
    details: 以 Markdown 为中心的项目结构，内置自动化工具，以更少的配置帮助你专注于写作。配合多维索引快速定位每个知识点
    # link: /technology/
    # imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---


<!-- [Evan's blog](https://xugaoyi.com/) | [效果图](https://xugaoyi.com/pages/d557b9a89a215d2e) | [指南 (必读)](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/350)

温馨提示：目前并非稳定版，因此功能和文档可能会有调整。欢迎star持续关注，一定会有惊喜哟🎉

> <https://b.xugaoyi.com/> ←此版本正在开发和测试中，源码未发布，敬请期待！ -->

## 初衷

这个主题的初衷是打造一个 `结构化` 与 `碎片化` 并存的个人`知识库兼博客`。

[**主题初衷与诞生**](/pages/52d5c3)



## 这个主题可以做什么？
* 案例1：[知识库]()
* 案例2：[博客站]()
* 案例3：[知识库兼博客站](https://xugaoyi.com/)
* 案例4：文档站(本站点)

## 介绍

1. 根据 [VuePress](https://vuepress.vuejs.org/zh/) 的默认主题修改而成，仍以官方配置为主，追求`简洁`同时又不失`美观`。

2. 这是一个兼具 `知识管理` & `博客文章` & `技术文档` 的主题。

3. 一个`结构化的知识库`，形成一本本像书一样清晰易读的知识库。同时博客功能提供一种`碎片化`形态。

4. 添加方便管理学习笔记和技术文档的 `自动生成结构化侧边栏`、`自动生成front matter`、`目录页`、`扩展的搜索框插件`、`面包屑`、`快捷翻页按钮` 等，让你快速定位到任何你想要找的内容

   <details>
    <summary>查看文档</summary>
    <ul>
        <li><b>自动生成结构化侧边栏</b> 让你拥有一个结构清晰的侧边栏，无需手动配置。<br/>
        <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/issues/113">构建结构化站点的核心配置和约定</a>
        </li>
        <li><b>自动生成front matter</b> 助你专注于写作，你无需给每个.md文件都手写front matter。<br/>
        <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/issues/324">自动生成front matter</a>
        </li>
        <li>简单的<b>目录页</b>配置，查看 <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/issues/330">目录页配置</a>
        </li>
        <li>
        可以添加第三方搜索链接的<a href="https://github.com/xugaoyi/vuepress-plugin-thirdparty-search">扩展的搜索框插件</a>，提高搬砖效率。
        </li>
       <li>
        	<b>面包屑</b>和<b>快捷翻页按钮</b>内置于主题，无需配置。（面包屑数据依赖于自动生成的结构化侧边栏）
        </li>
    </ul>
   </details>


5. 添加博客相关的 `文章信息栏（作者与创建时间）`、`最近更新栏` 、`博主信息栏`、`页脚版权栏`、`时间轴+分类页`、`评论插件`等。
   <details>
    <summary>查看文档</summary>
    <ul>
        <li>
          文章信息栏（作者与创建时间）、最近更新栏、博主信息栏和页脚版权栏等在
          <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/issues/343">config.js配置</a>
        </li>
        <li>
          <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/issues/331">时间轴+分类 页面配置</a> 
        </li>
        <li>
          <a href="https://github.com/dongyuanxin/vuepress-plugin-comment">评论栏插件</a>
        </li>
    </ul>
   </details>
   
6. 首页样式美化

   [首页配置](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/338)

7. 多种颜色模式供用户选择：`跟随系统`、`浅色模式`、`深色模式`、`阅读模式`

   [palette.styl主题调色板使用说明](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/345)

8. 提高搬砖效率的辅助工具： [批量操作front matter工具](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/351)

## 快速上手

```bash
# clone the project
git clone https://github.com/xugaoyi/vuepress-theme-vdoing.git

# enter the project directory
cd vuepress-theme-vdoing

# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev
```
## 更新记录
[记录](https://github.com/xugaoyi/vuepress-theme-vdoing/commits/master)

## 插件

推荐几款插件


1. 对*前端程序员*很友好`Demo演示模块插件`，很方便的在博客中插入demo，同时可以查看demo源码，跳转到codepen在线编辑。

   [vuepress-plugin-demo-block](https://www.npmjs.com/package/vuepress-plugin-demo-block)

2. 代码块一键复制插件

   [vuepress-plugin-one-click-copy](https://www.npmjs.com/package/vuepress-plugin-one-click-copy)


3. 可以添加第三方搜索链接的搜索框插件

   [vuepress-plugin-thirdparty-search](https://github.com/xugaoyi/vuepress-plugin-thirdparty-search)


4. 百度推送和统计插件

   [vuepress-plugin-baidu-autopush](https://www.npmjs.com/package/vuepress-plugin-baidu-autopush)

   [vuepress-plugin-baidu-tongji](https://www.npmjs.com/package/vuepress-plugin-baidu-tongji)

5. 更多插件查看官方[Awesome VuePress](https://github.com/vuepressjs/awesome-vuepress)

## 部署

内置 `deploy.sh` 和 [GitHub Actions](https://github.com/features/actions) 两种`自动部署`脚本，一键发布到 GitHub Pages 或 国内访问速度更快的Coding Pages。

[自动部署到 github 或 coding](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/325)



## 其他

1. 评论模块的搭建

   [使用Gitalk实现静态博客无后台评论系统](https://xugaoyi.com/pages/1da0bf9a988eafe5/)

2. 自定义域名及解析，[详情](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/326)

3. SEO相关

   ```js
   // config.js
   module.exports = {
       description: '填写网站描述', // 以 <meta> 标签渲染到页面html中
       head: [ // 注入到页面<head> 中的标签,[tagName, { attrName: attrValue }]
           ['meta', { name: 'keywords', content: '填写关键字'}]
       ]
   }
   ```

4. 图床

   [GitHub + jsDelivr + TinyPNG+ PicGo 打造稳定快速、高效免费图床](https://xugaoyi.com/pages/a5f73af5185fdf0a/)

5. 结合GitHub Actions开发的每天定时百度推送，加快收录

   [GitHub Actions 定时运行代码：每天定时百度链接推送](https://xugaoyi.com/pages/f44d2f9ad04ab8d3/)

6. 在线编辑和新增文章的方法，[详情](https://github.com/xugaoyi/vuepress-theme-vdoing/issues/327)

## 支持
如果你觉得这个项目帮助到了你，可以为作者贡献一杯82年的雪碧🍸。你任何形式的支持都是对我的肯定，我会坚持初心把这个项目做得更好。
| Wechat | Alipay |
| :---: | :---: |
| <img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200410113708.jpg" alt="Wechat QRcode" width=180>| <img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200410113707.jpg" alt="Alipay QRcode" width=180> |

## 许可证
[MIT](https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE)

Copyright (c) 2019-present Evan Xu
