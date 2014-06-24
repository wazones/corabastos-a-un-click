define(function(require){
  'use strict';
  function Handler() {

  }
  Handler.prototype.handle = function(opts) {
    opts = _.extend({action:'home'},opts)
    this[opts.action]();
  }
  return Handler;
});