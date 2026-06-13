import { ReactNode } from "react";

import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

type ContainerProps = {
    children: ReactNode;
    inlinePadding?: string;
};

function Container({ children, inlinePadding }: ContainerProps) {
    const { isDesktop } = useClientBreakpoint();
    const defaultInlinePadding = !isDesktop ? "16px" : "120px";

    return (
        <div style={{ paddingInline: inlinePadding || defaultInlinePadding }}>
            {children}
        </div>
    );
}

export default Container;
