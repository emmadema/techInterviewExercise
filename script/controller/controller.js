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

	$scope.showProducts = function showProducts() {
		// MyApis.showProducts().then(function(partners) {
		// 	$scope.cData.partners.products = partnersArray;
		// 	// partners.products = productArray;
			
		// }, function(errorMessage){});
		console.log("hello");
	};

	$scope.preloader = function preloader() {
		//show the page only after loading
		//2000
		//.success
	};

	$scope.init = function init() {
		$scope.getPartners();
		$scope.getProducts();
	};


	$scope.init();

}]);