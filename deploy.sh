#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

initDist(){
  echo $1 > base.js
  npm run build
  cd docs/.vuepress/dist
}

initDist "module.exports = '/vuepress-theme-vdoing-doc/'"
echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xugaoyi/vuepress-theme-vdoing-doc.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://xugaoyi:${GITHUB_TOKEN}@github.com/xugaoyi/vuepress-theme-vdoing-doc.git
  git config --global user.name "xugaoyi"
  git config --global user.email "894072666@qq.com"
fi

initGit(){
  git init
  git add -A
  git commit -m "${msg}"
}
initGit
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist


# deploy to coding
# initDist "module.exports = '/'"
# echo 'doc.xugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true
#   codingUrl=git@e.coding.net:xgy/vdoing-doc/vdoing-doc.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/vdoing-doc/vdoing-doc.git
# fi

# initGit
# git push -f $codingUrl master # 推送到coding

# cd -
# rm -rf docs/.vuepress/dist
