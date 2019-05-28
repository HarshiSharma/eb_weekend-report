app.controller("AppController", [
    "$scope",
    "$http",
    "NgTableParams",
    function($scope, $http, NgTableParams) {
        $scope.msg = "";
        $scope.dates = {
            fromDate: moment()
                .subtract(10, "days")
                .local()
                .format(),
            toDate: moment()
                .local()
                .format()
        };
        $scope.sText = 'Unpaid'
        $scope.isFalse = false;
        $scope.isPaid = false;

        $scope.paid = function(isFalse) {
            if (isFalse) {
                $scope.sText = 'Paid';
                $scope.isPaid = "x._paid";
            } else {
                $scope.sText = 'Unpaid';
                $scope.isPaid = "!x._paid";
            }
        };

        $scope.update = function() {
            var param = {
                from: $scope.dates.fromDate,
                to: $scope.dates.toDate
            };

            var res = $http.post(
                "https://www.exambazaar.com/api/userInvoices/report",
                param
            );
            res.then(function(response) {
                $scope.tableParams = new NgTableParams({}, {
                    dataset: response.data
                });
                console.log(response);
            });
        };
        $scope.lastFifteen = function() {
            var param = {
                from: moment()
                    .subtract(15, "days")
                    .local()
                    .format(),
                to: moment()
                    .local()
                    .format()
            };

            var res = $http.post(
                "https://www.exambazaar.com/api/userInvoices/report",
                param
            );
            res.then(function(response) {
                $scope.tableParams = new NgTableParams({}, {
                    dataset: response.data
                });
                console.log(response);
            });
        };
        $scope.lastMonth = function() {
            var param = {
                from: moment()
                    .subtract(30, "days")
                    .local()
                    .format(),
                to: moment()
                    .local()
                    .format()
            };

            var res = $http.post(
                "https://www.exambazaar.com/api/userInvoices/report",
                param
            );
            res.then(function(response) {
                $scope.tableParams = new NgTableParams({}, {
                    dataset: response.data
                });
                console.log(response);
            });
        };
        $scope.lastWeek = function() {
            var param = {
                from: moment()
                    .subtract(7, "days")
                    .local()
                    .format(),
                to: moment()
                    .local()
                    .format()
            };

            var res = $http.post(
                "https://www.exambazaar.com/api/userInvoices/report",
                param
            );
            res.then(function(response) {
                $scope.tableParams = new NgTableParams({}, {
                    dataset: response.data
                });
                console.log(response);
            });
        };
    }
]);