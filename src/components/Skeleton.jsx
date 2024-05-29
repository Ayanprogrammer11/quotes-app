function Skeleton({ nums = 1 }) {
  const stacks = new Array(nums).fill(10);
  return (
    <div className="quotes-list grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 gap-6 lg:gap-8">
      {stacks.map((stack, i) => (
        <div
          className="border shadow rounded-md p-4 max-w-sm w-full mx-auto border-none"
          key={i}
        >
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
