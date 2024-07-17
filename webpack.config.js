const path = require('path');

module.exports = {
    mode: 'development',
    entry: './AppEngine/Domains/AgencesDeVoyages/ReactComponents/index.js', // the entry point for our app
    output: {
        path: path.resolve(__dirname, 'public/agence_dist'), // the output folder for our bundled files
        filename: 'bundle.js' // the name of the output file
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',  // Use asset/resource in Webpack 5
                generator: {
                    filename: 'img/[path][name][ext]', // Keep the same path and name
                },
                // For Webpack 4, use file-loader
                // use: {
                //   loader: 'file-loader',
                //   options: {
                //     name: 'img/[path][name].[ext]',
                //     context: 'src', // Adjust according to your source directory
                //   },
                // },
            },

            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'svg-url-loader',
                    },
                ],
            },
        ]
    },

};
