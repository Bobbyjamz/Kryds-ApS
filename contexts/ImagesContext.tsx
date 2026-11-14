"use client";

import { createContext, useContext } from "react";
import type { ResolvedImages } from "@/lib/images";

const ImagesContext = createContext<Partial<ResolvedImages>>({});

export function ImagesProvider({ images, children }: { images: ResolvedImages; children: React.ReactNode }) {
  return <ImagesContext.Provider value={images}>{children}</ImagesContext.Provider>;
}

export const useImages = () => useContext(ImagesContext);
