export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF7EE]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-[#FF710D]/30 border-t-[#FF710D] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#102B46]">Loading Eatery Cloud...</span>
      </div>
    </div>
  );
}

