import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence
} from "framer-motion";
import React, { useRef, useState } from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
};

export type DockProps = {
  items: DockItemData[];
};

const SPRING = {
  mass: 0.04,
  stiffness: 400,
  damping: 25
};

const BASE_SIZE = 54;
const MAGNIFICATION = 88;
const DISTANCE = 120;

function DockItem({
  item,
  mouseX
}: {
  item: DockItemData;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [showLabel, setShowLabel] = useState(false);

  const distanceFromMouse = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return DISTANCE;
    return Math.abs(val - (rect.left + rect.width / 2));
  });

  const scaleTransform = useTransform(
    distanceFromMouse,
    [0, DISTANCE],
    [MAGNIFICATION / BASE_SIZE, 1],
    { clamp: true }
  );

  const scale = useSpring(scaleTransform, SPRING);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onHoverStart={() => setShowLabel(true)}
      onHoverEnd={() => setShowLabel(false)}
      onClick={item.onClick}
      className="
        relative w-[54px] h-[54px]
        flex items-center justify-center
        cursor-pointer
        transform-gpu will-change-transform
      "
    >
      {typeof item.icon === "string" ? (
        <img
          src={item.icon}
          alt=""
          className="w-full h-full object-contain drop-shadow-[0_5px_8px_rgba(0,0,0,0.3)]"
        />
      ) : (
        item.icon
      )}

      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -12 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.15 }}
            className="
              absolute -top-8 left-1/2 -translate-x-1/2
              whitespace-nowrap
              px-3 py-1 text-xs text-white
              rounded-md
              bg-black/55 backdrop-blur-md
            "
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Dock({ items }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="
          flex items-end gap-3
          px-4 pb-2.5 pt-2
          rounded-[20px]
          backdrop-blur-2xl
          border border-white/20
          bg-linear-to-b from-[#2a63ff]/75 to-[#193fc4]/80
          shadow-[0_20px_34px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.35)]
        "
      >
        {items.map((item, index) => (
          <DockItem key={index} item={item} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
}
