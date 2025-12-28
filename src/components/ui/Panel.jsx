import { Slot as SlotPrimitive } from "@radix-ui/react-slot";
import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Slot = SlotPrimitive;

const Panel = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <section
            ref={ref}
            data-slot="panel"
            className={cn(
                "screen-line-before screen-line-after border-x border-edge",
                className
            )}
            {...props}
        />
    );
});

Panel.displayName = "Panel";

Panel.propTypes = {
    className: PropTypes.string,
};

const PanelHeader = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <header
            ref={ref}
            data-slot="panel-header"
            className={cn("screen-line-after px-4", className)}
            {...props}
        />
    );
});

PanelHeader.displayName = "PanelHeader";

PanelHeader.propTypes = {
    className: PropTypes.string,
};

const PanelTitle = React.forwardRef(({
    className,
    asChild = false,
    ...props
}, ref) => {
    const Comp = asChild ? Slot : "h2";

    return (
        <Comp
            ref={ref}
            data-slot="panel-title"
            className={cn("text-3xl font-semibold", className)}
            {...props}
        />
    );
});

PanelTitle.displayName = "PanelTitle";

PanelTitle.propTypes = {
    className: PropTypes.string,
    asChild: PropTypes.bool,
};

const PanelTitleSup = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <sup
            ref={ref}
            className={cn(
                "-top-[0.75em] ml-1 text-sm font-medium text-muted-foreground select-none",
                className
            )}
            {...props}
        />
    );
});

PanelTitleSup.displayName = "PanelTitleSup";

PanelTitleSup.propTypes = {
    className: PropTypes.string,
};

const PanelContent = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <div ref={ref} data-slot="panel-body" className={cn("p-4", className)} {...props} />
    );
});

PanelContent.displayName = "PanelContent";

PanelContent.propTypes = {
    className: PropTypes.string,
};

export { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup };
