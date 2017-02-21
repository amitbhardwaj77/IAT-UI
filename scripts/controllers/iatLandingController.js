var app = angular.module('iat', ['ui.select', 'ngSanitize']);
/*app.filter('isempty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});*/
app.controller('iatLandingController', function ($scope, iatLandingService) {
	var self = this;
	function init(){
		self.searchFields = [];
		self.controllerNames = [];
		self.getControllerName();
		self.addExtraSearch();
		self.data1={
			"nodes":{},
    		"edges":{}
    	};
    	createGraph();
	}
	self.getControllerName = function(){
		iatLandingService.getControllerNames().then(function(response){
			angular.forEach(response.fileNames, function(fileName){
				self.controllerNames.push(fileName);
			});
		});
	};
	self.addExtraSearch = function(){
		self.searchFields.push({});
		self.index = self.searchFields.length-1;
	};

	function createGraph() {
		self.data1={
  "nodes": {
    "getAutoPay": {
      "color": "#EEB211",
      "shape": "dot",
      "radius": 39,
      "label": "getAutoPay",
      "alpha": 1
    },
    "Travel": {
      "color": "#21526a",
      "shape": "dot",
      "radius": 30,
      "label": "Travel 24",
      "counter": "24",
      "alpha": 1
    },
    "Education": {
      "color": "#941e5e",
      "shape": "dot",
      "radius": 40,
      "label": "Education 21",
      "alpha": 1
    },
    "Ecommerce": {
      "color": "#c1d72e",
      "shape": "dot",
      "radius": 35,
      "label": "Ecommerce 17",
      "alpha": 1
    },
    "HealthCare": {
      "color": "#619b45",
      "shape": "dot",
      "radius": 22,
      "label": "HealthCare 53",
      "alpha": 1
    },
    "MissedCall": {
      "color": "#009fc3",
      "shape": "dot",
      "radius": 47,
      "label": "Missed Call 234",
      "alpha": 1
    },
    "Realty": {
      "color": "#d11b67",
      "shape": "dot",
      "radius": 33,
      "label": "Realty 4",
      "alpha": 1
    },
    "Travel1": {
      "label": "Company1",
      "color": "#21526a",
      "alpha": 0
    },
    "Travel2": {
      "label": "Company 2",
      "color": "#21526a",
      "alpha": 0
    },
    "Travel3": {
      "label": "Company 3",
      "color": "#21526a",
      "alpha": 0
    },
    "Education1": {
      "label": "Edu Company1",
      "color": "#941e5e",
      "alpha": 0
    },
    "Education2": {
      "label": "Edu Company 2",
      "color": "#941e5e",
      "alpha": 0
    },
    "Education3": {
      "label": "Edu company 3",
      "color": "#941e5e",
      "alpha": 0
    },
    "Ecommerce1": {
      "label": "Ecommerce company 1",
      "color": "#c1d72e",
      "alpha": 0
    },
    "Ecommerce2": {
      "label": "Ecommerce company 2",
      "color": "#c1d72e",
      "alpha": 0
    },
    "Ecommerce3": {
      "label": "Ecommerce company 3",
      "color": "#c1d72e",
      "alpha": 0
    },
    "HealthCare1": {
      "label": "h1",
      "color": "#619b45",
      "alpha": 0
    },
    "HealthCare2": {
      "label": "h2",
      "color": "#619b45",
      "alpha": 0
    },
    "HealthCare3": {
      "label": "h3",
      "color": "#619b45",
      "alpha": 0
    },
    "HealthCare4": {
      "label": "h4",
      "color": "#619b45",
      "alpha": 0
    },
    "MissedCall1": {
      "label": "m1",
      "color": "#009fc3",
      "alpha": 0
    },
    "MissedCall2": {
      "label": "m2",
      "color": "#009fc3",
      "alpha": 0
    },
    "MissedCall3": {
      "label": "m3",
      "color": "#009fc3",
      "alpha": 0
    },
    "Realty1": {
      "label": "r1",
      "color": "#d11b67",
      "alpha": 0
    },
    "Realty2": {
      "label": "r2",
      "color": "#d11b67",
      "alpha": 0
    },
    "Realty3": {
      "label": "r3",
      "color": "#d11b67",
      "alpha": 0
    }
  },
  "edges": {
    "getAutoPay": {
      "Travel": {},
      "Education": {},
      "Ecommerce": {},
      "HealthCare": {},
      "MissedCall": {},
      "Realty": {}
    },
    "Travel": {
      "Travel1": {},
      "Travel2": {},
      "Travel3": {}
    },
    "Education": {
      "Education1": {},
      "Education2": {},
      "Education3": {}
    },
    "Ecommerce": {
      "Ecommerce1": {},
      "Ecommerce2": {},
      "Ecommerce3": {}
    },
    "HealthCare": {
      "HealthCare1": {},
      "HealthCare2": {},
      "HealthCare3": {},
      "HealthCare4": {}
    },
    "MissedCall": {
      "MissedCall1": {},
      "MissedCall2": {},
      "MissedCall3": {}
    },
    "Realty": {
      "Realty1": {},
      "Realty2": {},
      "Realty3": {}
    }
  }
};
		console.log("gd=",self.data1);
    }
	init();
});