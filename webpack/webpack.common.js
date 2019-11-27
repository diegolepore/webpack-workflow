const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.handlebars/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/img',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                    progressive: true,
                    quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }   
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.handlebars',
        }),
        new MiniCssExtractPlugin({filename: 'css/[name]-styles.css'})
    ]
}