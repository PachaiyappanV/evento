const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 mt-28">
      <div className="h-4 bg-white/5 rounded-md w-[50%] animate-pulse"></div>
      <div className="h-4 bg-white/5 rounded-md w-[30%] animate-pulse"></div>
      <div className="h-4 bg-white/5 rounded-md w-[40%] animate-pulse"></div>
    </div>
  );
};

export default Loading;
