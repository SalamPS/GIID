
//Change img based on width
if (window.innerWidth < 780) {
  c2PubChat.src = "./src/imgs/channel/public-chat-mobile.png";
  c2PubChat.onclick = function() {
    if (c2PubChatId === 0) {
      c2PC_transform_mobile_1();
    } else {
      c2PC_transform_mobile_2();
    }
  }
} else if (window.innerWidth < 990) {
  c2PubChat.src = "./src/imgs/channel/public-chat-tablet.png";
  c2PubChat.onclick = function() {
    if (c2PubChatId === 0) {
      c2PC_transform_mobile_1();
    } else {
      c2PC_transform_mobile_2();
    }
  }
} else {
  c2PubChat.onclick = function() {
    if (c2PubChatId === 0) {
      c2PC_transform_desktop_1();
    } else {
      c2PC_transform_desktop_2();
    }
  }
}

let c2PubChatId = 0;
const c2PubChat = document.getElementById('pub-chat');
const c2PC_transform_desktop_1 = () => {
  c2PubChat.style.transform = "translateY(-100%)";
  c2PubChatId += 1;
}
const c2PC_transform_desktop_2 = () => {
  c2PubChat.style.transform = "translateY(-100px)";
  c2PubChatId -= 1;
}
const c2PC_transform_mobile_1 = () => {
  c2PubChat.style.transform = "translateY(-100%)";
  c2PubChatId += 1;
}
const c2PC_transform_mobile_2 = () => {
  c2PubChat.style.transform = "translateY(-100px)";
  c2PubChatId -= 1;
}