import { ChevronDown } from "lucide-react";

export function HeroScroll() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

      <ChevronDown
        size={34}
        className="text-[#6D1F32]"
      />

    </div>
  );
}