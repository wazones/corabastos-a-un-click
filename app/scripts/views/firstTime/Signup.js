define(function(require) {
  'use strict';
  var $ = require('jquery'),
      Handlebars = require('handlebars'),
      Backbone = require('backbone'),
      templates = require('templates'),

      firstTimeHome = templates['firstTime.signup'];

   return Backbone.View.extend({
      el: '#content',
      render: function() {            
          this.$el.html(firstTimeHome());
      }
      //TODO: add validations to form
    });
});