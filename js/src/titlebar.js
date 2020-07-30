const remote = require('electron').remote;

function quit() {
    remote.getCurrentWindow().close();
}
function minimise() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}
function maximise() {
    var maximized = false;
    if(remote.BrowserWindow.getFocusedWindow().isMaximized()) {
        remote.BrowserWindow.getFocusedWindow().restore();
        maximized = true;
    } else {
        remote.BrowserWindow.getFocusedWindow().maximize();
    }
}