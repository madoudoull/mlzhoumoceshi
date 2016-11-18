angular.module("tiaozhuan").controller("list1",function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list1",
		method:"GET"
	}).success(function(e){
		console.log(e)
		$scope.data1 = e[0].content
	})
})