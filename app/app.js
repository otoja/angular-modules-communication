var main = angular.module("mainApp", [])
        .controller("MainCtr", function ($scope, EventBus) {

            var handler = function (event, data) {
                console.log("got event: " + event.name);
            };

            EventBus.subscribe("App2Ctr event", handler);
            EventBus.subscribe("App1Ctr event", handler);
        });
