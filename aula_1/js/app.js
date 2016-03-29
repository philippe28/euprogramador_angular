angular
  .module('app',[])
  .controller('IndexCtrl',IndexCtrl);

  IndexCtrl.$inject = ['$http'];

  function IndexCtrl($http){
    var vm = this,

      token = '2083078129.5b9e1e6.f19a3a7c4f6d406cba29d6083dac5d62',
      endpoint = 'https://api.instagram.com/v1/tags/maglore/media/recent';

    vm.media = [];

    $http
    .jsonp(endpoint + '?access_token=' + token + '&callback=JSON_CALLBACK')
    .then(function(response){
      vm.medias = response.data.data;

    });

  };
