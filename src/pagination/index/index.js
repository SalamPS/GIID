//Prevent Pop Up on Long Press
// function absorbEvent_(event) {
//   var e = event || window.event;
//   e.stopPropagation && e.stopPropagation();
//   e.cancelBubble = true;
//   e.returnValue = false;
//   return false;
// }

// function preventLongPressMenu(node) {
//   node.ontouchmove = absorbEvent_;
//   node.ontouchend = absorbEvent_;
//   node.ontouchcancel = absorbEvent_;
// }



// let ch = document.getElementsByTagName('img');
// for (let i = 0; i < ch.length; i++) {
//   preventLongPressMenu(ch[i]);
// }
// console.log('sc')



//Responsive Images

let c1CharRightId = 0;
const c1CharRight = document.getElementById('c1-char-right');
const c1CR_transform_1 = () => {
  c1CharRight.style.transform = "translate(28%, -23vh)";
  c1CharRightId += 1;
}
const c1CR_transform_2 = () => {
  c1CharRight.style.transform = "translate(30%, -23vh)";
  c1CharRightId -= 1;
}

c1CharRight.onclick = async function() {
  if (c1CharRightId === 0) {
    c1CR_transform_1();
  } else {
    c1CR_transform_2();
  }
}


let c1CharLeftId = 0;
const c1CharLeft = document.getElementById('c1-char-left');
const c1CL_transform_1 = () => {
  c1CharLeft.style.transform = "translate(-8%, -35vh)";
  c1CharLeftId += 1;
}
const c1CL_transform_2 = () => {
  c1CharLeft.style.transform = "translate(-10%, -35vh)";
  c1CharLeftId -= 1;
}

c1CharLeft.onclick = function() {
  if (c1CharLeftId === 0) {
    c1CL_transform_1();
  } else {
    c1CL_transform_2();
  }
}






