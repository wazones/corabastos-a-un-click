define(function(require) {
  'use strict';
  var $ = require('jquery'),
    Handlebars = require('handlebars'),
    Backbone = require('backbone'),
    templates = require('templates'),
    firstTimeHome = templates['firstTime.signup'];

  //TODO: add validations to form
  return Backbone.View.extend({
    el: '<div/>',
    render: function() {
      this.$el.html(firstTimeHome());
      $('#content').html(this.$el);
    },
    events: {
      'click button[type=submit]': 'submitForm'
    },
    submitForm: function(ev) {
      ev.preventDefault();
      var userType = this.$('.user-type-select label.active input')
        .first().data('user-type');
      require(['app'],function(app) {
        var router = app.getRouter();
        switch(userType) {
          case 'merchant':
            router.navigate('/merchants/profile',{trigger:true,replace:true});
          break;
          case 'buyer':
            router.navigate('/buyers/profile',{trigger:true,replace:true});
          break;
        }
      });
    }

  });
});