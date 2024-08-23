"use client";
import { useEffect, useState, useRef } from "react";
import Amazons from "./lists/amazon";
import ChatBox from "./comps/ChatBox";
import InfoSections from "./lists/InfoSections";
import Articles from "./lists/Articles";
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
        "Hello there! I'm a virtual expert, please ask me anything about the Amazon Rainforest or click on any of the items for more information!",
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
    <main className="min-h-[100vh] flex flex-col items-center">
      <AnimatedSection
        effect="fade-in"
        delay={300}
        className="text-white min-h-screen w-full flex flex-col items-center justify-center"
      >
        <h1 className="font-black text-7xl">The Amazon Rainforest</h1>
        <AnimatedSection effect="fade-in" delay={1500}>
          <h2 className="font-bold text-3xl">Nature&apos;s Living Wonder</h2>
        </AnimatedSection>
      </AnimatedSection>
      <div className="video-background">
        <video muted autoPlay loop>
          <source
            type="video/mp4"
            src="https://player.vimeo.com/external/375266918.hd.mp4?s=5f73d3e75aace116e984f273303b917ed50c2527&profile_id=175"
          />
        </video>
      </div>
      <section
        id="info-blocks"
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
        <h2
          className={`text-center smooth-fade attention ${
            selectedCategory && "opacity-0"
          }`}
        >
          Click an icon to get started with our virtual chatbot!
        </h2>
        <div className="flex justify-evenly overflow-x-auto pt-6">
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
        {selectedCategory && (
          <h1 className="bg-custom text-lg text-center py-2">
            {selectedCategory}
            {selectedCategory && selectedCategory !== "Fish" && "s"}
            {selectedCategory == "Insect" && "/Arachnids"}
          </h1>
        )}
      </section>
      {selectedCategory && (
        <section
          id="data+bot"
          className="border-y-2 pb-6 bg-custom flex flex-col md:flex-row grow h-fit w-full "
        >
          <div
            className="w-full md:w-3/5 overflow-y-auto 
          p-2 h-[500px] max-h-[40vh] md:max-h-[500px] border-b-2 md:border-0"
          >
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
            openChat={openChat}
            setOpenChat={setOpenChat}
            sendMessage={sendMessage}
            setMessage={setMessage}
            messages={messages}
            message={message}
          />
        </section>
      )}

      <section id="articles" className="bg-custom p-10 pb-2 pt-6">
        <h1 className="text-2xl text-center">Additional Articles</h1>
        <div className="w-full flex flex-wrap justify-evenly">
          {Articles.map((article, i) => (
            <a
              key={i}
              className="hover:opacity-80 card"
              target="_blank"
              href={article.url}
              style={{ backgroundImage: `url(${article.src})` }}
            >
              <div className="card-content">
                <h3>{article.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer className="bg-custom h-[50px] w-full px-[5%] flex items-center">
        <div className="border-t-2 w-full flex justify-center pt-1 text-gray-500">
          <span className="">
            @ 2024{" "}
            <a
              className="hover:text-blue-600"
              target="_blank"
              href="https://samuel-ou.com/"
            >
              Samuel Ou
            </a>{" "}
          </span>
        </div>
      </footer>
    </main>
  );
}
