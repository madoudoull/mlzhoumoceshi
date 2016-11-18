angular.module("ml",[]).directive('auto',function(){
   return {
		restrict:"ECAM",
        template:'<div class="box"> <div class="left"> <p ng-repeat="i in data">{{i.title}}</p> </div> <div class="centent" style="float:right;"><img ng-repeat = "v in fdata" ng-src="{{v.img}}"/></div> <div class="right"></div></div>',
        replace :true,
        scope:{data:"=data",fdata:"=b"}

   }
}).service('geudata',function($http){
	return {
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method		
			}).success(function(e){
				callback(e)
				console.log(e)
			})
		}
	}
})






