"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { rarityColor } from "../src/rarity";
import { heroMapping } from "../data/heroes/heroMapping";
import { exportImage, exportURL } from "../src/export";
import { validateTalents } from "../src/validation";
import { getHeroStar, MAXPOINTS } from "../src/hero";
import { DrawConnections } from "../src/drawConnections";
import { DrawNode } from "../src/drawNode";
import { recommended } from "../data/builds/recommended";
import { categoryIcons } from "../data/category";
import { calculateAuraStats } from "../src/calculateStats";
import { WriteStats } from "../src/writeStats";
import { footer } from "../src/footer";
import { encodeTalentData, decodeTalentData } from "../src/encoding";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { editMode } from "../src/edit";

type Props =
     {
        heroName: string;
        allowEdit: boolean;
        isRecommended: boolean;
        initSelectedTalentNodes: Record<number, number>;
    }

export default function TalentRenderer({ heroName, allowEdit, isRecommended, initSelectedTalentNodes }: Props) {
    const hero = heroMapping[heroName];

    if (!hero) {
        console.error(`TalentRenderer - "${heroName}" does not exist.`);
        return "Error: Talent Tree could not be rendered.";
    }
    
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const encodedData = allowEdit ? searchParams.get("data") : null;

    const selectedInitialState = () => {
        if (allowEdit) {
            const decoded = decodeTalentData(encodedData, hero.layout);
            return validateTalents(decoded, hero.layout ?? []);
        }

        if (isRecommended)
            return recommended[heroName];

        return validateTalents(initSelectedTalentNodes ?? {}, hero.layout ?? []);
    };

    const [selectedTalentNodes, setselectedTalentNodes] = useState(selectedInitialState);

    useEffect(() => {
        if (!allowEdit) 
            return;

        const encoded = encodeTalentData(selectedTalentNodes, hero.layout);
        const params = new URLSearchParams();

        if (encoded) 
            params.set("data", encoded);

        const newUrl = params.toString() ? `${pathname}?${params}` : pathname;

        if (window.location.href !== window.location.origin + newUrl)
            router.replace(newUrl, { scroll: false });
    }, [selectedTalentNodes, pathname, router, allowEdit, hero.layout]);


    const containerRef = useRef<HTMLDivElement>(null);

    const [showStats, setShowStats] = useState(false);

    const talentPoints = useMemo(
        () => Object.values(selectedTalentNodes).reduce((sum, v) => sum + v, 0),
        [selectedTalentNodes]
    );

    const stats = calculateAuraStats({
        selectedTalentNodes: selectedTalentNodes,
        layout: hero.layout,
    });


    return (
        <div className="relative w-full flex flex-col lg:flex-row items-stretch">
            <div
                className={`
                    w-full
                    ${showStats ? "lg:w-[65%]" : "lg:w-full"}
                    transition-all duration-300
                `}
            >
                {/* ACTION BUTTONS */}
                <div className="relative float-right mr-3 flex gap-2">
                    {
                        !allowEdit && (
                        <button
                            onClick={() => editMode(heroName, selectedTalentNodes)}
                            className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur">
                            ✏️
                        </button>
                        )
                    }

                    {
                        allowEdit && (
                        <button
                            onClick={() => setselectedTalentNodes({})}
                            className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur">
                            ↩
                        </button>
                        )
                    }

                    <button
                        onClick={() => exportImage(containerRef, hero.title)}
                        className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur"
                    >
                        🖨️
                    </button>

                    <button
                        onClick={() => exportURL()}
                        className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur"
                    >
                        🔗
                    </button>

                    <button
                        onClick={() => setShowStats((prev) => !prev)}
                        className="bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur"
                    >
                        📊
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
                            selectedTalentNodes={selectedTalentNodes}
                        />

                        {/* TALENT NODES */}
                        {hero.layout.map((talentNode) => (
                            <DrawNode
                                key={talentNode.id}
                                talentNode={talentNode}
                                selectedTalentNodes={selectedTalentNodes}
                                setSelectedTalentNodes={setselectedTalentNodes}
                                layout={hero.layout}
                                talentPoints={talentPoints}
                                allowEdit={allowEdit}
                            />
                        ))}
                    </div>

                    {/* FOOTER */}
                    <div
                        className="absolute bottom-2 text-center pointer-events-none select-none"
                        style={{ width: 3100 }}
                    >
                        <span className="bg-black/40 rounded-md px-2 py-1 text-[12px] text-white/60 inline-block" dangerouslySetInnerHTML={{ __html: footer }}>
                        </span>
                    </div>
                </div>
            </div>

            <div
                className={`
                    transition-all duration-300 overflow-auto mt-5
                    ${showStats ? "w-full lg:w-[35%] opacity-100" : "w-0 lg:w-0 opacity-0"}
                `}
            >
                <div className="rounded-xl p-4 text-white shadow-lg backdrop-blur h-100 mt-2 lg:mt-5 flex flex-col">

                    <h2 className="text-lg font-bold">Talent Stats</h2>

                    <div className="flex flex-col gap-3 text-sm">
                        <WriteStats stats={stats} />
                    </div>
                </div>
            </div>
        </div>
    );
}