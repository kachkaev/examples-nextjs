export default function Home() {
  return (
    <div className="relative text-clip">
      {Array.from({ length: 20 }).map((_, col) =>
        Array.from({ length: 20 }).map((__, row) => (
          <div
            // eslint-disable-next-line react/no-array-index-key -- This is a static grid
            key={row + "_" + col}
            className={
              "absolute inline-flex size-[100px] origin-top-left items-center justify-center text-xl text-black text-opacity-10" +
              " " +
              ((row + col) % 2 ? "bg-zinc-300" : "bg-zinc-100")
            }
            style={{
              top: `${row * 100}px`,
              left: `${col * 100}px`,
            }}
          >
            {row === 0 ? (
              <div className="absolute inset-1 flex flex-col items-start text-sm text-black text-opacity-100">
                {col * 100}
              </div>
            ) : null}
            {col === 0 && row > 0 ? (
              <div className="absolute inset-1 flex items-start text-sm text-black text-opacity-100">
                {row * 100}
              </div>
            ) : null}
          </div>
        )),
      )}
    </div>
  );
}
