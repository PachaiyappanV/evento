const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <div className=" h-16 bg-white/5 rounded-full w-16 animate-pulse"></div>
      <div className="h-4 bg-white/5 rounded-md w-[80%] animate-pulse"></div>
      <div className="h-4 bg-white/5 rounded-md w-[70%] animate-pulse"></div>
    </div>
  );
};

export default SkeletonCard;
