"use client";

import { useRouter } from "next/navigation";
import { heroMapping } from "@/src/talents/data/heroes/heroMapping";
import { useMemo } from "react";

export default function HeroSelector({ currentHero }: { currentHero: string }) {
  const router = useRouter();

  const heroes = useMemo(() => {
    return Object.entries(heroMapping)
      .sort(([, a], [, b]) => a.title.localeCompare(b.title));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newHero = e.target.value;
    const search = window.location.search;

    router.push(`/talents/${newHero}${search}`);
  };

  return (
    <div className="mb-6 flex items-center gap-3">
      <label className="text-white/70 text-sm font-medium">
        Select Hero:
      </label>

      <div className="relative">
        <select
          value={currentHero}
          onChange={handleChange}
          className="
            appearance-none
            bg-black/60 backdrop-blur-md
            text-white
            px-4 py-2 pr-10
            rounded-xl
            border border-white/60
            shadow-lg
            hover:bg-black/70
            focus:outline-none focus:ring-2 focus:ring-white/20
            transition-all
            cursor-pointer
          "
        >
          {heroes.map(([key, hero]) => (
            <option key={key} value={key}>
              {hero.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/50">
          ▼
        </div>
      </div>
    </div>
  );
}