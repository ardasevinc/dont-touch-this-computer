export default function TheThing({ children }) {
  return (
    <div className="bg-blue-300 w-32 h-32 flex justify-center items-center shadow shadow-slate-400 hover:ring-2 ring-white hover:shadow-none rounded-lg transition-all duration-150 ease-in">
      {children}
    </div>
  );
}
