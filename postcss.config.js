module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue({file}){
            return file.indexOf("vant")!== 0 ?37.5:75
        },
        propList: ['*'],
      },
    },
  };