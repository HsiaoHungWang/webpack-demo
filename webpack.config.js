const path = require("path");

module.exports = {
    entry:'./main.js',
    output:{
        filename:'bundle.js',
        //__dirname 取得程式執行位置的實際路徑
        //C:\Users\iii\Documents\workspace\webpack-demo
        path: path.resolve(__dirname, 'dist') 
        //C:\Users\iii\Documents\workspace\webpack-demo\dist
    }
}
