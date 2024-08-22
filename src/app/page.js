"use client";
import { useEffect, useState, useRef } from "react";
import Amazons from "./lists/amazon";
import ChatBox from "./comps/ChatBox";
import InfoSections from "./lists/InfoSections";
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
    <main className="min-h-[100vh] w-[100vw] flex flex-col items-center">
      <AnimatedSection
        effect="fade-in"
        delay={500}
        className="text-white min-h-screen w-full flex flex-col items-center justify-center"
      >
        <h1 className="font-black text-7xl">The Amazon Rainforest</h1>
        <AnimatedSection effect="fade-in" delay={2000}>
          <h2 className="font-bold text-3xl">Nature&apos;s Living Wonder</h2>
        </AnimatedSection>
      </AnimatedSection>
      <div className="video-background">
        <video muted autoPlay loop>
          <source
            type="video/mp4"
            src="https://vod-progressive.akamaized.net/exp=1724371327~acl=%2Fvimeo-transcode-storage-prod-us-west1-h264-1080p%2F01%2F53%2F15%2F375266918%2F1564299673.mp4~hmac=6597a157be1cfdac05b47ecfb56144cc86601aba99084edb0a356bd5cd93e7f0/vimeo-transcode-storage-prod-us-west1-h264-1080p/01/53/15/375266918/1564299673.mp4"
          />
        </video>
      </div>
      <section
        className="flex flex-wrap justify-between 
      min-h-[calc(100vh-500px)] bg-custom pb-10"
      >
        {InfoSections.map((section, i) => (
          <section className="info-section" key={i}>
            <div className="">
              <a href={section.link} target="_blank">
                <h3 className="mb-2 hover:text-blue-700 hover:underline">
                  {section.title}
                </h3>
              </a>
              <p>{section.content}</p>
            </div>
            <img
              className="w-[150px] h-[150px] m-auto"
              src={section.src}
              alt={section.title}
            />
          </section>
        ))}
      </section>

      <section id="categories" className="bg-custom w-full">
        <div className="flex justify-evenly overflow-x-scroll">
          {amazonCategories.map((category, i) => (
            <AnimatedSection
              effect="slide-down"
              key={i}
              className={`flex items-center`}
              delay={i * 100 + 200}
            >
              <div
                onClick={() => setSelectedCategory(category)}
                className={`grow cursor-pointer hover:bg-gray-700 ${
                  selectedCategory == category && "bg-gray-500"
                }`}
              >
                <img
                  className="w-[60px]  pt-1 min-w-[60px]"
                  src={`/amazon-gifs/${category.toLowerCase()}.gif`}
                  alt={`${category} gif`}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
        <h1 className="bg-custom text-lg text-center py-2">
          {selectedCategory ? selectedCategory : null}
          {selectedCategory && selectedCategory !== "Fish" && "s"}
          {selectedCategory == "Insect" && "/Arachnids"}
        </h1>
      </section>
      <section
        id="data+bot"
        className="bg-custom md:flex grow h-[500px] w-full "
      >
        <div className="w-full md:w-3/5 overflow-y-auto p-2 h-full">
          <div className="h-full">
            {Amazons.filter((data) => {
              if (selectedCategory === "Insect") {
                return (
                  data.category === "Insect" || data.category === "Arachnid"
                );
              }
              return data.category === selectedCategory;
            }).map((data, i) => (
              <AnimatedSection
                effect="slide-down"
                key={i}
                className={`flex items-center`}
                delay={i * 100}
              >
                <ul
                  onClick={() => {
                    setOpenChat(true);
                    sendMessage(
                      `Tell me more about the ${data.species} (${data.scientific_name}) `
                    );
                  }}
                  className="px-2 hover:bg-gray-400 cursor-pointer leading-none py-1"
                >
                  <br />
                  <strong className="underline mb-1">
                    {data.species} <em>({data.scientific_name})</em>
                  </strong>
                  <li>{data.description}</li>
                  <br />
                </ul>
              </AnimatedSection>
            ))}
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
      <footer className="bg-custom h-[50px] border-t-2 w-full px-[5%]"></footer>
    </main>
  );
}
