function Hero({ onStar, onDownload, onReport, onReset }) {
  return (
    <>
      <header className="px-6 pt-8 text-center md:px-20">
        <h2 className="text-4xl font-bold md:text-7xl">
          Build pages faster.
        </h2>
        <p className="mt-5 text-xl text-[#000000] md:text-2xl">
          An open-source component kit for React.
        </p>
        <p className="mt-2 text-lg text-[#000000] md:text-xl">
          Made by TERENCE EMMANUEL DE VERA
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-4 px-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={onStar}
        >
          Star
        </button>

        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={onDownload}
        >
          Download
        </button>

        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={onReport}
        >
          Report issue
        </button>

        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default Hero;
