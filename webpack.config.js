const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); //node.js 內建模組，用來處理路徑的相關功能

//console.log(__dirname);
module.exports = {
    entry:'./main.js',
    output:{
        filename:'bundle.[chunkhash:8].js',
        //__dirname 取得程式執行位置的實際路徑        
        //C:\Users\iii\Documents\workspace\webpack-demo
        path: path.resolve(__dirname, 'dist') 
        //C:\Users\iii\Documents\workspace\webpack-demo\dist
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./template.html',
        //filename:'./site.html',
        abc:'webpack demo',
        inject:'body'
    })]
}
