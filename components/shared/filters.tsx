'use client'
import React from "react";
import { Title, FilterCheckbox, RangeSlider } from "./index";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./index";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients} = useFilterIngredients()
  const item = ingredients.map(el => ({id:el.id, text: el.name}))
  return (
    <div className="">
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1" />
        <FilterCheckbox text="New items" value="2" />
      </div>
      {/* Price filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from ~ to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={0} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      {/* Filter ingridients */}
      <CheckboxFiltersGroup
        title={"Ingredients"}
        className="mt-5"
        limit={3}
        items={item}
        defaultItems={item.slice(0, 6)}
        defaultValue={[]}
      />
    </div>
  );
};
