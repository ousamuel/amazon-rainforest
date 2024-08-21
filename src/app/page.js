"use client";
import { useEffect, useState, useRef } from "react";
import Animals from "./lists/animals";
export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [openChat, setOpenChat] = useState(false);
  const [selectedAnimalCategory, setSelectedAnimalCategory] = useState(null);
  const animals = [
    "Mammal",
    "Reptile",
    "Amphibian",
    "Fish",
    "Bird",
    "Insect",
    "Plant",
  ];
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Ask me anything about the Amazon Rainforest!",
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
        return reader.read().then(processText);
      });
    });
  };
  var markdown = require("markdown").markdown;

  return (
    <main className="h-[100vh] w-[100vw] flex flex-col items-center">
      <h1 className="mt-2 p-6 text-4xl text-center bg-black text-white rounded-t-[20px]">
        The Amazon Rainforest: Nature&apos;s Living Wonder
      </h1>

      <section className="flex-shrink-0 bg-black w-[95%] border-2 border-black">
        <div className="flex justify-evenly flex-wrap">
          {animals.map((animal, i) => (
            <div
              key={i}
              onClick={() => setSelectedAnimalCategory(animal)}
              className={`flex-grow cursor-pointer hover:bg-gray-700 ${
                selectedAnimalCategory == animal && "bg-gray-500"
              }`}
            >
              <img
                className="w-[60px] mx-auto pt-1"
                src={`/animal-gifs/${animal}.gif`}
                alt={`${animal} gif`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-h-[70%] overflow-y-auto bg-black p-2 w-[95%] ">
        <h1 className="text-2xl text-white text-center">
          {selectedAnimalCategory
            ? selectedAnimalCategory
            : "Choose a category to learn more"}
          {selectedAnimalCategory && selectedAnimalCategory !== "Fish" && "s"}
          {selectedAnimalCategory == "Insect" && "/Arachnids"}
        </h1>
        {selectedAnimalCategory &&
          Animals.filter((animal) => {
            if (selectedAnimalCategory === "Insect") {
              return (
                animal.category === "Insect" || animal.category === "Arachnid"
              );
            }
            return animal.category === selectedAnimalCategory;
          }).map((animal, i) => (
            <ul
              key={i}
              onClick={() => {
                setOpenChat(true);
                sendMessage(`Tell me more about the ${animal.species}`);
                console.log(message);
                // sendMessage();
              }}
              className="text-white px-2 hover:bg-gray-800 cursor-pointer"
            >
              <br />
              <strong>
                {animal.species} <em>({animal.scientific_name})</em>
              </strong>
              <li>{animal.description}</li>
              <br />
            </ul>
          ))}
      </section>
      {openChat ? (
        <div className="border-2 border-black chat-div">
          <section
            onClick={() => setOpenChat((prev) => !prev)}
            className="flex justify-between p-2 text-black cursor-pointer hover:bg-gray-200 border-b-2"
          >
            <span>Click to minimize</span>
            <span>-</span>
          </section>
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
          <section id="user-message" className="">
            <form
              className="flex justify-center"
              onSubmit={(e) => {
                sendMessage(message);
                e.preventDefault();
              }}
            >
              <div className="w-full px-2 pb-2 border-t-2  bg-transparent text-black-200">
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
      ) : (
        <button
          className="chat-button bg-gray-200 py-2 "
          onClick={() => setOpenChat((prev) => !prev)}
        >
          open chat
        </button>
      )}
    </main>
  );
}
