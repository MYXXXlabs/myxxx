// Ace.js editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/merbivore");
editor.session.setMode("ace/mode/html");
editor.session.setUseWorker("false");
editor.session.setUseWrapMode("true");
editor.renderer.setShowGutter(false);
editor.setOption("enableEmmet", true);