import React from "react";
import data from "../data-mobile";

const Creations = () => {
  const [cards, setCards] = React.useState(data);

  return (
    <section className="creations-mobile">
      <h2>Our Creations</h2>
      <section>
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id}>
              <div>
                <img src={image} alt="creations card" />
                <h3>{title}</h3>
              </div>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button className="btn">See all</button>
      </div>
    </section>
  );
};

export default Creations;
