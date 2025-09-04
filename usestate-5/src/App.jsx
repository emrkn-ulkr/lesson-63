import React, { useState } from "react";

import './App.css'

function App() {
  const [firstName, setFirstName] = useState("Emirkan");
  const [lastName, setLastName] = useState("Ülker");

  return (
    <>
      <div>{firstName}</div>
      <div><button onClick={() => { setFirstName("Şule") }}>İsmi Değiştir</button></div>

    </>
  )
}

export default App
