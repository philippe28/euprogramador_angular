angular
  .module('app')
  .controller('IndexCtrl',IndexCtrl);

  IndexCtrl.$inject = ['Instagram'];

  function IndexCtrl(Instagram){
  var vm = this;

  vm.medias = [];

  Instagram.getRecentMediasByTag('maglore',function(medias){
  vm.medias = medias;
  });
  };
