import { useState } from 'react';
import './../styles/inputForm.css';

function InputForm({messageList, setMessageList}) {
  const [input, setInput] = useState();

  const getResponse = async () => {
    const data = {
      prompt: input,
      temperature: 0.5,
      max_tokens: 250,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
     };

    const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
     });
     const responseJSON = await response.json();
     //for now just selecting first choice
     const responseContent = responseJSON.choices[0].text;
     const messageItem = { prompt: input, response: responseContent };
    setMessageList([messageItem, ...messageList]);
  }

  const submitForm = (e) => {
    e.preventDefault();
    getResponse();
  }

  const handleFormChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className='pt5 flex flex-column'>
      <label className="b pv2">Enter prompt</label>
      <textarea type="text" className='w5 noresize mb3 input-box' value={input} onChange={handleFormChange}/>
      <input type="submit" value="SUBMIT" className='submit' onClick={submitForm}/>
    </form>
  );
}

export default InputForm;