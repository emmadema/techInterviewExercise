angular.module("myApp")
	.controller("myCtrl", ['$scope', 'MyApis', 'Helper', '$location', function($scope, MyApis, Helper, $location) {

	$scope.cData = {	
		partners: [],		
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

	$scope.getPartners = function getPartners() {
		MyApis.getPartners().then(function(partners){
			$scope.cData.partners = partners;
		},function(errorMessage) {});
	};
    

	$scope.init = function init() {
		$scope.getPartners();
		$scope.getProducts();
	};

	// $scope.clearSearchBar = function() {
	// 	$scope.cData.searchInput = null;
	// };


	$scope.init();

}]);
