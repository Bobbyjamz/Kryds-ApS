export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "atelier-theme";

/** Sætter det gemte tema før første visning, så siden ikke blinker (bruges i app/layout.tsx) */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
