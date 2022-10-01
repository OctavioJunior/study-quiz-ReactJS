import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category })
    dispatch({ type: "REORDER_QUESTIONS" })
  }

  return (
    <div id="category">
      <h2>Escolha uma matéria</h2>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Category} alt="Matéria do Quiz" />
    </div>
  )
}

export default PickCategory;