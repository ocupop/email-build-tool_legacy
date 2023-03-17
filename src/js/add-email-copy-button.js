
console.log("We're in the editor. Add the Toolbar!");

function addToolbar(){

  var style = document.createElement('style');
  style.appendChild(document.createTextNode('body { margin-top:40px; }'));

  var toolbar = document.createElement("div");
  toolbar.id = "toolbar";
  toolbar.classList.add("toolbar");
  toolbar.style.cssText = "font-size:14px;display:flex;align-items: center;justify-content:center;background-color:#aacb65;position: fixed;top: 0px;left: 0px;width: 100%;padding: 0.5rem;z-index: 9010;";

  var copy =  document.createElement("div");
  copy.innerText = "Copy the email source code to your clipboard, then paste into your email marketing platform."

  var button = document.createElement("button");
  button.id = "copybutton";
  button.innerText = 'Copy Source Code';
  button.style.cssText = "margin-left:16px;cursor:pointer;background-color: #FFFFFF;border: none;font-size: 14px;padding: 4px 12px;color: black;display: block;";
  button.addEventListener("click",function(){copyTextToClipboard()});

  toolbar.appendChild(style);
  toolbar.appendChild(copy);
  toolbar.appendChild(button);
  document.body.appendChild(toolbar);
}

function copyTextToClipboard() {
  var button = document.getElementById("copybutton");

  // Get the email HTML
  var allHTML = document.documentElement.outerHTML;

  // Remove the toolbar and any elements that CloudCannon added
  allHTML = stripOutNonEmailHTML(allHTML)

  // Create a textarea element and place the HTML inside of it. This allows us to copy the HTML to the clipboard, instead of just the text;
  var textArea = document.createElement("textarea");
  textArea.value = allHTML;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    if(successful){
      button.innerText = 'Copied!';
      setTimeout(() => {
        button.innerText = 'Copy Source Code';
      }, "3000")
    } else {
      button.innerText = 'Error';
    }
  } catch (err) {
    button.innerText = 'Unable to copy';
  }
  document.body.removeChild(textArea);
}

function stripOutNonEmailHTML(html){
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  var dup = document.createElement( 'html' );
  dup.setAttribute('lang','en')
  dup.innerHTML = html

  var toolbar = dup.getElementsByClassName('toolbar')[0];
  toolbar.parentNode.removeChild(toolbar);

  var removeThese = dup.getElementsByClassName('cms-added-content');
  while(removeThese.length > 0){
    removeThese[0].parentNode.removeChild(removeThese[0]);
  }

  var removeThese = dup.getElementsByClassName('c-cloudcannon-editor-overlays');
  while(removeThese.length > 0){
    removeThese[0].parentNode.removeChild(removeThese[0]);
  }
  return '<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' + dup.outerHTML;
}

addToolbar();