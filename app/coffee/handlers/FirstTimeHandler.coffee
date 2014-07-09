define (require)->
  _ = require "underscore"
  Handler = require "handlers/Handler"
  Home = require "views/firstTime/Home"
  Login = require "views/firstTime/Login"
  Signup = require "views/firstTime/Signup"


  class FirstTimeHandler extends Handler

    home : ()->
      home = new Home()
      home.render()

    login : ()->
      login = new Login()
      login.render()

    signup : ()->
      signup = new Signup()
      signup.render()

  return FirstTimeHandler
