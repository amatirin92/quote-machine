const myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){

    (function() {
        function assignAClass() {
            var numArray = [1, 2, 3, 4];
            let num = Math.floor(Math.random() * 4);

            if (numArray[num] === 1) {
                if ($scope.class !== "fadeInUpBig")
                    $scope.class = "fadeInUpBig"
            } else {
                $scope.class = "fadeIn"
            }
            if (numArray[num] === 2) {
                if ($scope.class !== "fadeInDown") {
                    $scope.class = "fadeInDown"
                } else {
                    $scope.class = "fadeInLeft"
                }
            }
            if (numArray[num] === 3) {
                if ($scope.class !== "fadeInRight") {
                    $scope.class = "fadeInRight"
                } else {
                    $scope.class = "fadeInUp"
                }
                if (numArray[num] === 4) {
                    if ($scope.class !== "fadeInLeftBig") {
                        $scope.class = "fadeInLeftBig"
                    } else {
                        $scope.class = "bounceInLeft"
                    }
                }
            }
        }
        (function getNewQuote() {
            $http({
                method: "GET",
                url: 'https://talaikis.com/api/quotes/random/'
            }).then(function successCallback(res) {
                $scope.quote = res.data.quote;
                $scope.author = res.data.author;
                assignAClass();

                if (res.data.quote.length < 200) {
                    setTimeout(arguments.callee, 7000);
                }
            }, function errorCallback(res) {
                $scope.error = "Sorry! Didn't get a quote";
            });
            setTimeout(arguments.callee, 5000);
        })();
    }());
}]);