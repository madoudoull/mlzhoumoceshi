angular.module("tiaozhuan").controller("list2",function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list2",
		method:"GET"
	}).success(function(e){
		$scope.data2 = e[0].content
	})
})