var grunt = require('grunt');

function distributionBanner(){
	var currentYear = '' + new Date(Date.now()).getFullYear();

	return grunt.template.process(
		grunt.file.read('grunt/templates/distributionBanner.js.jst')
		,{
			data: {
				currentYear: currentYear
				,version: grunt.option('version')
				,name: grunt.option('name')
				,author: grunt.option('author')
			}
		}
	);
}

module.exports = {
	dist: {
		files: {
			'dist/arrow.min.js': ['src/arrow.js']
		}
		,options: {
			banner: distributionBanner()
		}
	}
};