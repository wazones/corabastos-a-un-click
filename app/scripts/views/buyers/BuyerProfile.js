define(function(require) {

  'use strict';

  var $ = require('jquery'),
    Backbone = require('backbone'),
    templates = require('templates'),
    buyersProfileTpl = templates['buyers.profile'];


  return Backbone.View.extend({
    el: '<div/>',
    render: function() {
      this.$el.html(buyersProfileTpl());
      $('#content').html(this.$el);
    }
  });

});