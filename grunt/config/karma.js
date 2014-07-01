module.exports = {
	options: {
		configFile: 'karma.conf.js'
	}
	,unit: {
		browsers: [
			'Firefox'
			,'chrome_without_security'
		]
	}
	,travis: {
		singleRun: true
		,browsers: ['PhantomJS']
	}
};