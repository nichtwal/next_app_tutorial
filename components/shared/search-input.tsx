'use client'

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

interface SearchInputProps {
  className?: string;
}
export const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
    const [focused, setFocused] = React.useState(false)
  return (
    <div
      className={cn(
        "flex rounded-2xl flex-1 justify-between relative h-11",
        className
      )}
    >
      <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
      <input
        className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
        type="text"
        placeholder="Find your pizza..."
        onFocus={() => setFocused(true)}
      />
    </div>
  );
};
