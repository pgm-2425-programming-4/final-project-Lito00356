// import { useState } from "react";
import "./App.css";

function MyButton() {
  return <button>Press Me!</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <MyButton />
    </div>
  );
}
