import wallpaper from "/wallpaper/wallpaper.jpg";

export default function Desktop() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Icons and windows go here */}
    </div>
  );
}
