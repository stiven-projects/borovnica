interface Props {
  children: any;
}

const QuestionFrame = ({ children }: Props) => {
  return (
    <div className="flex w-full h-full justify-center items-center bg-primary-default">
      <div className="flex flex-col gap-3 bg-slate-100 min-w-[800px] rounded-lg shadow-slate-50 shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default QuestionFrame;
