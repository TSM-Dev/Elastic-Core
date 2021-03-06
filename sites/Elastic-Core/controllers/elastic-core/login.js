var $ = exports;

var common = require('../../elastic-core/common.js')

// GET Login Page
$.getLogin = function() {

	var self = this;

	common.model = {};
	common.model.message = '';
	common.model.email = '';

	var page = common.make(self, common.pages.getLogin);

	self.html(page);
};

// POST Login Page
$.postLogin = function() {

	var self = this;

	common.EBLogin(self, function(result) {

		if(result.success == false) {

			common.model.message = "Invalid username or password.";
			common.model.email = self.post.email;

			var page = common.make(self, common.pages.getLogin);			

			self.html(page);

		} else {

			self.redirect(common.pages.home.uri);
		}
	});
};

//GET Logout Page
$.logout = function() {

	var self = this;

	common.model = {};
	common.model.page = common.routes.logout.page;

	common.EBLogout(self);

	self.redirect(common.pages.home.uri);
};
