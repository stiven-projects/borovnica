interface Props {
  text: string;
}

const QuestionHeader = ({ text }: Props) => {
  return (
    <>
      <div className="p-4 m-4 border-b-2 border-gray-900">{text}</div>
    </>
  );
};

export default QuestionHeader;
