function absorbEvent_(event) {
  var e = event || window.event;
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

function preventLongPressMenu(node) {
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbEvent_;
  node.ontouchcancel = absorbEvent_;
}

let ch = document.getElementsByTagName('img');
for (let i = 0; i < ch.length; i++) {
  preventLongPressMenu(ch[i]);
}
console.log('sc')