export type Resource = {
    name: string,
    gemValue: number
}

export type Bundle = {
    name: string,
    priceUSD: 0.99 | 1.99 | 4.99 | 9.99 | 19.99 | 29.99 | 49.99 | 99.99,
    image?: string
    resources: {
        resource: Resource
        amount: number
    }[]
}