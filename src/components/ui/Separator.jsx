import React from "react";
import { cn } from "../../lib/utils";

export function Separator({ className }) {
    return (
        <div
            className={cn(
                "relative flex h-8 w-full border-x border-edge pattern-edge",
                "before:content-[''] before:absolute before:-left-[100vw] before:top-0",
                "before:z-[10] before:h-8 before:w-[200vw]",
                "before:[background-size:10px_10px]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
                className
            )}
        />
    );
}
