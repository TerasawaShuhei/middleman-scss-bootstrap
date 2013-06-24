requirejs.config({
    baseUrl: 'assets/js',
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min','jquery.min'],
        bootstrap: 'bootstrap.min',
        // link: 'link',
        setting: 'setting',
        socialplugin: 'social-plugin'
    },
    shim: {
        'bootstrap':{deps: ['jquery']},
        'setting':{deps: ['jquery']}
    }
});

requirejs([
    'jquery',
    'bootstrap',
    // 'link',
    'setting',
    'socialplugin'
    ], function($, _bootstrap){
        return {};
});
