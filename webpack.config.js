const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path"); //node.js 內建模組，用來處理路徑的相關功能

//console.log(__dirname);
module.exports = {
    // entry: './main.js',
    entry: './main.ts',    
    output: {
        filename: 'bundle.[chunkhash:8].js',
        //__dirname 取得程式執行位置的實際路徑        
        //C:\Users\iii\Documents\workspace\webpack-demo
        path: path.resolve(__dirname, 'dist')
        //C:\Users\iii\Documents\workspace\webpack-demo\dist
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                //use: ["style-loader", "css-loader"]  //<style></style>
                use:[MiniCssExtractPlugin.loader,"css-loader"]//<link rel="stylesheet" href="main.???????.css" />
            },
            {
                test:/\.s[ac]ss/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            },
            {
                test:/\.tsx?$/i,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]

    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html',
            //filename:'./site.html',
            abc: 'webpack demo',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename:'main.[chunkhash:8].css'
        })
    ],
    devServer: {
        port: 3000,
        open: true
    }
}
