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
            <div className="card m-3 max-w-[464px] w-screen h-fit bg-white rounded-[24px] relative">
                <header className="hidden sm:flex sm:gap-[77px] sm:justify-between sm:items-center absolute sm:top-[-80px]">
                    <h1 className="sm:font-[700] sm:text-4xl sm:text-[#F2F2F2] sm:mb-[10px]">{gameName}</h1>
                    <div className="hidden sm:block">
                        <CardImg />
                    </div>
                </header>
                <main className="sm:mt-[50px] mt-[10px] p-5">
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