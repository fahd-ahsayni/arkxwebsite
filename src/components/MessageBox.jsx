export default function MessageBox({ picture, alt, message, styleBoxMessage }) {
  return (
    <div className={`flex gap-2 justify-center items-center absolute ${styleBoxMessage}`}>
      <img
        src={picture}
        className="h-12 w-auto rounded-full shadow-lg border border-gray-300/10"
        alt={alt}
      />
      <div>
        <h4 className="text-gray-200 text-xs font-semibold pb-2 pl-2">{alt}</h4>
        <div className="w-56 border border-gray-300/10 backdrop-blur-sm bg-gray-500/40 pl-2.5 pr-6 py-1.5 rounded-sm shadow-black/50 shadow-2xl">
          <p className="leading-5 text-sm text-white">{message}</p>
        </div>
      </div>
    </div>
  );
}
