define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["firstTimeHome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container container-first-time\">\n	<ul class=\"list-group\">\n		<li class=\"list-group-item\"></li>\n		<li class=\"list-group-item\">\n			<img src=\"images/logo_corabastos.png\" class=\"img-responsive\"/>\n		</li>\n\n		<li class=\"list-group-item\">\n			<a href=\"#/buyers/register\">\n				<img src=\"images/boton_comprador.png\" class=\"img-responsive\"/>\n			</a>\n		</li>\n		<li class=\"list-group-item\">\n			<a href=\"#/register-merchant\">\n				<img src=\"images/boton_comerciante.png\" class=\"img-responsive\"/>\n			</a>\n		</li>\n	</ul>\n</div>";
  });

this["JST"]["localForm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container container-local-form background2\">\n	<ul class=\"list-group\">\n		<li class=\"list-group-item\">\n			<h1>Registro de local</h1>\n			<button type=\"button\" class=\"btn btn-success button-save\">Guardar</button>\n		</li>\n		<li class=\"list-group-item\">\n			<label>Buscar Local</label>\n			<div class=\"input-group\">\n		    <input type=\"text\" class=\"form-control input-find-local\" placeholder=\"Ingrese el número de local\">\n		    <span class=\"input-group-btn\">\n		    <button class=\"btn btn-default button-find-local\" type=\"button\">Go!</button>\n		    </span>\n		    </div><!-- /input-group -->\n			<div class=\"container-fluid container-locals\">\n			</div>\n		</li>\n		<li class=\"list-group-item\">\n			<label>Buscar productos</label>\n			<input type=\"text\" class=\"form-control find-products\" placeholder=\"Agregar producto\" val=\"";
  if (helper = helpers.findProductsQuery) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.findProductsQuery); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n		</li>\n	</ul>\n	<div class=\"container-fluid container-result\">\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["marketDemo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container background2\">\n	<ul class=\"list-group\">\n		<li class=\"list-group-item\">\n			<img src=\"images/bienvenida.png\" class=\"img-responsive\">\n		</li>\n		<li class=\"list-group-item\">\n			<img src=\"images/destacadosFull.png\" class=\"img-responsive\">\n		</li>\n		<li class=\"list-group-item\">\n			<img src=\"images/promocionFull.png\" class=\"img-responsive\">\n		</li>\n		<li class=\"list-group-item\">\n			<h2>Tubérculos</h2>\n			<img src=\"images/papa.png\" class=\"img-responsive\">\n		</li>\n	</ul>\n</div>";
  });

this["JST"]["newBuyer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container background2\">\n	<ul class=\"list-group\">\n		<li class=\"list-group-item\">\n			<img src=\"";
  if (helper = helpers.profileImageUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.profileImageUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-circle profile-picture\">\n		</li>\n		<li class=\"list-group-item\">\n			<div class=\"center-text\">\n				<h2>¡Bienvenido ";
  if (helper = helpers.firstName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.firstName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.lastName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "!</h2>\n			</div>\n		</li>\n		<li class=\"list-group-item\">\n			<div class=\"center-text\">\n				<h3>Muy pronto podras disfrutar de AppBastésete :D</h3>\n			</div>\n		</li>\n		<li class=\"list-group-item center-text\">\n			<button type=\"button\" class=\"btn btn-success button-demo\">Demo</button>\n		</li>\n		<li class=\"list-group-item center-text\">\n			<button type=\"button\" class=\"btn btn-danger button-logout\">Cambiar de usuario</button>\n		</li>\n	</ul>\n</div>";
  return buffer;
  });

this["JST"]["productsList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"row row-product\">\n		<div class=\"col-xs-6\">\n			<h3>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n		</div>\n		<div class=\"col-xs-6\">\n			<span class=\"badge\">X</span>\n		</div>\n	</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["registerBuyer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container background2\">\n	<ul class=\"list-group\">\n		<li class=\"list-group-item\"></li>\n		<li class=\"list-group-item facebook-login\">\n			<img src=\"images/login-with-facebook.png\" class=\"img-responsive\"/>\n		</li>\n	</ul>\n</div>";
  });

this["JST"]["registerMerchant"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<li class=\"list-group-item center-text\">\n			<a href=\"#/locals/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"\">\n			<h1>Local: ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n			</a>\n		</li>\n		";
  return buffer;
  }

  buffer += "<div class=\"container container-register-merchant background2\">\n	<ul class=\"list-group\">\n		<li class=\"list-group-item\">\n			<button type=\"button\" class=\"btn btn-success button-save\">Guardar</button>\n		</li>\n		<li class=\"list-group-item\">\n			<img src=\"images/comerciante.png\" class=\"img-circle profile-picture\">\n		</li>\n		<li class=\"list-group-item\">\n			<form role=\"form\">\n				<div class=\"form-group\">\n					<label>Nombre de usuario</label>\n					<input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Ingrese su nombre de Usuario\">\n				</div>\n			</form>\n		</li>\n		<li class=\"list-group-item\">\n			<div class=\"center-text\">\n				<label>Agregar Local</label>\n				<br/>\n				<br/>\n				<a href=\"#/locals/new\" class=\"\">\n				<span class=\"glyphicon glyphicon-plus-sign big-icon\"></span>\n				</a>\n			</div>\n		</li>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.locals), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n</div>";
  return buffer;
  });

this["JST"]["remoteLocal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>numero</th>\n          <th>codigolocal</th>\n          <th>aream2</th>\n          <th>comercializacion</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\n            ";
  if (helper = helpers.numero) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.numero); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </td>\n          <td>\n            ";
  if (helper = helpers.codigolocal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.codigolocal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </td>\n          <td>\n            ";
  if (helper = helpers.aream2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.aream2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </td>\n          <td>\n            ";
  if (helper = helpers.comercializacion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comercializacion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </td>\n        </tr>\n      </tbody>\n    </table>";
  return buffer;
  });

this["JST"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"main-question\">\n	Aquí se van a ver las estadísticas :D\n</h1>\n<div>\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\n|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>\n|&nbsp&nbsp&nbsp&nbsp*<br>\n|*<br>\n------------------------------------\n</div>";
  });

return this["JST"];

});