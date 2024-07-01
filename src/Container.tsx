export const Container = ({ children, isVisable }: any) => {
  return (
    <div
      className={`mx-auto   bg-customWhite md:my-20  md:border md:rounded-2rem ${
        isVisable
          ? "max-w-96 p-12 flex flex-col items-start gap-10"
          : "flex-col-reverse justify-between flex md:flex-row max-w-55rem md:p-5"
      }`}
    >
      {children}
    </div>
  );
};
