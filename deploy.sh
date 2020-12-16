#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "module.exports = '/vuepress-theme-vdoing-doc/'" > base.js
npm run build
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

cd -
rm -rf docs/.vuepress/dist

# deploy to coding
echo "module.exports = '/'" > base.js
npm run build
cd docs/.vuepress/dist

echo 'doc.xugaoyi.com' > CNAME  # 自定义域名

# cd ../
# mkdir dist2
# cd dist2
# mkdir vuepress-theme-vdoing-doc
# cd ../
# mv dist/* dist2/vuepress-theme-vdoing-doc
# cd dist2
# echo 'doc.xugaoyi.com' > CNAME  # 自定义域名

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true
  codingUrl=git@e.coding.net:xgy/vdoing-doc/vdoing-doc.git
else
  codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/vdoing-doc/vdoing-doc.git
fi

git init
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding


# cd -
# rm -rf dist
# rm -rf dist2

cd -
rm -rf docs/.vuepress/dist
