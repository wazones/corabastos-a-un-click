define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["firstTimeHome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container container-first-time\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\"></li>\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/logo_corabastos.png\" class=\"img-responsive\"/>\r\n		</li>\r\n\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-buyer\">\r\n				<img src=\"images/boton_comprador.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-merchant\">\r\n				<img src=\"images/boton_comerciante.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["localForm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container container-local-form\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<h1>Registro de local</h1>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<div class=\"form-group\">\r\n				<label>Número de local</label>\r\n				<input type=\"number\" class=\"form-control local-number\" placeholder=\"Ingrese el número de local\" val=\"";
  if (helper = helpers.localNumber) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.localNumber); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n			</div>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<label>Buscar productos</label>\r\n			<input type=\"text\" class=\"form-control find-products\" placeholder=\"Agregar producto\" val=\"";
  if (helper = helpers.findProductsQuery) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.findProductsQuery); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n		</li>\r\n	</ul>\r\n	<div class=\"container-fluid container-result\">\r\n	</div>\r\n</div>";
  return buffer;
  });

this["JST"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"bar bar-header bar-calm tabs\">\r\n  <a class=\"tab-item tab-selected\" data-name=\"home\" href=\"#/\">\r\n    <i class=\"icon ion-compose\"> Log</i>\r\n  </a>\r\n  <a class=\"tab-item\" data-name=\"stats\" href=\"#/stats\">\r\n    <i class=\"icon ion-stats-bars\"> Stats</i>\r\n  </a>\r\n</div>";
  });

this["JST"]["productsList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<div class=\"row row-product\">\r\n		<div class=\"col-xs-6\">\r\n			<h3>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n		</div>\r\n		<div class=\"col-xs-6\">\r\n			<span class=\"badge\">X</span>\r\n		</div>\r\n	</div>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["registerMerchant"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<li class=\"list-group-item center-text\">\r\n			<a href=\"#/locals/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"\">\r\n			<h1>Local: ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n			</a>\r\n		</li>\r\n		";
  return buffer;
  }

  buffer += "<div class=\"container container-register-merchant\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/comerciante.png\" class=\"img-circle profile-picture\">\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<form role=\"form\">\r\n				<div class=\"form-group\">\r\n					<label>Nombre de usuario</label>\r\n					<input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Ingrese su nombre de Usuario\">\r\n				</div>\r\n			</form>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<div class=\"center-text\">\r\n				<label>Agregar Local</label>\r\n				<br/>\r\n				<br/>\r\n				<a href=\"#/locals/new\" class=\"\">\r\n				<span class=\"glyphicon glyphicon-plus-sign big-icon\"></span>\r\n				</a>\r\n			</div>\r\n		</li>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.locals), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</div>";
  return buffer;
  });

this["JST"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\r\n	Aquí se van a ver las estadísticas :D\r\n</h1>\r\n<div>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp*<br>\r\n|*<br>\r\n------------------------------------\r\n</div>";
  });

return this["JST"];

});