module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 5 versions',
        "> 1%",
        "maintained node versions"
      ]
    })
  ]
};