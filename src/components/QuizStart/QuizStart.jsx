import React from 'react';
import {useQuizStore} from "../../store/store";

const QuizStart = () => {
    const {
        getAllQuestions,
        handleStartGame,
    } = useQuizStore()


    const startGame = () => {
        handleStartGame()
        getAllQuestions()
    }

    return (
        <>
            <div className="flex flex-col gap-[15px]">
                <h2 className="text-xl font-semibold text-[#1D355D] text-center">Trivia is a type of game in which player are asked questions about different topics and they have to get as many correct answers as possible</h2>
                <button onClick={startGame} className="py-3 px-10 text-white self-center rounded-[12px] bg-[#F9A826] shadow-2xl animate-[wiggle_1.5s_ease-in-out_infinite]">Start</button>
            </div>
        </>
    );
};

export default QuizStart;