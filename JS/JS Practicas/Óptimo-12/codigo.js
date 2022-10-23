"use strict";

/*
-NavigatorID.appCodeName
    Devuelve el nombre código interno del navegador actual. No siempre es correcto.
 - NavigatorID.appName
    Devuelve el nombre oficial del navegador. No siempre es correcto.
 - NavigatorID.appVersion
    Devuelve la versión del navegador. No siempre es correcto.
 - NetworkInformation.connection
    Provee un objeto NetworkInformation
 - NavigatorGeolocation.geolocation
    Devuelve un objeto Geolocation.
 - NavigatorConcurrentHardware.hardwareConcurrency
    Devuelve el número de núcleos de procesador lógicos disponibles.
 - NavegatorUserMedia.getUserMedia()
    Solicita camara o microfono y lo devuelve
 - Navigator.vibrate
    Causa vibracién en el dispositive que la soporta. No hace nada si el soporte para vibracién no esta disponible.
 - NavigatorPlugins.javaEnabled
    Si tiene habilitado Java
 - Navigator.sendBeacon
    Usado para transferir, de forma asincrona, conjuntos pequefios de datos HTTP del agente usuario al servidor,

*/


console.log("appCodeName: ",navigator.appCodeName);
console.log("");
console.log("appName: ",navigator.appName);
console.log("");
console.log("appVersion: ",navigator.appVersion);
console.log("");
console.log("connection: ",navigator.connection);
console.log("");
console.log("geolocation: ",navigator.geolocation);
console.log("");
console.log("HardwareConcurrency: ",navigator.hardwareConcurrency);
console.log("");
console.log("Language: ",navigator.language);
console.log("");
console.log("Languages: ",navigator.languages);
console.log("");
console.log("MineTypes: ",navigator.mimeTypes);
console.log("");
console.log("OnLine: ",navigator.onLine);
console.log("");
console.log("UserAgent: ",navigator.userAgent);
console.log("");
console.log("CookiesEnabled: ",navigator.cookieEnabled);
console.log("");
console.log("Permissions: ,",navigator.permissions);
console.log("");
console.log("Plataform: ",navigator.platform);
console.log("");
console.log("Plugins: ",navigator.plugins);
console.log("");
console.log("Product: ",navigator.product);
console.log("");
console.log("Serviceborker: ",navigator.serviceworker);
console.log("");
