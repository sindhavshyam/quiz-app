import React, { useRef, useState } from "react";
import { data } from "../assets/data";

function Quiz({notify}) {
  const [question, setQuestion] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const option_array = [option1, option2, option3, option4];

  const handleAnswere = (e, answere) => {
    if (lock === false) {
      if (question.ans === answere) {
        e.target.classList.add("currect");
        setLock(true);
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("currect");
      }
    }
  };

  const handleSubmit = () => {
    if (index === data.length - 1) {
      setResult(true);
      setIndex(0);
    }

    if (lock === true) {
      setIndex(index + 1);
      setQuestion(data[index]);
      setLock(false);

      option_array.map((e) => {
        e.current.classList.remove("currect");
        e.current.classList.remove("wrong");
        return null;
      });
    }else{
     notify()
    }
  };
  const handleReset = () => {
    setLock(false);
    setIndex(0);
    setScore(0);
    setQuestion(data[0]);
    setResult(false);
  };

  return (
    <div className="w-88 md:w-[30%] p-4 bg-white rounded-lg">
      <h1 className="text-center md:text-4xl md:py-4 font-bold text-2xl capitalize">quiz app</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <div>
            <h2 className="text-lg font-semibold text-zinc-600 py-4 md:text-2xl">
             {index+1}. {question.q}
            </h2>
            <ul>
              <li
                onClick={(e) => {
                  handleAnswere(e, 1);
                }}
                ref={option1}
                className="p-2 border-2 m-2 rounded"
              >
                A. {question.option1}
              </li>
              <li
                onClick={(e) => {
                  handleAnswere(e, 2);
                }}
                ref={option2}
                className="p-2 border-2 m-2 rounded"
              >
               B. {question.option2}
              </li>
              <li
                onClick={(e) => {
                  handleAnswere(e, 3);
                }}
                ref={option3}
                className="p-2 border-2 m-2 rounded"
              >
                C. {question.option3}
              </li>
              <li
                onClick={(e) => {
                  handleAnswere(e, 4);
                }}
                ref={option4}
                className="p-2 border-2 m-2 rounded"
              >
                D. {question.option4}
              </li>
            </ul>
            <div className="flex items-center justify-center py-4">
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-blue-600 text-white font-semibold rounded"
              >
                Sumbit
              </button>
            </div>
            <p className="text-center text-zinc-500">
              {index} Out of {data.length} Questions
            </p>
          </div>
        </>
      )}

      {result ? (
        <>
          <h4 className="text-lg text-center font-bold my-4">
            Your Score is {score} out of {data.length}
          </h4>
          <div className="flex justify-center items-center text-white font-semibold">
            <button
              onClick={handleReset}
              className="px-8 py-2 bg-blue-600 font-semibold text-white rounded"
            >
              Reset
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Quiz;
