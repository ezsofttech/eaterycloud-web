import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF7EE] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[#FF710D]/10 text-[#FF710D] font-black text-2xl flex items-center justify-center mb-4">
        404
      </div>
      <h1 className="text-2xl font-bold text-[#102B46] mb-2">Page Not Found</h1>
      <p className="text-sm text-[#64748B] mb-6 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#FF710D] hover:bg-[#E65E00] text-white text-sm font-semibold shadow-xs"
      >
        Return Home
      </Link>
    </div>
  );
}

