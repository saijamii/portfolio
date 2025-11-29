import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { cn } from "../../lib/utils";

function Separator({
    className,
    orientation = "horizontal",
    decorative = true,
    ...props
}) {
    return (
        <SeparatorPrimitive.Root
            data-slot="separator"
            decorative={decorative}
            orientation={orientation}
            {...props}
        />
    );
}

export { Separator };
