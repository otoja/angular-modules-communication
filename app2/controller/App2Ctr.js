app2.controller("App2Ctr", function ($scope, EventBus, $rootScope) {
    $scope.name = "test2";

    EventBus.subscribe("App1Ctr.event", function (event, data) {
        console.log("App2handler");
        $scope.name = data.newVal;
    });

    $scope.fireEvent = function () {
        EventBus.broadcast("App2Ctr.event", {"newVal": "App2Ctr"});
    };
    $rootScope.$on("App1Ctr.event", function (event, data) {
        console.log("App2handler");
        $scope.name = data.newVal;
    });
});