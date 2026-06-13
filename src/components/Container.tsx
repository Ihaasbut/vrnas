import { ReactNode } from "react";

import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

type ContainerProps = {
  children: ReactNode;
  inlinePadding?: string;
};

function Container({ children, inlinePadding }: ContainerProps) {
  const { isMobile } = useClientBreakpoint();
  const defaultInlinePadding = isMobile ? "16px" : "120px";

  return (
    <div style={{ paddingInline: inlinePadding || defaultInlinePadding }}>
      {children}
    </div>
  );
}

export default Container;
