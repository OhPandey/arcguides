import { talents } from "../data/talents"
import { TalentNode } from "../headers/talent"
import { MAXPOINTS } from "./hero"

export function canIncrease(layout: TalentNode[], selectedTalentNodes: Record<number, number>, talentNode: TalentNode): boolean {
    const currentTalentNode = talentNode

    const andConnection = currentTalentNode.requires?.every(requiredTalentNodeId =>
        {
            const requiredTalentNode = layout.find(talentNode => talentNode.id === requiredTalentNodeId)

            if (!requiredTalentNode)
                return false

            const talent = talents[requiredTalentNode.talentId]

            return (selectedTalentNodes[requiredTalentNode.id] || 0) === (talent.maxPoints || 1)
        }
    ) ?? true

    const orConnection = currentTalentNode.requiresAny?.some(requiredTalentNodeId => 
        {
        const requiredTalentNode = layout.find(talentNode => talentNode.id === requiredTalentNodeId)

        if (!requiredTalentNode)
            return false

        const talent = talents[requiredTalentNode.talentId]

        return (selectedTalentNodes[requiredTalentNode.id] || 0) === (talent.maxPoints || 1)
        }
    ) ?? true

    return andConnection && orConnection
}

export function canDecrease(layout: TalentNode[], selectedTalentNodes: Record<number, number>, talentNode: TalentNode): boolean {
    const currentTalentNode = talentNode

    return layout.every(talentNode => {
        const isActive = (selectedTalentNodes[talentNode.id] || 0) > 0
        if (!isActive) 
            return true

        if (talentNode.requires?.includes(currentTalentNode.id))
            return false

        if (talentNode.requiresAny?.includes(currentTalentNode.id)) {
            return talentNode.requiresAny.some(requiredTalentNodeId => {
                if (requiredTalentNodeId === currentTalentNode.id) 
                    return false

                const requiredNode = layout.find(n => n.id === requiredTalentNodeId)
                if (!requiredNode) 
                    return false

                const talent = talents[requiredNode.talentId]
                return (selectedTalentNodes[requiredNode.id] || 0) === (talent.maxPoints || 1)
            })
        }

        return true
    })
}
    

export function handleLeftClick(talentNode: TalentNode, selectedTalentNodes: Record<number, number>, setSelectedTalentNodes: React.Dispatch<React.SetStateAction<Record<number, number>>>, layout: TalentNode[], talentPoints: number) {
    const currentPoints = selectedTalentNodes[talentNode.id] || 0
    const maxPoints = talents[talentNode.talentId].maxPoints || 1

    if (currentPoints >= maxPoints || talentPoints >= MAXPOINTS|| !canIncrease(layout, selectedTalentNodes, talentNode)) 
        return

    setSelectedTalentNodes({ ...selectedTalentNodes, [talentNode.id]: currentPoints + 1 })
}

export function handleRightClick(e: React.MouseEvent, talentNode: TalentNode, selectedTalentNodes: Record<number, number>, setSelectedTalentNodes: React.Dispatch<React.SetStateAction<Record<number, number>>>, layout: TalentNode[]) {
    e.preventDefault()

    const currentPoints = selectedTalentNodes[talentNode.id]  || 0
    if (currentPoints <= 0 || !canDecrease(layout, selectedTalentNodes, talentNode)) 
        return

    setSelectedTalentNodes({ ...selectedTalentNodes, [talentNode.id]: currentPoints - 1 })
}