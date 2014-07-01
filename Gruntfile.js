module.exports = function(grunt){
	var pkg = require('./package.json');

	grunt.option('version', pkg.version);
	grunt.option('name', pkg.name);
	grunt.option('author', pkg.author);

	grunt.initConfig({
		pkg: pkg
		,jsonlint: require('./grunt/config/jsonlint.js')
		,jshint: require('./grunt/config/jshint.js')
		,karma: require('./grunt/config/karma.js')
		,uglify: require('./grunt/config/uglify.js')
		,concat: require('./grunt/config/concat.js')
	});

	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('default'
		,'Run linters, tests and minify all files'
		,[
			'jsonlint'
			,'jshint'
			,'karma:unit'
			,'concat'
			,'uglify'
		]
	);

	grunt.registerTask('unit'
		,'Runs only the unit tests in specified browsers'
		,[
			'karma:unit'
		]
	);

	grunt.registerTask('test'
		,'Travis CI task consisting of linters and unit tests running in PhantomJS'
		,[
			'jsonlint'
			,'jshint'
			,'karma:travis'
		]
	);
};
