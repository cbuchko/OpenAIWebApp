import "tachyons";
import "./styles/styles.css";
import InputForm from "./components/InputForm";
import Response from "./components/Response";
import "@fontsource/roboto-mono"; // Defaults to weight 400 with all styles included.
import { useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="flex flex-column wrapper roboto pv5">
      <div className="f2">Welcome to my OpenAI Playground!</div>
      <InputForm messageList={messageList} setMessageList={setMessageList} />
      {/* <div className="f3 mt6">Responses</div> */}
      {messageList.map((message) => (
        <Response prompt={message.prompt} response={message.response} />
      ))}
    </div>
  );
}

export default App;
