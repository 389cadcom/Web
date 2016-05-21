var require = {
	urlArgs: 'time='+Date.now(),
	baseUrl: 'res/js',
	config:{
		'js/a':{
			size: 'base'
		}
	},
	paths:{
		'jquery': ['../libs/jquery-1.11.0'],
		'bootstrap': ['../libs/bootstrap.min'],
		'metisMenu': ['jquery.metisMenu']
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'jquery.scroll':{
			deps: ['jquery'],
			exports: 'jQuery.fn.scroll'
		},
		'bootstrap': ['jquery'],
		'metisMenu': ['jquery', 'bootstrap']
	}
}
