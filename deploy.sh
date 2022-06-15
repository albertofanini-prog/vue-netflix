#!/usr/bin/env

set -e

npm run build

cd dist

git init

git add .

git commit -m "New Deploy"

git push -f https://github.com/albertofanini-prog/vue-netflix.git master:gh-pages

cd ..