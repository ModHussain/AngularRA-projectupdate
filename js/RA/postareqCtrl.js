resourceApp.controller('postareqCtrl',['$scope','RAService',function($scope,RAService){
	$scope.Selectors =["jobCategory","experience","jobLocation"];
    $scope.SelectedCriteria = ""; 
    $scope.filterValue = "";
    
    
	$scope.$on('$viewContentLoaded', function () {
		$scope.postrequirement = {};
		$scope.postareq();
	})
	
	$scope.postareq = function(){
		debugger;
		RAService.postareqList().then(function(data) {
	        $scope.list = data;
	        console.log($scope.list);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	}
	$scope.postFilter = function(){
//		debugger;
        var filter = {
        		jobCategory: $scope.SelectedCriteria,
        		consultant: $scope.filterValue
        };
        RAService.postReqfilter(filter).then(function(response){
           $scope.list = response.data;
           console.log($scope.list);
       },function(err){
       if(err){
           $scope.errorMessage = err;
       }
   })
}
	
	
	
	$scope.requirement = function(postrequirement){
		
		if(postrequirement.status == "Active"){
			postrequirement.status = "Inactive";
		RAService.requirementStatus(postrequirement).then(function(data){
			$scope.aaaa = data;
			console.log($scope.aaaa);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
		}else{
			postrequirement.status = "Active";
		RAService.requirementStatus(postrequirement).then(function(data){
			$scope.aaaa = data;
			console.log($scope.aaaa);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
		}	
	}
}])