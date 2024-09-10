import { useState } from "react";

const Draggable = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);

  const onMouseDown = (e) => {
    const rect = e.target.getBoundingClientRect();
    setRel({
      x: e.pageX - rect.left,
      y: e.pageY - rect.top,
    });
    setDragging(true);
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      style={{
        width: "max-content",
        height: "max-content",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: dragging ? "grabbing" : "grab",
        pointerEvents: "auto",
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={() => setDragging(false)}
    >
      {children}
    </div>
  );
};

export default Draggable;
