/**
 * Service Worker
 */
function registerSW() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(
               function() { console.log("Service Worker Registered"); },
               function(err) { console.log("Service Worker Registration Error: ", err); }
             );
  }
}

const connectionStatus = (connected) => {
  if (connected) {
    //console.log("we are ONLINE!");
    let elAlert = document.getElementById('offlinealert');
    if(elAlert) {
      elAlert.parentElement.removeChild(elAlert);
    }
  } else {
    //console.log("going offline!");
    let offlineAlert = document.createElement('p');
    offlineAlert.id = 'offlinealert';
    offlineAlert.setAttribute('role', 'alert');
    let offlineAlertText = document.createTextNode("Your connection is lost.");
    offlineAlert.appendChild(offlineAlertText);
    document.body.appendChild(offlineAlert);
  }
}

window.addEventListener('load', () => {
  registerSW();
  if(navigator.onLine) {
    connectionStatus(true)
  } else {
    connectionStatus(false)
  }
});

window.addEventListener('online', () => connectionStatus(true));

window.addEventListener('offline', () => connectionStatus(false));
