// app.factory('fetchInfo', ['$http', function($http) {

//     return $http.post(
//         "https://www.exambazaar.com/api/userInvoices/report", {
//             "from": "2019-05-01",
//             "to": "2019-05-27"
//         }
//     )
// }])



app.factory('fetchInfo', ['$http', function($http) {


    return $http.post(
        "https://www.exambazaar.com/api/userInvoices/report", {
            "from": moment().subtract(26, 'days').format('YYYY-MM-DD'),
            "to": moment()
        }
    ).success(function(data) {
        return data;
    })

}])