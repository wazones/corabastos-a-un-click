define(function(require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        Backbone = require('backbone'),
        templates = require('templates'),

        register1Tpl = templates['register1'];


    return Backbone.View.extend({
        el: '#content',
        render: function() {            
            this.$el.html(register1Tpl());
        }
    });

});