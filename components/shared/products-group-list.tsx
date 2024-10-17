"use client";
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
interface Props {
  title: string;
  commodity: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  commodity,
  className,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title]);
  return (
    <div id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {commodity.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name || "Papa's pepperoni"}
            price={item.items[0].price || 20}
            imageUrl={
              item.imageUrl ||
              "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif"
            }
          />
        ))}
      </div>
    </div>
  );
};
