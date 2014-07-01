var grunt = require('grunt');

function licenseBanner(){
	var currentYear = '' + new Date(Date.now()).getFullYear();

	return grunt.template.process(
		grunt.file.read('grunt/templates/licenseBanner.js.jst')
		,{
			data: {
				currentYear: currentYear
				,name: grunt.option('name')
				,author: grunt.option('author')
			}
		}
	);
}

module.exports = {
	dev: {
		src: ['src/arrow.js']
		,dest: 'dist/arrow.js'
	}
	,options: {
		stripBanners: true
		,banner: licenseBanner()
		,process: {
			data: {
				version: grunt.option('version')
			}
		}
	}
};