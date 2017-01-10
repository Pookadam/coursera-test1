(function(module){

  var userService = function(){
    var profile = { "firstName" : "",
                  "lastName" :"",
                  "email" :"",
                  "phone" :"",
                  "favDish" :""
                };


      var getProfile = function(){
        return profile;
      }
      var setProfile =function(user){
        profile = user;
      };
      return {
        getProfile:getProfile,
        setProfile: setProfile
      }

  };

  module.service('userService',userService);

}(angular.module('common')));