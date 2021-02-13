const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
*/

let productionSourceMaps = false;


mix.js([
    "resources/js/app.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "resources/js/custom.js",
], 'public/app.js').sourceMaps(productionSourceMaps, 'source-map');


mix.sass("resources/sass/app.scss",'public/app.css').options({
    processCssUrls: false,
    autoprefixer:true
});
