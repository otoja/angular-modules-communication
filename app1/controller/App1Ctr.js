app1.controller("App1Ctr", function($scope,EventBus, $rootScope){
    $scope.name="test";
    var handler = function (event, data) {
        $scope.name = data.newVal;
        console.log("App1Ctr handler");
    };

    EventBus.subscribe("selectedJV", handler);
    
    $scope.fireEvent = function(){
        EventBus.broadcast("App1Ctr.event", {"newVal": "App1Ctr"});
    };
    
    $rootScope.$on("App2Ctr.event", function (event, data) {
        console.log("App1handler");
        $scope.name = data.newVal;
    });
});