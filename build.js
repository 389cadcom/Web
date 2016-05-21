({
	appDir: './res',									//待优化目录
	dir: './dist',										//输出的目录
	baseUrl: 'js',										//基于路径
	optimizeCss: 'standard.keepComments',

	fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/, //过滤	
	removeCombined: true,							//删除已合并文件
	paths: {										//相对路径
		jquery: 'empty:'
	},
	shim:{
	},
	modules:[										//要合并的模块
		{name: 'index'},
		{name: 'main'}
	]
})



/*
none							 不压缩，仅合并
standard						 标准压缩 去换行、空格、注释
standard.keepLines				 除标准压缩外，保留换行
standard.keepComments			 除标准压缩外，保留注释
standard.keepComments.keepLines  除标准压缩外，保留换行和注释


optimize: 'uglify',								//none
uglify: {
	toplevel: true,
	ascii_only: true,
	beautify: true,
	max_line_length: 1000
},

// 使用 Closure Compiler 时的可配置参数
closure: {
	CompilerOptions: {},
	CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
	loggingLevel: 'WARNING'
}

命令执行
node r.js -o cssIn=css/main.css out=css/built.css optimizeCss=standard

*/