"use client";

import { useEffect, useState } from "react";
import { parse, formatHex, converter } from "culori";

const oklchToHex = (oklchValue: string): string => {
  const parsed = parse(oklchValue);
  return parsed ? formatHex(parsed) : "#ffffff";
};

const hexToOklch = (hex: string): string => {
  const toOklch = converter("oklch");
  const parsed = parse(hex);
  const oklch = parsed ? toOklch(parsed) : null;
  if (!oklch) return "";
  return `oklch(${(oklch.l * 100).toFixed(2)}% ${oklch.c.toFixed(3)} ${oklch.h?.toFixed(2)})`;
};

const colorVars = [
  { name: "Primary", var: "--color-primary" },
  { name: "Secondary", var: "--color-secondary" },
  { name: "Background", var: "--color-background" },
  { name: "Foreground", var: "--color-foreground" },
  { name: "Muted", var: "--color-muted" },
  { name: "Accent", var: "--color-accent" },
];

const fontVars = [
  { name: "Sans", var: "--font-sans" },
  { name: "Mono", var: "--font-mono" },
];

export default function StylingPage() {
  const [colors, setColors] = useState<Record<string, string>>({});
  const [fonts, setFonts] = useState<Record<string, string>>({});

  useEffect(() => {
    const computed = getComputedStyle(document.documentElement);
    const initialColors: Record<string, string> = {};
    const initialFonts: Record<string, string> = {};

    colorVars.forEach(({ var: v }) => {
      initialColors[v] = computed.getPropertyValue(v).trim();
    });

    fontVars.forEach(({ var: v }) => {
      initialFonts[v] = computed.getPropertyValue(v).trim();
    });

    setColors(initialColors);
    setFonts(initialFonts);

    // TODO: In future, check localStorage or API here for persisted values
  }, []);

  const setColorVar = (key: string, value: string) => {
    document.documentElement.style.setProperty(key, value);
    setColors((prev) => ({ ...prev, [key]: value }));

    // TODO: Save to localStorage or backend here
  };

  const setFontVar = (key: string, value: string) => {
    document.documentElement.style.setProperty(key, value);
    setFonts((prev) => ({ ...prev, [key]: value }));

    // TODO: Save to localStorage or backend here
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Styling Customization</h1>

      {/* Colors */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorVars.map(({ name, var: v }) => {
            const currentOklch = colors[v];
            const hex = oklchToHex(currentOklch || "");

            return (
              <div key={v} className="flex flex-col space-y-2">
                <label className="text-sm font-medium">{name}</label>
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => setColorVar(v, hexToOklch(e.target.value))}
                  className="w-full h-10 rounded border"
                />
                <input
                  type="text"
                  value={currentOklch || ""}
                  onChange={(e) => setColorVar(v, e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Fonts */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Fonts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {fontVars.map(({ name, var: v }) => (
            <div key={v} className="flex flex-col space-y-2">
              <label className="text-sm font-medium">{name} Font</label>
              <input
                type="text"
                value={fonts[v] || ""}
                onChange={(e) => setFontVar(v, e.target.value)}
                className="text-sm border rounded px-2 py-1"
              />
              <div className="text-sm italic text-gray-600">
                Preview: <span style={{ fontFamily: fonts[v] }}>Hello World</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
