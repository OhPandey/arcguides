import { toPng } from "html-to-image";

export const exportURL = (selectedTalentNodes: Record<number, number>, hero: string) => { // NYI
    return () => {
        const encoded = btoa(JSON.stringify(selectedTalentNodes));
        const url = `${window.location.origin}/talent?hero=${hero}&data=${encoded}`;

        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
    };
};

export const exportImage = (containerRef: React.RefObject<HTMLDivElement | null>, title: string) => {
    return async () => {
        if (!containerRef.current)
            return;

        const element = containerRef.current;

        const originalOverflow = element.style.overflow;
        const originalWidth = element.style.width;
        const originalBgSize = element.style.backgroundSize;
        const originalBgRepeat = element.style.backgroundRepeat;

        try {
            element.style.overflow = "visible";
            element.style.width = "3000px";

            element.style.backgroundSize = "auto";
            element.style.backgroundRepeat = "repeat";
            element.style.backgroundPosition = "left";

            const dataUrl = await toPng(element, { cacheBust: true, pixelRatio: 2 });


            const link = document.createElement("a");
            link.download = `${title}-talent-tree.png`;
            link.href = dataUrl;
            link.click();
        } finally {
            element.style.overflow = originalOverflow;
            element.style.width = originalWidth;
            element.style.backgroundSize = originalBgSize;
            element.style.backgroundRepeat = originalBgRepeat;
        }
    };
};