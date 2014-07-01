module.exports = function(config) {
	config.set({
		basePath: ''
		,frameworks: ['jasmine']
		,autoWatch: false
		,singleRun: true
		,preprocessors: {}
		,reporters: ['progress']
		,port: 9876
		,runnerPort: 9100
		,colors: true
		,logLevel: config.LOG_INFO
		,captureTimeout: 60000

		,customLaunchers: {
			chrome_without_security: {
				base: 'Chrome'
				,flags: ['--disable-web-security']
			}
		}

		,files: [
			{
				pattern: 'test/fixtures/**/*.html'
				,served: true
				,included: false
			}
			,'bower_components/jquery/dist/jquery.js'
			,'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
			,'src/*.js'
			,'test/*.js'
		],

		plugins: [
			'karma-jasmine'
			,'karma-phantomjs-launcher'
			,'karma-firefox-launcher'
			,'karma-chrome-launcher'
		]
	});
};