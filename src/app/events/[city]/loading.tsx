import SkeletonCard from "@/components/skeleton-card";

const Loading = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16 
    py-20 px-10 min-w-full"
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default Loading;
