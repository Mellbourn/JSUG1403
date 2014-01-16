demo.directive('chatDirective', function() {
    return {
        restrict: 'E',
        templateUrl: 'Scripts/ChatDirective/chatTemplate.html',
        controller: 'chatController'
    };
});