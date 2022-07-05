const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
    publicPath: '/vue-app', //リポジトリ名を指定
    outputDir: 'docs', //GitHubPagesで公開するにはdistではなくdocs配下にコンパイルする
}