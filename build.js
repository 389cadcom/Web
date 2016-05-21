({
	appDir: './res',									//���Ż�Ŀ¼
	dir: './dist',										//�����Ŀ¼
	baseUrl: 'js',										//����·��
	optimizeCss: 'standard.keepComments',

	fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/, //����	
	removeCombined: true,							//ɾ���Ѻϲ��ļ�
	paths: {										//���·��
		jquery: 'empty:'
	},
	shim:{
	},
	modules:[										//Ҫ�ϲ���ģ��
		{name: 'index'},
		{name: 'main'}
	]
})



/*
none							 ��ѹ�������ϲ�
standard						 ��׼ѹ�� ȥ���С��ո�ע��
standard.keepLines				 ����׼ѹ���⣬��������
standard.keepComments			 ����׼ѹ���⣬����ע��
standard.keepComments.keepLines  ����׼ѹ���⣬�������к�ע��


optimize: 'uglify',								//none
uglify: {
	toplevel: true,
	ascii_only: true,
	beautify: true,
	max_line_length: 1000
},

// ʹ�� Closure Compiler ʱ�Ŀ����ò���
closure: {
	CompilerOptions: {},
	CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
	loggingLevel: 'WARNING'
}

����ִ��
node r.js -o cssIn=css/main.css out=css/built.css optimizeCss=standard

*/