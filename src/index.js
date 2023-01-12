import React from "react";
import ReactDOM from "react-dom/client"
import ReactBook from "./ReactBook"
// import Sample from "./Sample"


const root=ReactDOM.createRoot(document.querySelector('#root'));



root.render(
  <React.StrictMode>
    {/* <Sample 
    str1="sample01"
    str2="sample02"
    str3="sample03"
    /> */}

    <ReactBook 
    title="react"
    price={30000}
    room="A 강의실"
    />
  </React.StrictMode>
)