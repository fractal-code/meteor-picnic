/*jslint white:true */

Package.describe({
    name: 'gliese-technology:picnic',
    version: '0.0.1',
    summary: 'Picnic CSS library wrapped for meteor',
    git: 'https://github.com/gliese-technology/picnic'
});

Package.onUse(function (api) {
    api.addFiles([
        /* Library */
        "src/picnic.scss",
        "src/plugins.scss",
        "src/raw.scss",

        /* Plugins */

        // button
        "plugins/button/_class.scss",
        "plugins/button/_plugin.scss",
        // card
        "plugins/card/_class.scss",
        "plugins/card/_plugin.scss",
        // checkbox
        "plugins/checkbox/_class.scss",
        "plugins/checkbox/_plugin.scss",
        // dropimage
        "plugins/dropimage/_class.scss",
        "plugins/dropimage/_plugin.scss",
        // fontello
        "plugins/fontello/_plugin.scss",
        // generic
        "plugins/generic/_plugin.scss",
        // grids
        "plugins/grids/_plugin.scss",
        // input
        "plugins/input/_plugin.scss",
        // label
        "plugins/label/_plugin.scss",
        // modal
        "plugins/modal/_plugin.scss",
        // nav
        "plugins/nav/_plugin.scss",
        // normalize
        "plugins/normalize/_plugin.scss",
        // radio
        "plugins/radio/_class.scss",
        "plugins/radio/_plugin.scss",
        // select
        "plugins/select/_class.scss",
        "plugins/select/_plugin.scss",
        // stack
        "plugins/stack/_plugin.scss",
        // table
        "plugins/table/_plugin.scss",
        // tabs
        "plugins/tabs/_plugin.scss",
        // tooltip
        "plugins/tooltip/_plugin.scss",


        /* Themes */

        // default
        "themes/default/_colors.scss",
        "themes/default/_theme.scss",
        // squared
        "themes/squared/_colors.scss",
        "themes/squared/_plugins.scss",
        "themes/squared/_theme.scss"

    ], 'server');
});

