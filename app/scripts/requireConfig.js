require.config({

  baseUrl: 'scripts',
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    handlebars: '../../bower_components/handlebars/handlebars',
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',
    openFB: '../../bower_components/OpenFB/openfb',
    templates: './templates'
  },
  shim: {
    handlebars: {
      exports: 'Handlebars',
      init: function() {
        this.Handlebars = Handlebars;
        return this.Handlebars;
      }
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    openFB: {
      exports: 'openFB'
    },
    bootstrap: {
      deps: ['jquery']
    }

  }
});


require(['app','jquery','bootstrap'], function(app,$) {
  'use strict';
  app.init();
});
