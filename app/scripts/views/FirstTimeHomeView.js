define(function(require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        Backbone = require('backbone'),
        templates = require('templates'),

        firstTimeHome = templates['firstTime.home'];


    return Backbone.View.extend({
        el: '#content',
        render: function() {            
            this.$el.html(firstTimeHome());
        }
    });

});