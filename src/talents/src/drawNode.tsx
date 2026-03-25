import { auras } from "../data/auras";
import { talents } from "../data/talents";
import { getCoordinates } from "../headers/position";
import { TalentNode } from "../headers/talent";
import { canIncrease, handleLeftClick, handleRightClick } from "./edit";
import { getShape } from "./shape";

type DrawNodeProps = {
    talentNode: TalentNode;
    selectedTalents: Record<number, number>;
    setSelectedTalents: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    layout: TalentNode[];
    talentPoints: number;
    allowEdit: boolean;
};

export const DrawTalent: React.FC<DrawNodeProps> = ({
    talentNode,
    selectedTalents,
    setSelectedTalents,
    layout,
    talentPoints,
    allowEdit,
}) => {
    const { x, y } = getCoordinates(talentNode.pos);

    const talent = talents[talentNode.talentId];
    const aura = auras[talent.auraId];

    const currentPoints = selectedTalents[talentNode.id] ?? 0;
    const maxPoints = talent.maxPoints ?? 1;
    const isEnhanced = talentNode.enhanced ?? false;

    const isActive = currentPoints > 0;

    const value = Math.max(1, currentPoints) * talent.modifier;

    const tooltipDescription = aura.effect.replace("{value}", `${value}`);

    const nextLevelText = currentPoints > 0 && currentPoints < maxPoints
            ? `[Next level: ${(currentPoints + 1) * talent.modifier}${aura.unit}]`
            : null;

    const showTop = y < 80;

    const talentImage = talent.image
        ? `${talent.image.replace(".png", "")}${isActive ? "_selected" : ""}.png`
        : "placeholder.png";

    const shape = getShape(talentNode);

    const backgroundColor = isActive
        ? isEnhanced
            ? "#fbbf24"
            : "#60a5fa"
        : "#001031";

    const borderColor = isActive
        ? isEnhanced
            ? "#facc15"
            : "#60a5fa"
        : "#001031";

    const cursor =
        allowEdit && canIncrease(layout, selectedTalents, talentNode)
            ? "pointer"
            : "default";

    const handleClick = allowEdit
        ? () =>
            handleLeftClick(
                talentNode,
                selectedTalents,
                setSelectedTalents,
                layout,
                talentPoints
            )
        : undefined;

    const handleContextMenu = allowEdit
        ? (e: React.MouseEvent) =>
            handleRightClick(e, talentNode, selectedTalents, setSelectedTalents, layout)
        : undefined;

    return (
        <div
            className="absolute flex flex-col items-center"
            style={{ left: x, top: y }}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
        >
            <div className="relative group">
                {/* NODE */}
                <div
                    className={`w-10 h-10 ${shape} border flex items-center justify-center ${isActive ? "animate-pulsate" : ""
                        }`}
                    style={{
                        backgroundColor,
                        borderColor,
                        cursor,
                    }}
                >
                    <img
                        src={`/arcguides/images/icons/${talentImage}`}
                        alt={talent.title}
                        className="w-6 h-6"
                    />
                </div>

                {/* TOOLTIP */}
                {tooltipDescription && (
                    <div
                        className={`absolute hidden group-hover:flex flex-col items-center z-50 ${showTop ? "top-full mt-2" : "bottom-full mb-2"
                            }`}
                    >
                        {/* Arrow (top) */}
                        {showTop && (
                            <div className="w-3 h-3 bg-gray-900 rotate-45 -mb-1" />
                        )}

                        {/* Content */}
                        <div className="bg-gray-900 text-white text-xs rounded-lg shadow-lg px-3 py-2 text-center w-60">
                            <strong>
                                {talent.title} ({currentPoints}/{maxPoints})
                            </strong>

                            <p className="mb-2">
                                {tooltipDescription}
                                {nextLevelText && (
                                    <>
                                        <br />
                                        {nextLevelText}
                                    </>
                                )}
                            </p>

                            {/* DEBUG */}
                            <p>Aura name: "{aura.name}"</p>
                            <p>Aura id: {aura.id}</p>
                        </div>

                        {/* Arrow (bottom) */}
                        {!showTop && (
                            <div className="w-3 h-3 bg-gray-900 rotate-45 -mt-1.5" />
                        )}
                    </div>
                )}
            </div>

            {/* POINT COUNTER */}
            <span className="text-xs text-white mt-1">
                {currentPoints}/{maxPoints}
            </span>
        </div>
    );
};