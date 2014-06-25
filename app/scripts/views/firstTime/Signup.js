define(function(require) {
  'use strict';
  var $ = require('jquery'),
    Handlebars = require('handlebars'),
    Backbone = require('backbone'),
    templates = require('templates'),
    firstTimeHome = templates['firstTime.signup'];

  //TODO: add validations to form
  return Backbone.View.extend({
    el: '#content',
    render: function() {
      this.$el.html(firstTimeHome());
    },
    events: {
      'click button[type=submit]': 'submitForm'
    },
    submitForm: function(ev) {
      console.log('Form submission');
      ev.preventDefault();
      require(['app'],function(app) {
        var router = app.getRouter();
        router.navigate('merchants/profile',{trigger:true,replace:true});
      });
    }

  });
});