// (c) Laxmi Somni 2017. laxmi.somni@gmail.com
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['crud_spec.js'],
    framework: 'jasmine',
	resultJsonOutputFile: 'report.json',
    onPrepare: function() {
      var jasmineReporters = require('C://Users//Eval9//AppData//Roaming//npm//node_modules//jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
      );
 }//end onPrepare,
,
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
