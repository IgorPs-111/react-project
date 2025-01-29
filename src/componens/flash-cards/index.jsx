import { useState } from "react";

export const FlashCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const flashcards = [
    {
      id: 1,
      name: "Javascript",
      desc: "What language is React based on?",
    },
    {
      id: 2,
      name: "Components",
      desc: "What are the building blocks of React apps?",
    },
    {
      id: 3,
      name: "JSX",
      desc: "What's the name of the syntax we use to describe a UI in React?",
    },
    {
      id: 4,
      name: "Props",
      desc: "How to pass data from parent to child components?",
    },
    {
      id: 5,
      name: "useState hook",
      desc: "How to give components memory?",
    },
    {
      id: 6,
      name: "Controlled element",
      desc: "What do we call an input element that is completely synchronised with state?",
    },
  ];

  const handleClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="flashcards">
      {flashcards.map(
        (card, index) =>
          card && (
            <div
              className={selectedCard === card.id ? "selected" : ""}
              key={index}
              onClick={() => {
                if (selectedCard !== card.id) {
                  handleClick(card.id);
                } else {
                  handleClick(null);
                }
              }}
            >
              {selectedCard === card.id && card.name && <p>{card.name}</p>}
              {selectedCard !== card.id && card.desc && <p>{card.desc}</p>}
            </div>
          ),
      )}
    </div>
  );
};
