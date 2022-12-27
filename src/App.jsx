import QuizCard from "./components/QuizCard/QuizCard";
import React, {useEffect} from "react";
import {useQuizStore} from "./store/store";
import Result from "./components/Result/Result";

function App() {
    const questions = useQuizStore(state => state.questions)
    const getAllQuestions = useQuizStore(state => state.getAllQuestions)
    const gameOver = useQuizStore(state => state.gameOver)

    useEffect(() => {
        getAllQuestions()
    }, [])

    useEffect(() => {
    },[questions.length])

  return (
    <div className="w-screen h-screen flex m-auto justify-center items-center bg-[url('./assets/background.png')] bg-cover bg-no-repeat bg-center">
        {gameOver ? <Result /> : <QuizCard /> }
    </div>
  );
}

export default App;
