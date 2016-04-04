angular
  .module('app')
  .directive('picturesWall',picturesWall);

  function picturesWall(){
return{
  scope:{
    pictures: '=pictures'
  },
  template: '<img ng-repeat = "media in pictures" ng-src="{{ media.images.thumbnail.url }}"  /></img>'

   }
  };
