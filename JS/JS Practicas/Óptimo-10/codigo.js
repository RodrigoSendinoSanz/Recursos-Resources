"use strict";

if (!('Notification' in window)) {
    alert("Las notificaciones no estan disponibles en este navegador")
}



Notification.requestPermission(() => {
    if(Notification.permission == "granted"){
        new Notification("Nueva notificacion");
    }
})