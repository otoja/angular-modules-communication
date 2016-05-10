main.service("EventDriveService", function(EventBus){
    return {
        selectJV: function(){
            EventBus.broadcast("selectedJV",{newVal:"test"});
        }
    };
});