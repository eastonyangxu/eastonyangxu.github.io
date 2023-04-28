#!/usr/bin/env sh

# 在当前目录执行脚本

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ../dist

git init
# 关联仓库 替换成自己的仓库
git remote add origin https://github.com/eastonyangxu/eastonyangxu.github.io.git

git checkout -b github.io
git add .
git commit -m 'github.io'
git push -f origin github.io

# 最后打包文件会被推送到远程分支 github.io ，在pages配置中选择 github.io 分支即可。