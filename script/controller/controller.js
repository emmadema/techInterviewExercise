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
			console.log(products);
	    }, function(errorMessage) {});
	};

	$scope.getPartners = function getPartners() {
		MyApis.getPartners().then(function(partners){
			$scope.cData.partners = partners;
			console.log(partners);
		},function(errorMessage) {});
	};



	$scope.getPartnersProducts = function getPartnersProducts() {
	 	$scope.getPartners();//check for your condition here                  
     };
	


	// for (let i=0; i<products.length; i++) {
	// 	if (partners.indexOf(products[i]) > -1) {
	// 	console.log(products[i]);
 //    	}
	// }
	

	// $scope.showProducts = function showProducts() {
	// 	MyApis.showProducts().then(function(partners, products){
	// 		// $scope.cData.partners = [partners];
	// 		// $scope.cData.products = [products];

	// 		// let productsArray = partners.products;
	// 		// let matchingProduct = products.id;

	// 		// productsArray.indexOf(matchingProduct);

	// 		console.log(matchingProduct);
	// 	},function(errorMessage){});
	// };

	// $scope.preloader = function preloader() {
		
	// };

	$scope.init = function init() {
		$scope.getPartners();
		$scope.getProducts();
		$scope.getPartnersProducts();
	};


	$scope.init();

}]);