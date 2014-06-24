define(function(require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        Backbone = require('backbone'),
        templates = require('templates'),

        firstTimeLogin = templates['firstTime.login'];


    return Backbone.View.extend({
        el: '#content',
        render: function() {            
            this.$el.html(firstTimeLogin());
        }
    });

});