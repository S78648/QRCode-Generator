import { useState } from "react";
import axios from 'axios'
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  let url;
  const handleSubmit = (e) => {
   e.preventDefault();
  /*  url = await axios.post('http://localhost:4000/qrcode',{link:link}); */
   console.log("button clicked");
  };

  return (
    <>
      <h1>QR Code Generator</h1>
      <form >
        <input
          type="text"
          placeholder="Enter text here..."
          onChange={(e) => setLink(e.target.value)}
        />
        <button onSubmit={handleSubmit}>Submit</button>
        </form>
        <div id="QR">
          <img src={url} alt="" />
        </div> 
    </>
  );
}

export default App;
