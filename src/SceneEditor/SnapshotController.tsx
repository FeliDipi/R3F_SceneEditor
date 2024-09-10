import { useState } from "react";
import style from "./SceneEditor.module.scss";

interface SnapshotControllerProps {
  handleCapture: (breakpoint: [number, number]) => void;
  handleSave: () => void;
}

const SnapshotController = ({
  handleCapture,
  handleSave,
}: SnapshotControllerProps) => {
  const [breakpoint, setBreakpoint] = useState<[number, number]>([0, 0]);

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
        onClick={() => handleCapture(breakpoint)}
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
      <button className={`${style.button} ${style.hover}`} onClick={handleSave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M20 7.423v10.962q0 .69-.462 1.153T18.384 20H5.616q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h10.961zm-1 .427L16.15 5H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.443zm-7 8.688q.827 0 1.414-.586T14 14.538t-.587-1.413T12 12.539t-1.413.586T10 14.538t.587 1.414t1.413.586M6.77 9.77h7.422v-3H6.77zM5 7.85V19V5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SnapshotController;
