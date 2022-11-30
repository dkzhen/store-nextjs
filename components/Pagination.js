import Link from "next/link";

export const Pagination = ({ page }) => {
  let next = 0;
  if (!page) {
    next = 2;
  } else {
    next = Number(page) + 1;
  }
  let prev = Number(page) - 1;
  let color1, color2, color3, color4, color5;
  let prevStyle;
  let nextStyle;

  if (page == 1) {
    color1 = "bg-green-300";
    [color2, color3, color4, color5] = "";
  } else if (page == 2) {
    color2 = "bg-green-300";
    [color1, color3, color4, color5] = "";
  } else if (page == 3) {
    color3 = "bg-green-300";
    [color2, color1, color4, color5] = "";
  } else if (page == 4) {
    color4 = "bg-green-300";
    [color2, color3, color1, color5] = "";
  } else if (page == 5) {
    color5 = "bg-green-300";
    [color2, color3, color4, color1] = "";
  } else {
    color1 = "bg-green-300";
    [color2, color3, color4, color5] = "";
  }

  if (page >= 5) {
    nextStyle = "hidden";
  } else {
    nextStyle = "flex";
  }
  if (page <= 1 || !page) {
    prevStyle = "hidden";
  } else {
    prevStyle = "md:flex hidden";
  }
  // console.log(color);
  return (
    <>
      <div className="flex justify-center items-center w-screen px-10 space-x-2 md:space-x-4 mx-auto flex-row ">
        <Link
          href={`/store/page/${prev}`}
          className={`${prevStyle} border-2 border-red-300 rounded-lg py-1 px-2  flex-row space-x-2 font-mono`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </div>
          <p>Prev</p>
        </Link>

        <Link
          href={`/store/page/1`}
          className={`${color1} border-2 border-red-300 rounded-lg py-1 px-2 flex flex-row space-x-2 font-mono`}
        >
          <p>1</p>
        </Link>
        <Link
          href={`/store/page/2`}
          className={`${color2} border-2 border-red-300 rounded-lg py-1 px-2 flex flex-row space-x-2 font-mono`}
        >
          <p>2</p>
        </Link>
        <Link
          href={`/store/page/3`}
          className={`${color3} border-2 border-red-300 rounded-lg py-1 px-2 flex flex-row space-x-2 font-mono`}
        >
          <p>3</p>
        </Link>
        <Link
          href={`/store/page/4`}
          className={`${color4} border-2 border-red-300 rounded-lg py-1 px-2 flex flex-row space-x-2 font-mono`}
        >
          <p>4</p>
        </Link>
        <Link
          href={`/store/page/5`}
          className={` ${color5} border-2 border-red-300 rounded-lg py-1 px-2 flex flex-row space-x-2 font-mono`}
        >
          <p>5</p>
        </Link>

        <Link
          href={`/store/page/${next}`}
          className={`${nextStyle} border-2 border-red-300 rounded-lg py-1 px-2 flex-row space-x-2 font-mono`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
              />
            </svg>
          </div>
          <p>Next</p>
        </Link>
      </div>
    </>
  );
};
