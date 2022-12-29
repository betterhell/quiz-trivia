import React, {useEffect, useState} from 'react';
import {useQuizStore} from "../../store/store";

const QuizQuestion = () => {
    const {
        handleCheckAnswer,
        questions,
        currentIndex,
    } = useQuizStore()

    const[selectedAnswer, setSelectedAnswer] = useState(null)

    const handleSelectAnswer = (question, answer) => {
        setSelectedAnswer(answer)
        handleCheckAnswer(questions[currentIndex], answer)
    }

    useEffect(() => {
        setSelectedAnswer(null)
    },[currentIndex])

    return (
        <>
            <div>
                <h3 className="mb-5 font-[700] text-xl text-[#1D355D]">{questions[currentIndex]?.question}</h3>
            </div>
            <div className="flex gap-[25px] flex-col">
                {questions[currentIndex]?.allAnswers.map((answer, index) =>
                    <label onClick={() => handleSelectAnswer(questions[currentIndex], answer)} key={index}
                           className={`text-center cursor-pointer p-3 border-[1px] ${selectedAnswer === answer ? "bg-green-500 text-white" : null} text-[#9094de] rounded-[12px] border-[#9094de] hover:bg-[#F9A826] hover:text-white transition`}  htmlFor="button">
                        <input
                            className="opacity-0"
                            type="checkbox"
                        />{answer}
                    </label>
                )}
            </div>
        </>
    );
};

export default QuizQuestion;