export type Theme = "dark" | "light";

// Ny nøgle, så alle starter i det nye mørke tema efter skiftet til Atelier Scandinavia
export const THEME_STORAGE_KEY = "atelier-scandinavia-theme";

/** Sætter det gemte tema før første visning, så siden ikke blinker (bruges i app/layout.tsx) */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
