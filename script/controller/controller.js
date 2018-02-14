//Removed location error by injecting location into the controller

angular.module("myApp")
	.controller("myCtrl", ['$scope', 'MyApis', 'Helper', '$location', function($scope, MyApis, Helper, $location) {

	$scope.cData = {			
		products: [],			
		selectedProduct: null
	};

	$scope.buyProduct = function buyProduct(product) {
		$location.path('/buyProduct').search({id: product.id});
	};

	
	$scope.displayProductDetails = function displayProductDetails(product) {
		$scope.cData.selectedProduct = product;
	};	

	$scope.getProducts = function getProducts() {		
		MyApis.getProducts().then(function(products) {
			$scope.cData.products = products;
	    }, function(errorMessage) {});
	};
    

	$scope.init = function init() {
		$scope.getProducts();
	};

	// $scope.clearSearchBar = function() {
	// 	$scope.cData.searchInput = null;
	// };


	$scope.init();

}]);
