type PhotoItem = {
  id: string;
  src: string;
  title: string;
  date: string;
};

const temporaryPhotos: PhotoItem[] = [
  { id: "p1", src: "/photos/temp-01.svg", title: "Sunset Walk", date: "Today" },
  { id: "p2", src: "/photos/temp-02.svg", title: "City Lights", date: "Today" },
  { id: "p3", src: "/photos/temp-03.svg", title: "Morning Hills", date: "Yesterday" },
  { id: "p4", src: "/photos/temp-04.svg", title: "Blue Lake", date: "Yesterday" },
  { id: "p5", src: "/photos/temp-05.svg", title: "Forest Trail", date: "Last Week" },
  { id: "p6", src: "/photos/temp-06.svg", title: "Golden Hour", date: "Last Week" },
  { id: "p7", src: "/photos/temp-07.svg", title: "Cloud Line", date: "Last Week" },
  { id: "p8", src: "/photos/temp-08.svg", title: "Night Frame", date: "Last Week" },
];

export default function PhotosApp() {
  return (
    <div className="h-full overflow-hidden rounded-sm bg-zinc-900/72">
      <div className="flex items-center justify-between border-b border-zinc-700/80 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
          <span className="rounded-full bg-zinc-700/70 px-2 py-1">Library</span>
          <span className="rounded-full bg-zinc-800/80 px-2 py-1">Recents</span>
          <span className="rounded-full bg-zinc-800/80 px-2 py-1">Albums</span>
        </div>
        <span className="text-xs text-zinc-400">
          Temporary images - replace in `public/photos`
        </span>
      </div>

      <div className="h-[calc(100%-42px)] overflow-auto p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {temporaryPhotos.map((photo) => (
            <article
              key={photo.id}
              className="group overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-800/40"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-2.5 py-2">
                <p className="truncate text-sm font-medium text-zinc-100">{photo.title}</p>
                <p className="text-xs text-zinc-400">{photo.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
