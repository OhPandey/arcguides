"use client";

import { useRef, useState, useMemo } from "react";
import { rarityColor } from "../src/rarity";
import { heroMapping } from "../data/heroes/heroMapping";
import { exportImage, exportURL } from "../src/export";
import { validateTalents } from "../src/validation";
import { getHeroStar, MAXPOINTS } from "../src/hero";
import { DrawConnections } from "../src/drawConnections";
import { DrawTalent } from "../src/drawNode";
import { recommended } from "../data/builds/recommended";
import { categoryIcons } from "../data/category";

type Props =
    | {
        heroName: string;
        allowEdit?: boolean;
        isRecommended: true;
        selectedTalents?: never;
    }
    | {
        heroName: string;
        allowEdit?: boolean;
        isRecommended?: false;
        selectedTalents: Record<string, number>;
    };

export default function TalentRenderer({ heroName, selectedTalents: initialTalents, allowEdit = false, isRecommended, }: Props) {
    
    const hero = heroMapping[heroName];

    if (!hero) {
        console.error(`TalentRenderer - "${heroName}" does not exist.`);
        return "Error: Talent Tree could not be rendered.";
    }

    const containerRef = useRef<HTMLDivElement>(null);

    const [selectedTalents, setSelectedTalents] = useState(() => {
        if (isRecommended) return recommended[heroName];
        return validateTalents(initialTalents, hero.layout ?? []);
    });

    const talentPoints = useMemo(
        () => Object.values(selectedTalents).reduce((sum, v) => sum + v, 0),
        [selectedTalents]
    );

    return (
        <div className="relative w-full">
            {/* ACTION BUTTONS */}
            <div className="relative float-right mr-3 flex gap-2">
                <button className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur">
                    ✏️
                </button>

                <button
                    onClick={exportImage(containerRef, hero.title)}
                    className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur"
                >
                    🖨️
                </button>

                <button
                    onClick={exportURL(selectedTalents, heroName)}
                    className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur"
                >
                    🔗
                </button>
            </div>

            {/* MAIN CONTAINER */}
            <div
                ref={containerRef}
                className="w-full overflow-x-auto border rounded-xl relative bg-center bg-no-repeat bg-cover mb-5"
                style={{
                    backgroundImage: `url('${hero.backgroundImage}')`,
                }}
            >
                <div className="relative w-225 h-160">
                    {/* HERO HEADER */}
                    <div className="absolute top-3 left-4 flex flex-col gap-2">
                        <div className="flex items-start gap-3">
                            <img
                                src={`/arcguides/${hero.iconImage}`}
                                alt={hero.title}
                                className="w-11 h-12 rounded-lg object-cover"
                            />

                            <div className="text-lg font-bold leading-tight">
                                <p className={rarityColor[hero.rarity]}>
                                    {hero.title}
                                </p>
                                <div className="flex flex-wrap gap-2 items-center font-normal text-white/80">
                                    {hero.categories.map((cat, i) => (
                                        <span key={cat} className="flex items-center gap-1">
                                            {categoryIcons[cat] && (
                                                <img
                                                    src={`/arcguides/${categoryIcons[cat]}`}
                                                    alt={cat}
                                                    className="w-4 h-4 object-contain mb-0.5"
                                                />
                                            )}
                                            <span>{cat}</span>
                                            {i < hero.categories.length - 1 && <span>/</span>}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-lg font-semibold">
                            Talent Points: {talentPoints}/{MAXPOINTS}
                            <br />
                            {getHeroStar(talentPoints)}
                        </p>
                    </div>

                    {/* CONNECTIONS */}
                    <DrawConnections
                        layout={hero.layout}
                        selectedTalents={selectedTalents}
                    />

                    {/* TALENT NODES */}
                    {hero.layout.map((talentNode) => (
                        <DrawTalent
                            key={talentNode.id}
                            talentNode={talentNode}
                            selectedTalents={selectedTalents}
                            setSelectedTalents={setSelectedTalents}
                            layout={hero.layout}
                            talentPoints={talentPoints}
                            allowEdit={allowEdit}
                        />
                    ))}
                </div>

                {/* CONTEXT FOOTER */}
                <div
                    className="absolute bottom-2 text-center pointer-events-none select-none"
                    style={{ width: 3100 }}
                >
                    <span className="bg-black/40 rounded-md px-2 py-1 text-[12px] text-white/60 inline-block">
                        <strong>Created by [Website - Name Subject to Change] <br></br>Avatar: The Last Airbender & The Legend of Korra © Nickelodeon // Avatar: Realms Collide © ANGames.</strong><br></br> This talent builder is an independent fan-made project and is not affiliated with, endorsed by, or sponsored by Nickelodeon or ANGames.<br></br>Avatar: Realms Collide is available on the App Store and Google Play.
                    </span>
                </div>
            </div>
        </div>
    );
}