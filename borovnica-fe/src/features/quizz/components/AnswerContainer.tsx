import Answer from './Answer';
import { TAnswer } from './Question';

interface Props {
  answers: TAnswer[];
  currentQuestion: number;
  correctAnswerIndex?: number;
  showStatus: boolean;
  onAnswerSelected: (index: number) => void;
}

const AnswerContainer = ({
  answers,
  currentQuestion,
  correctAnswerIndex,
  showStatus,
  onAnswerSelected,
}: Props) => {
  return (
    <>
      {answers.map((answer, index) => (
        <Answer
          key={`${currentQuestion}_${index}`}
          text={answer.text}
          index={index}
          showStatus={showStatus}
          isCorrect={correctAnswerIndex === index}
          onClick={() => onAnswerSelected(index)}
        />
      ))}
    </>
  );
};

export default AnswerContainer;
