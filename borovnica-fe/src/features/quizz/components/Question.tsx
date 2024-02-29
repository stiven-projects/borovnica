import AnswerContainer from './AnswerContainer';
import QuestionFrame from './QuestionFrame';
import QuestionHeader from './QuestionHeader';
import Scoreboard from './Scoreboard';

export type TQuestion = {
  text: string;
  answers: TAnswer[];
};

export type TAnswer = {
  text: string;
  isCorrect: boolean;
};

interface Props {
  question: TQuestion;
  total: number;
  currentQuestion: number;
  correctAnswerIndex?: number;
  showStatus: boolean;
  scoreBoard: { key: number; value: boolean }[];
  onAnswerSelected: (index: number) => void;
}

const Question = ({
  question,
  total,
  currentQuestion,
  correctAnswerIndex,
  showStatus,
  scoreBoard,
  onAnswerSelected,
}: Props) => {
  return (
    <QuestionFrame>
      <Scoreboard scoreBoard={scoreBoard} total={total} />
      <QuestionHeader text={question.text} />
      <AnswerContainer
        answers={question.answers}
        currentQuestion={currentQuestion}
        correctAnswerIndex={correctAnswerIndex}
        showStatus={showStatus}
        onAnswerSelected={onAnswerSelected}
      />
    </QuestionFrame>
  );
};

export default Question;
