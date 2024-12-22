import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

function BlessedHeroKicker() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-slate-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-slate-200 dark:border-white/5 dark:bg-slate-900 dark:hover:bg-slate-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-slate-600 hover:duration-300 hover:dark:text-slate-400">
          <span>✨ Introducing blesssed.net</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}

export { BlessedHeroKicker };
