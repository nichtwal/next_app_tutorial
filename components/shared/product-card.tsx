import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href={""}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[256px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          suscipit ducimus consectetur ab, autem perferendis cupiditate?.
        </p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
                from <b>{price} $</b>
            </span>
            <Button variant={"secondary"} className="text-base font-bold">
                <Plus size={20} className="mr-1"/>
                Add
            </Button>
        </div>
      </Link>
    </div>
  );
};
