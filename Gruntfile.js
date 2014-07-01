module.exports = function(grunt){
	var pkg = require('./package.json');

	grunt.option('version', pkg.version);

	grunt.initConfig({
		pkg: pkg
		,jsonlint: require('./grunt/config/jsonlint.js')
		,jshint: require('./grunt/config/jshint.js')
		,karma: require('./grunt/config/karma.js')
	});

	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');


	grunt.registerTask('default'
		,'Run linters, tests and minify all files'
		,[
			'jsonlint'
			,'jshint'
			,'karma:unit'
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
