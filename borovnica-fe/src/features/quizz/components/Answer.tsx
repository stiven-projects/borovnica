interface Props {
  text: string;
  index: number;
  showStatus: boolean;
  isCorrect: boolean;
  onClick: () => void;
}

const animationMap = new Map<number, string>([
  [0, `animate-[fade-in_1s_both_0s]`],
  [1, `animate-[fade-in_1s_both_0.25s]`],
  [2, `animate-[fade-in_1s_both_0.5s]`],
  [3, `animate-[fade-in_1s_both_0.75s]`],
]);

const Answer = ({ text, index, showStatus, isCorrect, onClick }: Props) => {
  const background = showStatus ? (isCorrect ? 'bg-green-200' : '') : 'hover:bg-primary-light';

  const animation = animationMap.get(index);

  return (
    <div
      className={`m-4 px-4 py-4 rounded-xl ${background} ${animation} transition-transform hover:cursor-pointer hover:translate-x-1 hover:translate-y-[-0.25rem]`}
      onClick={() => onClick()}
    >{`${String.fromCharCode('A'.charCodeAt(0) + index)}. ${text}`}</div>
  );
};

export default Answer;
