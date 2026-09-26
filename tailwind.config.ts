import type { Config } from "tailwindcss";
import sharedPreset from "./shared/tailwind.preset";

export default {
  presets: [sharedPreset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./shared/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
