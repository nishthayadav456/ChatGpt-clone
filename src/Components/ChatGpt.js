import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
const ChatGpt = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="upperSideTop">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/558/804/original/openai-chatgpt-logo-icon-free-png.png"
              alt="not found"
              className="logo"
            />

            <span className="brand">ChatGpt</span>
          </div>

          <button className="midBtn">
            <FaPlus className="addbtn" />
            New Chat
          </button>
          <div className="uppersideBottom">
            <button className="query">
              <MdOutlineChatBubbleOutline className="queryimg" />
              What is Programming?
            </button>
            <button className="query">
              <MdOutlineChatBubbleOutline className="queryimg" />
              How to Use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <FaHome className="listItemimg" />
            Home
          </div>
          <div className="listItems">
            <FaBookmark className="listItemimg" />
            Saved
          </div>
          <div className="listItems">
            <FaRocket className="listItemimg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img
              className="chatImgs"
              src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais"
              alt="not found"
            />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum, mi eget cursus fermentum, odio sapien consectetur
              libero, sed tempor est justo sit amet risus. Donec sed ligula eu
              tellus congue aliquam. Nullam malesuada tortor vitae turpis
              ultricies, vel scelerisque metus rutrum.
            </p>
          </div>
          <div className="chat bot">
            <img
              className="chatImgs"
              src="https://static.vecteezy.com/system/resources/previews/024/558/804/original/openai-chatgpt-logo-icon-free-png.png"
              alt="not found"
            />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum, mi eget cursus fermentum, odio sapien consectetur
              libero, sed tempor est justo sit amet risus. Donec sed ligula eu
              tellus congue aliquam. Nullam malesuada tortor vitae turpis
              ultricies, vel scelerisque metus rutrum. Integer eleifend
              sollicitudin lorem, id euismod odio efficitur et. Nulla facilisi.
              Vestibulum ullamcorper accumsan tellus a dapibus. Maecenas nec
              sapien lacinia, congue nisi eget, vehicula mauris. Sed faucibus
              tellus ut magna posuere rhoncus. Phasellus eget arcu vel lorem
              suscipit tristique.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inpt">
            <input type="text" placeholder="Message ChatGpt..." />
            <button className="send">
              <FaLocationArrow />
            </button>
          </div>
          <p>
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatGpt;
