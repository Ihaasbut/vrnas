"use client";

import { ReactNode, useSyncExternalStore } from "react";

type ClientLayoutGateProps = {
   children: ReactNode;
};

function subscribe() {
   return () => {};
}

function ClientLayoutGate({ children }: ClientLayoutGateProps) {
   const isMounted = useSyncExternalStore(
      subscribe,
      () => true,
      () => false,
   );

   if (!isMounted) {
      return null;
   }

   return <>{children}</>;
}

export default ClientLayoutGate;
