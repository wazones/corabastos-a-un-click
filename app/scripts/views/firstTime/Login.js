define(function(require) {

  'use strict';

  var Handlebars = require('handlebars'),
    Backbone = require('backbone'),
    templates = require('templates'),
    firstTimeLogin = templates['firstTime.login'];


  return Backbone.View.extend({
    el: '#content',
    render: function() {            
      this.$el.html(firstTimeLogin());
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