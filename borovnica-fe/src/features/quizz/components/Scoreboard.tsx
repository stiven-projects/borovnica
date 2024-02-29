import { BsFillPatchMinusFill, BsFillPatchPlusFill, BsFillPatchQuestionFill } from 'react-icons/bs';

interface Props {
  scoreBoard: { key: number; value: boolean }[];
  total: number;
}

const HappyIcon = <BsFillPatchPlusFill className="text-green-500 text-2xl animate-appear" />;
const SadIcon = <BsFillPatchMinusFill className="text-red-500 text-2xl animate-appear" />;
const EmptyIcon = <BsFillPatchQuestionFill className="text-primary-default text-2xl" />;

function generateEmptyIcons(total: number, current: number) {
  const arr = [];

  for (let index = current; index < total; index++) {
    arr.push(index);
  }

  return arr.map((el) => <div key={el}>{EmptyIcon}</div>);
}

const Scoreboard = ({ scoreBoard, total }: Props) => {
  return (
    <div className="flex flex-row gap-2 p-2">
      {scoreBoard.map((el) =>
        el.value ? <div key={el.key}>{HappyIcon}</div> : <div key={el.key}>{SadIcon}</div>
      )}
      {generateEmptyIcons(total, scoreBoard.length)}
    </div>
  );
};

export default Scoreboard;
