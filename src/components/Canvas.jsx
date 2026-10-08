import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  Children,
} from "react";
import { Layer, Rect, Stage, Text } from "react-konva";

function useContainerSize() {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
}

function Canvas({ selectedTool }) {
  const [containerRef, { width, height }] = useContainerSize();
  const [cursor, setCursor] = useState("pointer");

  const [scale, setScale] = useState(8);
  const CARD_MM = { width: 54, height: 85.6 };

  function handleScroll(e) {
    const delta = e.deltaY;
    setScale((prev) => Math.min(Math.max(prev + (delta < 0 ? 1 : -1), 1), 50));
  }

  useEffect(() => {
    switch (selectedTool) {
      case "select":
        setCursor("cursor-default");
        break;
      case "move":
        setCursor("cursor-move");
    }
  }, [selectedTool]);

  return (
    <div
      ref={containerRef}
      className={`relative flex-1 min-w-0 min-h-0 overflow-hidden bg-neutral-100 ${cursor}`}
      onWheel={(e) => handleScroll(e)}
    >
      {width > 0 && height > 0 && (
        <Stage width={width} height={height}>
          <Layer scaleX={scale} scaleY={scale}>
            <Rect
              height={CARD_MM.height}
              width={CARD_MM.width}
              fill={"white"}
              x={width / scale / 2 - CARD_MM.width / 2}
              y={height / scale / 2 - CARD_MM.height / 2}
              cornerRadius={3}
              shadowColor="gray"
              shadowBlur={2}
              shadowOpacity={0.5}
              shadowOffset={{ x: 1, y: 1 }}
            />
          </Layer>
        </Stage>
      )}
    </div>
  );
}

export default Canvas;
