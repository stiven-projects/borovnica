import { useMemo, useState } from 'react';
import Question, { TQuestion } from './Question';
import { shuffle } from '../utils/quizzHelper';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../components/Button';

const questions: TQuestion[] = shuffle([
  {
    text: 'What is React?',
    answers: [
      {
        text: 'A JavaScript library for building user interfaces',
        isCorrect: true,
      },
      { text: 'A programming language', isCorrect: false },
      { text: 'A database management system', isCorrect: false },
      { text: 'A design framework', isCorrect: false },
    ],
  },
  {
    text: 'Which keyword is used to declare a variable in JavaScript?',
    answers: [
      { text: 'var', isCorrect: true },
      { text: 'let', isCorrect: false },
      { text: 'const', isCorrect: false },
      { text: 'int', isCorrect: false },
    ],
  },
  {
    text: 'What is a component in React?',
    answers: [
      { text: 'A reusable piece of UI', isCorrect: true },
      { text: 'A built-in function', isCorrect: false },
      { text: 'A type of variable', isCorrect: false },
      { text: 'An HTML tag', isCorrect: false },
    ],
  },
  {
    text: 'How do you write a comment in JavaScript?',
    answers: [
      { text: '// This is a comment', isCorrect: true },
      { text: '/* This is a comment */', isCorrect: false },
      { text: '# This is a comment', isCorrect: false },
      { text: '-- This is a comment', isCorrect: false },
    ],
  },
  {
    text: 'What does JSX stand for in React?',
    answers: [
      { text: 'JavaScript XML', isCorrect: true },
      { text: 'Java XML', isCorrect: false },
      { text: 'JavaScript XSL', isCorrect: false },
      { text: 'Java XSL', isCorrect: false },
    ],
  },
  {
    text: 'What is the main data structure in JavaScript?',
    answers: [
      { text: 'Object', isCorrect: true },
      { text: 'Array', isCorrect: false },
      { text: 'Function', isCorrect: false },
      { text: 'Variable', isCorrect: false },
    ],
  },
  {
    text: 'In React, how do you pass data from a parent component to a child component?',
    answers: [
      { text: 'Using props', isCorrect: true },
      { text: 'Using state', isCorrect: false },
      { text: 'Using context', isCorrect: false },
      { text: 'Using refs', isCorrect: false },
    ],
  },
  {
    text: 'What is the purpose of the useEffect hook in React?',
    answers: [
      {
        text: 'To perform side effects in functional components',
        isCorrect: true,
      },
      { text: 'To declare a class component', isCorrect: false },
      { text: 'To define a new component', isCorrect: false },
      { text: 'To update the component state', isCorrect: false },
    ],
  },
  {
    text: 'Which operator is used for strict equality in JavaScript?',
    answers: [
      { text: '===', isCorrect: true },
      { text: '==', isCorrect: false },
      { text: '=', isCorrect: false },
      { text: '!==', isCorrect: false },
    ],
  },
  {
    text: 'What is the purpose of the map() function in JavaScript?',
    answers: [
      {
        text: 'To iterate over an array and apply a function to each element',
        isCorrect: true,
      },
      { text: 'To filter an array based on a condition', isCorrect: false },
      { text: 'To reduce an array to a single value', isCorrect: false },
      { text: 'To sort an array in ascending order', isCorrect: false },
    ],
  },
]);

const QuizzContainer = () => {
  const [scoreBoard, setScoreBoard] = useState<{ key: number; value: boolean }[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>();

  const question = useMemo(() => {
    const { answers, text } = questions[currentQuestion];
    return { text, answers: shuffle(answers) };
  }, [currentQuestion]);

  function onAnswerSelected(index: number) {
    if (showStatus) return;
    const correct = question.answers.findIndex((a) => a.isCorrect);
    setShowStatus(true);
    setCorrectAnswerIndex(correct);
    if (scoreBoard.find((el) => el.key === currentQuestion) === undefined)
      setScoreBoard((prev) => [...prev, { key: currentQuestion, value: index === correct }]);
    setTimeout(() => {
      if (currentQuestion + 1 === questions.length) {
        setIsFinished(true);
        return;
      }

      setShowStatus(false);
      setCorrectAnswerIndex(undefined);
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 1000);
  }

  function resetQuiz() {
    setScoreBoard([]);
    setIsFinished(false);
    setShowStatus(false);
    setCorrectAnswerIndex(undefined);
    setCurrentQuestion(0);
  }

  return (
    <>
      <Question
        question={question}
        total={questions.length}
        currentQuestion={currentQuestion}
        correctAnswerIndex={correctAnswerIndex}
        showStatus={showStatus}
        scoreBoard={scoreBoard}
        onAnswerSelected={onAnswerSelected}
      />

      <Modal show={isFinished}>
        <Modal.Header>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{`You have answered ${scoreBoard.filter((a) => a.value).length} out of ${
            scoreBoard.length
          } questions correctly`}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={resetQuiz}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuizzContainer;
