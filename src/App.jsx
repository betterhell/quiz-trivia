import QuizCard from "./components/QuizCard/QuizCard";
import React, {useEffect} from "react";
import {useQuizStore} from "./store/store";
import Result from "./components/Result/Result";
import CreatedBy from "./components/CreatedBy/CreatedBy";

function App() {
    const {
        questions,
        gameOver,
    } = useQuizStore()

    useEffect(() => {
    },[questions.length])

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('./assets/background.png')] bg-cover bg-no-repeat bg-center">
        {gameOver ? <Result /> : <QuizCard /> }
        <CreatedBy />
    </div>
  );
}

export default App;
