var url = 'api/Message/';

demo.factory('messageFactory', function ($http) {
    return {
        GetMessages: function () {
            return $http.get(url);
        },
        PostMessage: function (message) {
            return $http.post(url, message);
        }
    };
});