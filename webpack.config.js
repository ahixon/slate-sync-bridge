module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './bundle.js',
    libraryTarget: 'umd',
    library: 'slate-sync-bridge',
    umdNamedDefine: true,
  },
  mode: 'development',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  // addition - add source-map support
  devtool: "source-map"
}