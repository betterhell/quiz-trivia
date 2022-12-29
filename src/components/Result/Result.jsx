import React from 'react';
import {ReactComponent as ResultImg} from "../../assets/undraw_winners.svg";
import PropTypes from "prop-types";
import {useQuizStore} from "../../store/store";

const Result = ({label}) => {
    const score = useQuizStore(state => state.score)

    const restartGame = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className="m-3 card max-w-[464px] py-5 flex flex-col gap-[70px] items-center justify-center w-screen h-fit bg-white rounded-[24px] relative">
            <div>
                <ResultImg />
            </div>
            <div>
                <h1 className="text-4xl font-semibold text-[#1D355D] text-center">{label}</h1>
                <p>You got <span className="font-semibold text-green-500">{score}</span> correct answers</p>
            </div>
            <div>
                <button onClick={restartGame} className="px-8 py-3 border-[1px] text-[#1D355D] rounded-[12px] border-[#1D355D] transition">Try Again</button>
            </div>
        </div>
    );
};

Result.defaultProps = {
    label: "Result"
};

Result.propTypes = {
    label: PropTypes.string
}

export default Result;