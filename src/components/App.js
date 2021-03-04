import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Header';
import React, { useState, useEffect } from "react"


require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState([])
  const [q, setQ] = useState("")

  useEffect(() => {
    fetch("../Data.json")
    .then(response => response.json())
    .then((json) => setData(json));
  }, [])
  return (
    <>
      <Header/>
      <div>
          <div>filter goes here</div>
          <div>datatable goes here</div>
      </div>
    </>
  );
}

export default App;
