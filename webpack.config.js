/*global __dirname, module*/
// const fs = require("fs");
const path = require("path");
// const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const products_json = require("./root-app-src/HelpSystems/src/products.json");
// const styles_json = require(__dirname + "/root-app-src/HelpSystems/src/app/styles.config.json");
// const src_path = "root-app-src/HelpSystems/src/";
// const react_dir = "react_app";

module.exports = env => ({
    // devtool: env.prod === "true" || env.prodinspect === "true" ? undefined : "cheap-eval-source-map",

    entry: './src/index.js',

    output: {
        filename: "app.react.js",
        path: path.join(__dirname, "dist"),
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "instagram": path.resolve(__dirname, "node_modules/instagram-web-api/lib/index.js"),
            "prop-types": path.resolve(__dirname, "node_modules/prop-types/prop-types.js"),
            params: path.resolve(__dirname, "src/params.js"),
            "ui-components": path.resolve(__dirname, "/src/components/index.jsx"),
            classnames: path.resolve(__dirname, "node_modules/classnames/index.js"),
        }
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js)$|\.(jsx)$/,
                loader: "eslint-loader",
                exclude: [/node_modules/, /js[\/\\]/]
            },
            {
                test: /\.(js)$|\.(jsx)$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, "../"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [require.resolve("babel-preset-react"), require.resolve("babel-preset-es2015"), require.resolve("babel-preset-stage-0")],
                        plugins: [require.resolve("babel-plugin-transform-class-properties")]
                    }
                }
            }
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             // Inserts all imported styles into the html document
            //             loader: "style-loader"
            //         }, {
            //             // Translates CSS into CommonJS
            //             loader: "css-loader"
            //         }, {
            //             // Compiles Sass to CSS
            //             loader: "sass-loader",
            //             options: {
            //                 includePaths: ["sass/main.scss"]
            //             }
            //         }, {
            //             // Reads Sass vars from files or inlined in the options property
            //             // loader: "@epegzz/sass-vars-loader",
            //             // options: {
            //             //     syntax: 'scss',
            //             //     files: [
            //             //         //  Load vars from JavaScript file
            //             //         path.resolve(__dirname, "/root-app-src/HelpSystems/src/app/styles.config.js"),
            //             //         styles_json
            //             //     ]
            //             // }
            //         }, {
            //             loader: "sass-loader",
            //             options: {
            //                 functions: {
            //                     "get($keys)": function(keys) {
            //                         keys = keys.getValue().split(".");
            
            //                         let result = styles_json;
            //                         let i;
            
            //                         for (i = 0; i < keys.length; i++) {
            //                             result = result[keys[i]];
            
            //                             if (typeof result === "string") {
            //                                 result = convertStringToSassDimension(result);
            //                             } else if (typeof result === "object") {
            //                                 Object.keys(result).forEach(function(key) {
            //                                     const value = result[key];
            //                                     result[key] = convertStringToSassDimension(value);
            //                                 });
            //                             }
            //                         }
            
            //                         result = sassUtils.castToSass(result);
            //                         return result;
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // }
        ]
    },
    // optimization: {
    //     minimize: env.prod === "true" || env.prodinspect === "true",
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "vendor",
    //                 filename: src_path + "vendor.react.js",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // }
});
