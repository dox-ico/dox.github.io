const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
    publicPath: './', //リポジトリ名を指定
	assetsDir: './',
    outputDir: 'docs', //GitHubPagesで公開するにはdistではなくdocs配下にコンパイルする
}