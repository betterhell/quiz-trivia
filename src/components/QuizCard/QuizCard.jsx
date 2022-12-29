import {ReactComponent as CardImg} from "../../assets/undraw_adventure.svg";
import PropTypes from "prop-types";
import {useQuizStore} from "../../store/store"
import QuizQuestion from "../QuizQuestion/QuizQuestion";
import QuizStart from "../QuizStart/QuizStart";

const QuizCard = ({gameName}) => {
    const {
        handleIndexIncrement,
        checkAnswer,
        startGame,
    } = useQuizStore()

    return (
            <div className="card max-w-[464px] w-screen h-fit bg-white rounded-[24px] relative">
                <header className="flex gap-[77px] justify-between items-center absolute top-[-80px]">
                    <h1 className="font-[700] text-4xl text-[#F2F2F2] mb-[10px]">{gameName}</h1>
                    <CardImg />
                </header>
                <main className="mt-[100px] p-5">
                    {startGame ? <QuizQuestion /> : <QuizStart /> }
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