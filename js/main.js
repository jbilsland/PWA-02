function regSW() {
    if('serviceWorker' in navigator) { //if find sw then register it
        navigator.serviceWorker.register('./sw.js');
    }
}