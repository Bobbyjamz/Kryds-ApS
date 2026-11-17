import Image from "next/image";
import { GALLERY } from "@/lib/gallery";
import { site } from "@/lib/site";

/** Alle galleriets billeder i et gitter i kolonner (bevarer hvert billedes format). */
export default function GalleryGrid() {
  return (
    <div className="px-[52px] max-[900px]:px-5">
      <ul className="container-x columns-4 gap-4 max-[1100px]:columns-3 max-[760px]:columns-2 max-[760px]:gap-3 list-none p-0 m-0">
        {GALLERY.map((g, i) => (
          <li key={g.src} className="mb-4 max-[760px]:mb-3 break-inside-avoid overflow-hidden">
            <Image
              src={g.src}
              width={g.width}
              height={g.height}
              alt={`${site.name} — foto ${i + 1}`}
              sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
              className="w-full h-auto block transition-transform duration-700 hover:scale-[1.03]"
              loading={i < 8 ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
