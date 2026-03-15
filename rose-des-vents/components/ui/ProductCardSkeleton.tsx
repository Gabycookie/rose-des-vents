export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-wool mb-4" />
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 space-y-2">
          <div className="h-3.5 bg-wool rounded w-4/5" />
          <div className="h-3 bg-wool rounded w-1/4" />
        </div>
      </div>
      <div className="flex gap-1.5 mt-2.5">
        {[1, 2, 3].map((n) => (
          <div key={n} className="w-3 h-3 rounded-full bg-wool" />
        ))}
      </div>
    </div>
  );
}
