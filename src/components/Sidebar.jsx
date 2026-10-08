import {
  Hand,
  MousePointer2,
  Move,
  Pointer,
  SquareDashedMousePointer,
  TextCursor,
} from "lucide-react";
import React from "react";

function Sidebar({ selectedTool, setSelectedTool }) {
  return (
    <div className="w-104 h-full bg-zinc-200 border-r border-slate-500/35 shadow-xl p-4">
      <p className="text-2xl mb-4">Logo</p>
      <p>
        Current tool:{" "}
        {selectedTool.slice(0, 1).toUpperCase() +
          selectedTool.slice(1).replace("-", " ")}
      </p>
      <div className="flex gap-4 bg-zinc-100 h-16 items-center justify-center">
        <MousePointer2
          className="cursor-pointer"
          onClick={() => setSelectedTool("select")}
        />
        <Move
          className="cursor-pointer"
          onClick={() => setSelectedTool("move")}
        />
        <SquareDashedMousePointer
          className="cursor-pointer"
          onClick={() => setSelectedTool("select-area")}
        />
      </div>
    </div>
  );
}

export default Sidebar;
