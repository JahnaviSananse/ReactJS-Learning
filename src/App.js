import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  // const [form, setForm] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onChageInput = (e) => {
  //   setForm((previous) => {
  //     ...previous,
  //     [e.target.name] : e.target.value
  //   })
  // };
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> Sign Up </h1>
      <form>
        <input
          type="text"
          name="name"
          className="mt-5"
          placeholder="Your Name Please..."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="email"
          className="mt-5"
          placeholder="Your Email Please.."
          // onChange={(e) => console.log("E", e)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="password"
          className="mt-5"
          placeholder="Your Password Please.."
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn">Sign Up</button>
      </form>
      <Display n1={name} e1={email} p1={password} />
    </div>
  );
}

export default App;
