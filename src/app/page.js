"use client";
import { useEffect, useState, useRef } from "react";
import Amazons from "./lists/amazon";
import ChatBox from "./comps/ChatBox";
import AnimatedSection from "./Animated";
export default function Home() {
  const [openChat, setOpenChat] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const amazonCategories = [
    "Disaster",
    "Plant",
    "Mammal",
    "Reptile",
    "Amphibian",
    "Fish",
    "Bird",
    "Insect",
  ];
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Ask me anything about the Amazon Rainforest or click on any of the items for more information!",
    },
  ]);
  const [message, setMessage] = useState("");
  const sendMessage = async (message) => {
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    setMessage("");

    const res = fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let result = "";
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
        // for (const char of text) {
        //   await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust delay here (e.g., 50ms per character)
        //   setMessages((messages) => {
        //     let lastMessage = messages[messages.length - 1];
        //     let otherMessages = messages.slice(0, messages.length - 1);
        //     return [
        //       ...otherMessages,
        //       { ...lastMessage, content: lastMessage.content + char },
        //     ];
        //   });
        // }
        // adds delay in load by rendering character by character + add async in front of function processText
        return reader.read().then(processText);
      });
    });
  };
  return (
    <main className="h-[100vh] w-[100vw] flex flex-col items-center">
      <AnimatedSection
        effect="slide-down h-[100vh] w-[100vw] flex flex-col items-center p-4"
        delay={500}
      >
        <h1 className="w-full p-6 text-2xl md:text-4xl text-center bg-black text-white rounded-t-[15px]">
          The Amazon Rainforest: Nature&apos;s Living Wonder
        </h1>

        <section className="flex-shrink-0 bg-black w-full border-2 border-black">
          <div className="flex justify-evenly overflow-x-scroll">
            {amazonCategories.map((category, i) => (
              <AnimatedSection
                effect="slide-down"
                key={i}
                className={`flex items-center mb-2 ${i == 5 && "mr-4"}`}
                delay={i * 100 + 1500}
              >
                <div
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-grow cursor-pointer hover:bg-gray-700 ${
                    selectedCategory == category && "bg-gray-500"
                  }`}
                >
                  <img
                    className="w-[60px] mx-auto pt-1 min-w-[60px]"
                    src={`/amazon-gifs/${category.toLowerCase()}.gif`}
                    alt={`${category} gif`}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <h1 className="text-2xl text-white text-center h-[45px]">
            {selectedCategory ? selectedCategory : null}
            {selectedCategory && selectedCategory !== "Fish" && "s"}
            {selectedCategory == "Insect" && "/Arachnids"}
          </h1>
        </section>
        <section className=" md:flex grow overflow-y-auto w-full">
          <div className="w-full md:w-1/2 overflow-y-auto bg-black p-2 h-full">
            <div className="h-full">
              {selectedCategory ? (
                Amazons.filter((data) => {
                  if (selectedCategory === "Insect") {
                    return (
                      data.category === "Insect" || data.category === "Arachnid"
                    );
                  }
                  return data.category === selectedCategory;
                }).map((data, i) => (
                  <ul
                    key={i}
                    onClick={() => {
                      setOpenChat(true);
                      sendMessage(
                        `Tell me more about the ${data.species} (${data.scientific_name}) `
                      );
                    }}
                    className="text-white px-2 hover:bg-gray-800 cursor-pointer"
                  >
                    <br />
                    <strong>
                      {data.species} <em>({data.scientific_name})</em>
                    </strong>
                    <li>{data.description}</li>
                    <br />
                  </ul>
                ))
              ) : (
                <div className="flex h-full justify-center">
                  <img
                    src="/amazon-gifs/south-america.gif"
                    className="opening"
                  />
                </div>
              )}
            </div>
          </div>
          <ChatBox
            className="w-full md:w-1/2"
            openChat={openChat}
            setOpenChat={setOpenChat}
            sendMessage={sendMessage}
            setMessage={setMessage}
            messages={messages}
            message={message}
          />
        </section>
        <footer className="bg-black h-[20px] rounded-b-[15px] w-full"></footer>
      </AnimatedSection>
    </main>
  );
}
