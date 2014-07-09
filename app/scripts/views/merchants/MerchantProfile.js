define(function(require) {

  'use strict';

  var Backbone = require('backbone'),
    templates = require('templates'),
    merchantsProfileTpl = templates['merchants.profile'];


  return Backbone.View.extend({
    el: '<div/>',
    render: function() {
      this.$el.html(merchantsProfileTpl());
      $('#content').html(this.$el);
    }
  });

});