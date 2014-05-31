define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"bar bar-header bar-calm tabs\">\r\n  <a class=\"tab-item tab-selected\" data-name=\"home\" href=\"#/\">\r\n    <i class=\"icon ion-compose\"> Log</i>\r\n  </a>\r\n  <a class=\"tab-item\" data-name=\"stats\" href=\"#/stats\">\r\n    <i class=\"icon ion-stats-bars\"> Stats</i>\r\n  </a>\r\n</div>";
  });

this["JST"]["register1"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"register1-content\">\r\n	<ul class=\"list\">\r\n		<li class=\"item\">\r\n			<div class=\"bar bar-header bar-positive\">\r\n				<h1 class=\"title\">bar-positive</h1>\r\n			</div>\r\n		</li>\r\n		<li class=\"item\">\r\n			<div class=\"bar bar-header bar-assertive\">\r\n				<h1 class=\"title\">bar-assertive</h1>\r\n			</div>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\r\n	Aquí se van a ver las estadísticas :D\r\n</h1>\r\n<div>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp*<br>\r\n|*<br>\r\n------------------------------------\r\n</div>";
  });

return this["JST"];

});