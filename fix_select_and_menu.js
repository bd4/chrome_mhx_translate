// Remove obnixous event handlers that disable selection and
// context menu. Note that this can't be done directly in the
// content script, because it runs in isolated context and can't
// see the event listener properties set by the main page.
// Inserting the script into the body of the page allows it to
// access the values and remove the offending handlers.
var script = document.createElement('script');
script.type = "text/javascript";
script.innerHTML = 
    "document.body.onselectstart = null; "
  + "document.body.oncontextmenu = null; "
  + "document.getElementById('data_container').onmousedown=null; "
  + "document.getElementById('data_container').onselectstart=null; "
  + "document.getElementById('data_container').style=null; ";
document.body.appendChild(script);
