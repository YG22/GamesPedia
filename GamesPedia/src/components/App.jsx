import React from "react";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import games from "../Games";

export default function App() {
  let counter = 0;
  return (
    <div className="App">
      <Header />
      <div>
        {games.map((game) => {
          return (
            <Main
              key={++counter}
              name={game.name}
              image1={game.image1}
              image2={game.image2}
              image3={game.image3}
              image4={game.image4}
              price={game.price}
              CentralImage={game.CentralImage}
              summary={game.summary}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
