define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["firstTimeHome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container container-first-time\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\"></li>\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/logo_corabastos.png\" class=\"img-responsive\"/>\r\n		</li>\r\n\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/buyers/register\">\r\n				<img src=\"images/boton_comprador.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<a href=\"#/register-merchant\">\r\n				<img src=\"images/boton_comerciante.png\" class=\"img-responsive\"/>\r\n			</a>\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["localForm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container container-local-form background2\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<h1>Registro de local</h1>\r\n			<button type=\"button\" class=\"btn btn-success button-save\">Guardar</button>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<label>Buscar Local</label>\r\n			<div class=\"input-group\">\r\n		    <input type=\"text\" class=\"form-control input-find-local\" placeholder=\"Ingrese el número de local\">\r\n		    <span class=\"input-group-btn\">\r\n		    <button class=\"btn btn-default button-find-local\" type=\"button\">Go!</button>\r\n		    </span>\r\n		    </div><!-- /input-group -->\r\n			<div class=\"container-fluid container-locals\">\r\n			</div>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<label>Buscar productos</label>\r\n			<input type=\"text\" class=\"form-control find-products\" placeholder=\"Agregar producto\" val=\"";
  if (helper = helpers.findProductsQuery) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.findProductsQuery); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n		</li>\r\n	</ul>\r\n	<div class=\"container-fluid container-result\">\r\n	</div>\r\n</div>";
  return buffer;
  });

this["JST"]["marketDemo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container background2\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/bienvenida.png\" class=\"img-responsive\">\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/destacadosFull.png\" class=\"img-responsive\">\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/promocionFull.png\" class=\"img-responsive\">\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<h2>Tubérculos</h2>\r\n			<img src=\"images/papa.png\" class=\"img-responsive\">\r\n		</li>\r\n	</ul>\r\n</div>";
  });

this["JST"]["newBuyer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container background2\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<img src=\"";
  if (helper = helpers.profileImageUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImageUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-circle profile-picture\">\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<div class=\"center-text\">\r\n				<h2>¡Bienvenido ";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "!</h2>\r\n			</div>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<div class=\"center-text\">\r\n				<h3>Muy pronto podras disfrutar de AppBastésete :D</h3>\r\n			</div>\r\n		</li>\r\n		<li class=\"list-group-item center-text\">\r\n			<button type=\"button\" class=\"btn btn-success button-demo\">Demo</button>\r\n		</li>\r\n		<li class=\"list-group-item center-text\">\r\n			<button type=\"button\" class=\"btn btn-danger button-logout\">Cambiar de usuario</button>\r\n		</li>\r\n	</ul>\r\n</div>";
  return buffer;
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

this["JST"]["registerBuyer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container background2\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\"></li>\r\n		<li class=\"list-group-item facebook-login\">\r\n			<img src=\"images/login-with-facebook.png\" class=\"img-responsive\"/>\r\n		</li>\r\n	</ul>\r\n</div>";
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

  buffer += "<div class=\"container container-register-merchant background2\">\r\n	<ul class=\"list-group\">\r\n		<li class=\"list-group-item\">\r\n			<button type=\"button\" class=\"btn btn-success button-save\">Guardar</button>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<img src=\"images/comerciante.png\" class=\"img-circle profile-picture\">\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<form role=\"form\">\r\n				<div class=\"form-group\">\r\n					<label>Nombre de usuario</label>\r\n					<input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Ingrese su nombre de Usuario\">\r\n				</div>\r\n			</form>\r\n		</li>\r\n		<li class=\"list-group-item\">\r\n			<div class=\"center-text\">\r\n				<label>Agregar Local</label>\r\n				<br/>\r\n				<br/>\r\n				<a href=\"#/locals/new\" class=\"\">\r\n				<span class=\"glyphicon glyphicon-plus-sign big-icon\"></span>\r\n				</a>\r\n			</div>\r\n		</li>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.locals), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</div>";
  return buffer;
  });

this["JST"]["remoteLocal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>numero</th>\r\n          <th>codigolocal</th>\r\n          <th>aream2</th>\r\n          <th>comercializacion</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            ";
  if (helper = helpers.numero) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.numero); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n          </td>\r\n          <td>\r\n            ";
  if (helper = helpers.codigolocal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.codigolocal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n          </td>\r\n          <td>\r\n            ";
  if (helper = helpers.aream2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.aream2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n          </td>\r\n          <td>\r\n            ";
  if (helper = helpers.comercializacion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comercializacion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>";
  return buffer;
  });

this["JST"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\r\n	Aquí se van a ver las estadísticas :D\r\n</h1>\r\n<div>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\r\n|&nbsp&nbsp&nbsp&nbsp*<br>\r\n|*<br>\r\n------------------------------------\r\n</div>";
  });

return this["JST"];

});