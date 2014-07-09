define(function(require) {
  var Handler, _;
  _ = require("underscore");
  Handler = (function() {
    function Handler() {}

    Handler.prototype.handle = function(opts) {
      opts = _.extend({
        action: "home"
      }, opts);
      this[opts.action]();
    };

    return Handler;

  })();
  return Handler;
});
