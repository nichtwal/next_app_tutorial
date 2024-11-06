import { $Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import React from 'react'
interface ReturnProps {
    ingredients : Ingredient[]
}
export const useFilterIngredients  = ():ReturnProps => {
    const [ingredients, setIngreditnts] = React.useState<Ingredient[]>([])

    React.useEffect(() => {
        async function getIngredients() {
            try {
                const ingredients = await $Api.ingrtedients.getAll()
                setIngreditnts(ingredients)
            } catch (error) {
                console.warn(error)
            }   
        }
        getIngredients()
    }, [])
    return {ingredients}
}