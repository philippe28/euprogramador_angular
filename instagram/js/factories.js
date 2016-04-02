""" Não referenciado e não quiz apagar """
angular
  .module('app')
  .factory('Instagram',Instagram);

  Instagram.$inject = ['$http'];

  function Instagram($http){
    var _public = {},
    _private = {};

_private.token = '2083078129.5b9e1e6.f19a3a7c4f6d406cba29d6083dac5d62';




_public.getRecentMediasByTag = function (tag,callback) {
  var endpoint = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
  path = endpoint + '?access_token=' + _private.token+ '&callback=JSON_CALLBACK';

  $http
    .jsonp(path)
    .then(function(response) {
      callback(response.data.data);
    });
};

return _public;
};
