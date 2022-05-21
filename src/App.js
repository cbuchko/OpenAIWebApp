import "tachyons";
import "./styles/styles.css";
import InputForm from "./components/InputForm";
import Response from "./components/Response";
import "@fontsource/roboto-mono"; // Defaults to weight 400 with all styles included.
import { useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="flex flex-column wrapper roboto mv5">
      <header>
        <h1 className="">Welcome to my OpenAI Playground!</h1>
      </header>
      <main className="mainContainer">
        <InputForm messageList={messageList} setMessageList={setMessageList} />
        {messageList.map((message, index) => (
          <Response
            key={index}
            prompt={message.prompt}
            response={message.response}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
