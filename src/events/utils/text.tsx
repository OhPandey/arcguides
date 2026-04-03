// I took this from an old project, pretty handy I guess
export function formatText(text: string) {

    const elements: React.ReactNode[] = []

    const lines = text.split("\n")

    lines.forEach((line, lineIndex) => {

        const parts = line.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g)

        parts.forEach((part, i) => {

            if (/^\*\*.*\*\*$/.test(part)) {
                elements.push(
                    <strong key={`${lineIndex}-${i}`}>
                        {part.slice(2, -2)}
                    </strong>
                )
                return
            }

            if (/^\*.*\*$/.test(part)) {
                elements.push(
                    <em key={`${lineIndex}-${i}`}>
                        {part.slice(1, -1)}
                    </em>
                )
                return
            }

            const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)

            if (linkMatch) {
                elements.push(
                    <a
                        key={`${lineIndex}-${i}`}
                        href={linkMatch[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                    >
                        {linkMatch[1]}
                    </a>
                )
                return
            }

            elements.push(part)
        })

        if (lineIndex < lines.length - 1)
            elements.push(<br key={`br-${lineIndex}`} />)
    })

    return elements
}