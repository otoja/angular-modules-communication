main.factory("EventBus", function ($rootScope) {
    var
            _subscribe = function (eventName, callback) {
                return $rootScope.$on(eventName, callback);
            },
            _broadcast = function (eventName, data) {
                console.log("EventBus broadcast: " + eventName);
                var appIds = ["app1", "app2"];
                angular.forEach(appIds, function (appId) {
                    angular.element(document.getElementById(appId)).scope().$root.$emit(eventName, data);
                });
            };

    return {
        subscribe: _subscribe,
        broadcast: _broadcast
    };
});