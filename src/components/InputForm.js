import { useState } from "react";
import "./../styles/inputForm.css";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";

function InputForm({ messageList, setMessageList }) {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    const data = {
      prompt: input,
      temperature: 0.5,
      max_tokens: 250,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );
    const responseJSON = await response.json();
    //for now just selecting first choice
    const responseContent = responseJSON.choices[0].text;
    const messageItem = { prompt: input, response: responseContent };
    setMessageList([messageItem, ...messageList]);
    setInput("");
    setLoading(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    getResponse();
  };

  const handleFormChange = (e) => {
    setInput(e.target.value);
  };

  const handleChipClick = (e) => {
    const text = e.target.textContent.slice(0, -3) + " ";
    setInput(text);
  };

  return (
    <form className="pt5 flex flex-column">
      <label htmlFor="prompt" className="b pv2">
        Enter a prompt for the AI to respond to!
      </label>
      <textarea
        id="prompt"
        type="text"
        className="w5 noresize input-box"
        value={input}
        onChange={handleFormChange}
      />
      <div className="flex pv3 mb3">
        <Chip
          className="chip"
          label="Tell me a story about..."
          onClick={handleChipClick}
        />
        <Chip
          className="chip"
          label="Write a movie script about..."
          onClick={handleChipClick}
        />
        <Chip
          className="chip"
          label="Write a food review for..."
          onClick={handleChipClick}
        />
      </div>
      <div className="flex items-center">
        <button className="submit mr4" onClick={submitForm}>
          SUBMIT
        </button>
        {loading ? <CircularProgress /> : <></>}
      </div>
    </form>
  );
}

export default InputForm;
