import { Rnd } from "react-rnd";

export default function Window({ children, title }: any) {
  return (
    <Rnd
      default={{
        x: 200,
        y: 100,
        width: 500,
        height: 300,
      }}
      bounds="window"
    >
      <div className="bg-white rounded-lg shadow-lg h-full">
        <div className="bg-gray-200 p-2 font-semibold">
          {title}
        </div>

        <div className="p-4">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
