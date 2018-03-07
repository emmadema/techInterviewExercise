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


	let productsId = [];

	$scope.getProducts = function getProducts() {		
		MyApis.getProducts().then(function(products) {
			$scope.cData.products = products;
			for(let i=0; i < products.length; i++) {
				productsId.push(products[i].id);
			}
			// console.log(productsId);
			// console.log(products);
	    }, function(errorMessage) {});
	};


	let partnersProducts = [];

	$scope.getPartners = function getPartners() {
		MyApis.getPartners().then(function(partners){
			$scope.cData.partners = partners;
			for(let i=0; i < partners.length; i++) {
				partnersProducts.push(partners[i].products);
			}
			
		},function(errorMessage) {});
	};


	$scope.getPartnersProducts = function getPartnersProducts() { 
		$scope.getProducts();
		$scope.getPartners();
		console.log(productsId);
		console.log(partnersProducts);
		
		for (let i=0; i<products.length; i++) {
			if (partners.indexOf(products[i]) > -1) {
			console.log(products[i]);
	   		}
		}    
    };
	


	

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
		// $scope.getPartners();
		// $scope.getProducts();
		$scope.getPartnersProducts();
	};


	$scope.init();

}]);