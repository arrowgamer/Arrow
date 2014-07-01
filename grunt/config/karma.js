module.exports = {
	options: {
		configFile: 'karma.conf.js'
	}
	,unit: {
		browsers: [
			'Firefox'
			,'chrome_without_security'
			,'ChromeCanary'
			,'Opera'
			,'Safari'
			,'PhantomJS'
		]
	}
	,travis: {
		singleRun: true
		,browsers: [
			'PhantomJS'
		]
	}
};