import { useState } from "react";
import style from "./SceneEditor.module.scss";

const SnapshotController = () => {
  const [breakpoint, setBreakpoint] = useState<[number, number]>([0, 0]);

  const handleCapture = () => {
    console.log(breakpoint);
  };

  return (
    <div className={`${style.contentUI} ${style.snapshotUI}`}>
      <input
        placeholder="1601"
        type="number"
        onChange={(e) => {
          const newBreakpoint: [number, number] = [...breakpoint];
          newBreakpoint[0] = parseInt(e.target.value);

          setBreakpoint(newBreakpoint);
        }}
      />
      <input
        placeholder="1900"
        type="number"
        onChange={(e) => {
          const newBreakpoint: [number, number] = [...breakpoint];
          newBreakpoint[1] = parseInt(e.target.value);

          setBreakpoint(newBreakpoint);
        }}
      />
      <button
        className={`${style.button} ${style.hover}`}
        onClick={handleCapture}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.5 6.5 0 0 1-.709-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v5.063a6.5 6.5 0 0 1 1.5.709V6.25A3.25 3.25 0 0 0 17.75 3zM8 7.5a.5.5 0 0 0-.5.5v2.25a.75.75 0 0 1-1.5 0V8a2 2 0 0 1 2-2h2.25a.75.75 0 0 1 0 1.5zm0 9a.5.5 0 0 1-.5-.5v-2.25a.75.75 0 0 0-1.5 0V16a2 2 0 0 0 2 2h2.25a.75.75 0 0 0 0-1.5zM16.5 8a.5.5 0 0 0-.5-.5h-2.25a.75.75 0 0 1 0-1.5H16a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0zm1 5.5a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 9.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m2.5-5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default SnapshotController;
