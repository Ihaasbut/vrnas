import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";
import { ContainerProps } from "./Container.types";

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
