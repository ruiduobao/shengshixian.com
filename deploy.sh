#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'b.xugaoyi.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xugaoyi/vuepress-theme-vdoing-doc.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://xugaoyi:${GITHUB_TOKEN}@github.com/xugaoyi/vuepress-theme-vdoing-doc.git
  git config --global user.name "xugaoyi"
  git config --global user.email "894072666@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
cd ../
mkdir dist2
cd dist2
mkdir vuepress-theme-vdoing-doc
cd ../
mv dist/* dist2/vuepress-theme-vdoing-doc
cd dist2
echo 'doc.xugaoyi.com' > CNAME  # 自定义域名

git init
git add -A
git commit -m "${msg}"

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:xgy/vdoing-doc/vdoing-doc.git
else
  codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/vdoing-doc/vdoing-doc.git
fi
git push -f $codingUrl master # 推送到coding


cd -
rm -rf dist
rm -rf dist2

# cd - # 退回开始所在目录
# rm -rf docs/.vuepress/dist