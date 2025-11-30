import React from "react";
import { cn } from "../../lib/utils";

export function Separator({ className }) {
    return (
        <div
            className={cn(
                "relative flex h-8 w-full border-x border-edge pattern-edge",

                // pseudo element core
                "before:content-[''] before:absolute before:top-0 before:-left-[100vw]",
                "before:z-[10] before:h-8 before:w-[200vw]",

                // background pattern
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_1px,transparent_50%)]",

                // your converted properties
                "before:[background-size:10px_10px]",
                "before:border before:border-solid before:border-secondary-200 dark:before:border-edge",

                className
            )}

        />
    );
}
