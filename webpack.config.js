const path = require('path');
//install and configure html-webpack-plugin
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    mode:'development',
   entry:{
    index:'./src/index.js',
    
   },
    

    module: {
        rules: [
            {
                test: /\.css$/i, //css loaders
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //image loader
                type:'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, //fonts
                type:'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i, //data loader csv or tsv
                use:['csv-loader'],
            },
            {
                test: /\.xml$/i, //data loader for xml type
                use:['xml-loader'],
            },
            {
                test:/\.(?:js|mjs|cjs)$/, //babbel transpiller
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }

            }
        ],
    },
    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'title that goes in title tag',
            //filename:index.html,
            inject:"body", //where the JS script file placed, header ('head') or body
           // scriptLoading:'defer', //if the Js script to be inserde is specified as 'head'

        })
    ],
    output: {
        // filename: 'bundle.js',
        filename:'[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         clean:true,
         publicPath:'/',
     },
     optimization:{
        runtimeChunk:'single',
     },
    
};