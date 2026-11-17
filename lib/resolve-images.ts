import fs from "node:fs";
import path from "node:path";
import { IMAGE_EXTENSIONS, IMAGE_SLOTS, type ImageSlot, type ResolvedImages } from "./images";

/**
 * Finder hvilke billedpladser der har et billede i public/billeder/.
 * Kører på serveren ved build, så siden skal være statisk (se app/page.tsx).
 */
export function resolveImages(): ResolvedImages {
  const dir = path.join(process.cwd(), "public", "billeder");
  const entries = Object.entries(IMAGE_SLOTS).map(([slot, { file }]) => {
    const ext = IMAGE_EXTENSIONS.find((e) => fs.existsSync(path.join(dir, `${file}.${e}`)));
    return [slot, ext ? `/billeder/${file}.${ext}` : null];
  });
  return Object.fromEntries(entries) as Record<ImageSlot, string | null>;
}
