import create from "zustand";
import axios from "axios";

export const useQuizStore = create((set, get) => ({
   questions: [],
   currentIndex: 0,
   score: 0,
   isError: null,
   isLoading: true,
   checkAnswer: false,
   gameOver: false,
   startGame: false,

    getAllQuestions: () => {
       axios.get("https://the-trivia-api.com/api/questions?limit=5&difficulty=medium")
           .then(res => {
               set({questions : res.data.map((quest) => ({
                       id: quest.id,
                       question: quest.question,
                       incorrectAnswers: quest.incorrectAnswers,
                       correctAnswer: quest.correctAnswer,
                       allAnswers: [...quest.incorrectAnswers, quest.correctAnswer].sort(() => Math.random() - 0.5),
                   }))})
               set({isLoading : false})
           }).catch((error) => {
               set({isError : error})
       })
    },

    handleIndexIncrement: () => {
       if (get().questions.length - 1 > get().currentIndex) {
           set(state => ({currentIndex: state.currentIndex + 1, checkAnswer: false}))
       } else {
           set({gameOver: true})
       }
    },

    handleCheckAnswer: (question, answer) => {
        if (question.correctAnswer === answer) {
            set(state => ({score: state.score + 1}))
        }
        set({checkAnswer : true})
    },

    handleStartGame: () => {
        set({gameOver: false, startGame: true})
    }
}))