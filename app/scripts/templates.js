define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["firstTimeHome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container container-first-time\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\"></li>\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/logo_corabastos.png\" class=\"img-responsive\"/>\r\n		</li>\r\n\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-buyer\">\r\n				<img src=\"images/boton_comprador.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-merchant\">\r\n				<img src=\"images/boton_comerciante.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"bar bar-header bar-calm tabs\">\r\n  <a class=\"tab-item tab-selected\" data-name=\"home\" href=\"#/\">\r\n    <i class=\"icon ion-compose\"> Log</i>\r\n  </a>\r\n  <a class=\"tab-item\" data-name=\"stats\" href=\"#/stats\">\r\n    <i class=\"icon ion-stats-bars\"> Stats</i>\r\n  </a>\r\n</div>";
  });

this["JST"]["registerMerchant"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container container-register-merchant\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/comerciante.png\" class=\"img-circle profile-picture\">\r\n		</li>\r\n\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-buyer\">\r\n				<img src=\"images/boton_comprador.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-merchant\">\r\n				<img src=\"images/boton_comerciante.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\r\n	Aquí se van a ver las estadísticas :D\r\n</h1>\r\n<div>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp*<br>\r\n|*<br>\r\n------------------------------------\r\n</div>";
  });

return this["JST"];

});