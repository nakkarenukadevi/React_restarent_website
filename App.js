import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componats/Header";
import RestaurantCard from "./componats/RestaurantCard";
import Body from "./componats/Body";

function App() {
  return (
    <>
      <Header />

      <Body />
    </>
  );
}
export default App;

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
