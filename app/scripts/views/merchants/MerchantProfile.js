define(function(require) {

  'use strict';

  var Backbone = require('backbone'),
    templates = require('templates'),
    firstTimeLogin = templates['merchants.profile'];


  return Backbone.View.extend({
    el: '#content',
    render: function() {            
      this.$el.html(firstTimeLogin());
    }
  });

});