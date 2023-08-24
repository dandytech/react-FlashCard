import { useState } from "react";
import "../index.css";

const questions = [
  {
    id: 1,
    question: "What language is React built on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building block of React ?",
    answer: "components",
  },
  {
    id: 3,
    question: "What is the name of the syntax to display UI in React ?",
    answer: "JSX",
  },
  {
    id: 4,
    question:
      "What do we use to pass data from parent to child components in React ?",
    answer: "Props",
  },
  {
    id: 5,
    question:
      "What we call an input element that is completely synchronise with time ?",
    answer: "Controlled element",
  },
  {
    id: 6,
    question: "What do we use to give component a memory in React",
    answer: "useState Hook",
  },
];
function Flashcards() {
  const [selectedId, setSelected] = useState(null);

  function handleClick(id) {
    console.log(id, "yes");
    setSelected(id !== selectedId ? id : null);
  }

  return (
    <div className="container">
      <h3>QUESTIONS AND ANSWERS</h3>

      <div className="flashcards">
        {questions.map((question) => (
          <div key={question.id} onClick={() => handleClick(question.id)}>
            {question.id !== selectedId && (
              <div className="card">{question.question}</div>
            )}

            {question.id === selectedId && (
              <div
                className="card"
                style={{ color: "white", backgroundColor: "red" }}
              >
                {question.answer}{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Flashcards;
