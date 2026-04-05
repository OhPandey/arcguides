// I took this from an old project, pretty handy I guess
export function formatTextComplex(text: string) {
    const elements: React.ReactNode[] = []
    const lines = text.split("\n")

    const formatInline = (line: string, lineIndex: number) => {
        const inline: React.ReactNode[] = []
        const parts = line.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g)

        parts.forEach((part, i) => {

            if (/^\*\*.*\*\*$/.test(part)) {
                inline.push(
                    <strong key={`${lineIndex}-${i}`}>
                        {part.slice(2, -2)}
                    </strong>
                )
                return
            }

            if (/^\*.*\*$/.test(part)) {
                inline.push(
                    <em key={`${lineIndex}-${i}`}>
                        {part.slice(1, -1)}
                    </em>
                )
                return
            }

            const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)

            if (linkMatch) {
                inline.push(
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

            inline.push(part)
        })

        return inline
    }

    let i = 0

    while (i < lines.length) {
        const line = lines[i]

        if (/^[-*]\s+/.test(line)) {
            const items: React.ReactNode[] = []

            while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
                const content = lines[i].replace(/^[-*]\s+/, "")
                items.push(
                    <li key={`ul-${i}`}>
                        {formatInline(content, i)}
                    </li>
                )
                i++
            }

            elements.push(<ul key={`ul-${i}`} className="list-disc ml-6">{items}</ul>)
            continue
        }

        if (/^\d+\.\s+/.test(line)) {
            const items: React.ReactNode[] = []

            while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
                const content = lines[i].replace(/^\d+\.\s+/, "")
                items.push(
                    <li key={`ol-${i}`}>
                        {formatInline(content, i)}
                    </li>
                )
                i++
            }

            elements.push(<ol key={`ol-${i}`} className="list-decimal ml-6">{items}</ol>)
            continue
        }

        elements.push(...formatInline(line, i))

        if (i < lines.length - 1) {
            elements.push(<br key={`br-${i}`} />)
        }

        i++
    }

    return elements
}


// I took this from an old project, pretty handy I guess
export function formatTextSimple(text: string) {
    const lines = text.split("\n")
    const elements: React.ReactNode[] = []

    lines.forEach((line, index) => {
        elements.push(line)
        if (index < lines.length - 1) {
            elements.push(<br key={index} />)
        }
    })

    return elements
}