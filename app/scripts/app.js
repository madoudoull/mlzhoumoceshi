'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
.module('tiaozhuan', ["ml"]).controller('con1',function($scope,$http,geudata){
	geudata.ajax("http://www.somenote.cn:1510/test","get",function (e){
  		$scope.data=e;
  		console.log(e)
  	});
  	geudata.ajax("http://www.somenote.cn:1510/test2","get",function (e){
  		$scope.data2=e;
  		console.log(e)
  	});
  	geudata.ajax("http://www.somenote.cn:1510/aut","get",function (e){
  		$scope.fdata=e;
  		console.log(e)
  	})
  	

})
//


//angular.module("tiaozhuan",["cf"]).constant("server","http://www.somenote.cn:1510/test1").controller("con1",["$scope","$http",function($scope,$http){
//	
//}])
