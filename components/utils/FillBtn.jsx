const FillBtn = ({ text, className }) => {
  return (
    <>
      <button
        className={`px-7 py-3 bg-[#7F56D9] text-white rounded-full ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default FillBtn;
