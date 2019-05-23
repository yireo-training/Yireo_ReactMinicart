const gulp = require("gulp");
const webpack = require("webpack");
const gutil = require("gulp-util");
const path = require("path");

gulp.task("build", function(callback) {
    let config = {
        mode: "development",
        entry: './Minicart.js',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        output: {
            filename: './bundle.js',
            path: path.resolve(__dirname, 'web/js/compiled/')
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: [
                'react_source',
                'node_modules'
            ]
        },
        context: path.resolve(__dirname, 'react_source/')
    };

    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("watch", function () {
    gulp.watch('react_source/', ["build"]);
});

gulp.task("default", ["build", "watch"]);
