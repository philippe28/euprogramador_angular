angular
.module('app')
.provider('Instagram',Instagram);

function Instagram() {
  this.setToken = function(newToken) {
    token = newToken;
  };
  this.$get = ['$http',function($http) {
    return{
      getRecentMediasByTag : function (tag,callback) {
        var endpoint = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
        path = endpoint + '?access_token=' + token+ '&callback=JSON_CALLBACK';

        $http
          .jsonp(path)
          .then(function(response) {
            callback(response.data.data);
          });
      }

    };

  }];
}
