import * as Resources from "../../../shared/resources"
import { Event } from "../../type/event"

export const unalaqPass: Omit<Event, "type"> = {
    id: "unalaq_pass",
    name: "Unalaq Pass",
    description: "Collect Pass Points to earn Unalaq.",
    duration: 5,
    repeat: 0,
    tasks: [
        {
            title: "Day 1",
            headers: ["Task", "Reward"],
            rows: [
                ["Defeat 20 Shattered Skulls", "30x Unalaq Pass Points"],
                ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
                ["Donate 30 times to alliance research", "20x Unalaq Pass Points"],
                ["Use 10 scrolls", "30x Unalaq Pass Points"],
                ["Complete 10 Expedition missions", "30x Unalaq Pass Points"]
            ]
        },
        {
            title: "Day 2",
            headers: ["Task", "Reward"],
            rows: [
                ["Gather 500,000 Resources from the Field", "20x Unalaq Pass Points"],
                ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
                ["Destroy 5 Shattered Skulls' Fortresses", "30x Unalaq Pass Points"],
                ["Participate in 5 arena fights", "30x Unalaq Pass Points"],
                ["Use 1,000 AP", "30x Unalaq Pass Points"]
            ]
        },
        {
            title: "Day 3",
            headers: ["Task", "Reward"],
            rows: [
                ["Defeat 20 Shattered Skulls", "30x Unalaq Pass Points"],
                ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
                ["Donate 30 times to alliance research", "20x Unalaq Pass Points"],
                ["Send 4 airships", "30x Unalaq Pass Points"],
                ["Purchase 20 items at the Trading Post", "30x Unalaq Pass Points"]
            ]
        },
        {
            title: "Day 4",
            headers: ["Task", "Reward"],
            rows: [
                ["Gather 500,000 Resources in the City", "20x Unalaq Pass Points"],
                ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
                ["Destroy 5 Shattered Skulls' Fortresses", "30x Unalaq Pass Points"],
                ["Participate in 5 arena fights", "30x Unalaq Pass Points"],
                ["Use 1,000min of Speedup", "30x Unalaq Pass Points"],
            ]
        },
        {
            title: "Day 5",
            headers: ["Task", "Reward"],
            rows: [
                ["Defeat 20 Shattered Skulls", "30x Unalaq Pass Points"],
                ["Recruit 8,000 Tier 3 or Higher Benders", "40x Unalaq Pass Points"],
                ["Donate 30 times to alliance research", "20x Unalaq Pass Points"],
                ["Clear Avatar Trail 1 time", "30x Unalaq Pass Points"],
                ["Use 500 Gems", "50x Unalaq Pass Points"],
            ]
        },
    ],
    rewards: [
        {
            title: "Unalaq Pass",
            headers: ["Level", "Points Required", "Total Points"],
            rows: [
                ["1", "5 Unalaq Pass Points", "5 Unalaq Pass Points"],
                ["2", "5 Unalaq Pass Points", "10 Unalaq Pass Points"],
                ["3", "5 Unalaq Pass Points", "15 Unalaq Pass Points"],
                ["4", "5 Unalaq Pass Points", "20 Unalaq Pass Points"],
                ["5", "10 Unalaq Pass Points", "30 Unalaq Pass Points"],
                ["6", "10 Unalaq Pass Points", "40 Unalaq Pass Points"],
                ["7", "10 Unalaq Pass Points", "50 Unalaq Pass Points"],
                ["8", "10 Unalaq Pass Points", "60 Unalaq Pass Points"],
                ["9", "15 Unalaq Pass Points", "75 Unalaq Pass Points"],
                ["10", "15 Unalaq Pass Points", "90 Unalaq Pass Points"],
                ["11", "15 Unalaq Pass Points", "105 Unalaq Pass Points"],
                ["12", "15 Unalaq Pass Points", "120 Unalaq Pass Points"],
                ["13", "20 Unalaq Pass Points", "140 Unalaq Pass Points"],
                ["14", "20 Unalaq Pass Points", "160 Unalaq Pass Points"],
                ["15", "20 Unalaq Pass Points", "180 Unalaq Pass Points"],
                ["16", "20 Unalaq Pass Points", "200 Unalaq Pass Points"],
                ["17", "25 Unalaq Pass Points", "225 Unalaq Pass Points"],
                ["18", "25 Unalaq Pass Points", "250 Unalaq Pass Points"],
                ["19", "25 Unalaq Pass Points", "275 Unalaq Pass Points"],
                ["20", "25 Unalaq Pass Points", "300 Unalaq Pass Points"]
            ]
        }
    ],
    details: [
        { type: "p", content: "Clear the missions assigned to each day and earn Pass Points to use in the Unalaq Pass!", space: true },
        {
            type: "ol", items: [
                "The event runs for a total of 5 days.",
                "Missions are limited each day.",
                "Only missions unlocked on the current day can be completed.",
                "Missions from previous days cannot be completed.",
                "Pass Points earned from clearing missions can be used in [Unalaq Pass]"
            ], space: true
        },
        { type: "quotedate", author: "ANGames", date: "2026-04-11" }
    ],
    informations: [
        "Unlike most events, tasks must be completed on the same day they become available."
    ]
}