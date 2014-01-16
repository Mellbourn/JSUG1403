demo.controller('chatController', ['$scope', 'messageFactory',function($scope, messageFactory) {
    $scope.message = [];
     var successMessageCallback = function(data, status) {
         console.log(data);
     };
    
    $scope.send = function() {
        $scope.message.unshift({ 'name': $scope.name, 'message': $scope.text });
        messageFactory.PostMessage({ 'name': $scope.name, 'message': $scope.text });
        $scope.text = "";

        messageFactory.GetMessages().success(successMessageCallback);       
    };
    
}]);