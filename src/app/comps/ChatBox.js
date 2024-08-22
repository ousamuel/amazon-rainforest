"use client";
import React, { useRef, useState } from "react";

const ChatBox = ({
  openChat,
  setOpenChat,
  sendMessage,
  setMessage,
  messages,
  message,
}) => {
  var markdown = require("markdown").markdown;

  return (
    <div className="h-1/2 md:h-[100%] w-full md:w-2/5 md:max-w-[600px] chat-div">
      {/* <section
        onClick={() => setOpenChat((prev) => !prev)}
        className="flex justify-between text-black cursor-pointer hover:bg-gray-200 border-b-2"
      >
        <span className="flex-grow p-2">Click to minimize</span>
        <span>-</span>
      </section> */}
      <section className="chat-box p-5 mx-auto rounded-b-md">
        <div className="scroller-content">
          {messages.map((message, i) => {
            let htmlContent = markdown.toHTML(message.content);
            return (
              <div
                key={i}
                className={
                  i % 2 == 0 ? "chat-message" : "chat-message justify-end"
                }
              >
                <div className={i % 2 == 0 ? "triangle-left" : ""}></div>
                <div
                  className={
                    i % 2 == 0
                      ? "bg-green-200 max-w-[90%] p-3 rounded-md"
                      : "bg-gray-200 max-w-[90%] p-3 rounded-md"
                  }
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
                <div className={i % 2 == 0 ? "" : "triangle-right"}></div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="user-message" className="h-fit">
        <form
          className="flex justify-center"
          onSubmit={(e) => {
            sendMessage(message);
            e.preventDefault();
          }}
        >
          <div className="w-full px-2 border-t-2  bg-transparent text-white">
            <input
              className="bg-transparent h-fit w-full py-2 px-5 outline-none "
              value={message}
              placeholder="Hit Enter to send a message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ChatBox;
