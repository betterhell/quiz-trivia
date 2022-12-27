import {ReactComponent as CardImg} from "../../assets/undraw_adventure.svg";
import PropTypes from "prop-types";
import {useQuizStore} from "../../store/store"
import {useEffect, useState} from "react";

const QuizCard = ({gameName}) => {
    const getAllQuestions = useQuizStore(state => state.getAllQuestions)
    const handleIndexIncrement = useQuizStore(state => state.handleIndexIncrement)
    const handleCheckAnswer = useQuizStore(state => state.handleCheckAnswer)
    const questions = useQuizStore(state => state.questions)
    const currentIndex = useQuizStore(state => state.currentIndex)
    const checkAnswer = useQuizStore(state => state.checkAnswer)

    const[selectedAnswer, setSelectedAnswer] = useState(null)

    const handleSelectAnswer = (question, answer) => {
        setSelectedAnswer(answer)
        handleCheckAnswer(questions[currentIndex], answer)
    }

    useEffect(() => {
        setSelectedAnswer(null)
    },[currentIndex])

    return (
            <div className="card max-w-[464px] w-screen h-fit bg-white rounded-[24px] relative">
                <header className="flex gap-[77px] justify-between items-center absolute top-[-80px]">
                    <h1 className="font-[700] text-4xl text-[#F2F2F2] mb-[10px]">{gameName}</h1>
                    <CardImg />
                </header>
                <main className="mt-[100px] p-5">
                    <div>
                        <h3 className="mb-5 font-[700] text-xl text-[#1D355D]">{questions[currentIndex]?.question}</h3>
                    </div>
                    <div className="flex gap-[25px] flex-col">
                        {questions[currentIndex]?.allAnswers.map((answer, index) =>
                            <label onClick={() => handleSelectAnswer(questions[currentIndex], answer)} key={index}
                                   className={`text-center cursor-pointer p-3 border-[1px] ${selectedAnswer === answer ? "bg-green-500" : null} text-[#9094de] rounded-[12px] border-[#9094de] hover:bg-[#F9A826] hover:text-white transition`}  htmlFor="button">
                                <input
                                    className="opacity-0"
                                    type="checkbox"
                                />{answer}
                            </label>
                        )}
                    </div>
                </main>
                <footer className="p-5 flex justify-end">
                    {checkAnswer ? <button className="py-3 px-6 text-white rounded-[12px] bg-[#F9A826]" onClick={handleIndexIncrement}>Next</button> : null}
                </footer>
            </div>
    );
};

QuizCard.defaultProps = {
    gameName: "Trivia Game"
};

QuizCard.propTypes = {
    gameName: PropTypes.string
}

export default QuizCard;