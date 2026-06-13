"use client";

import { useEffect, useState } from "react";

// Синхронизировать с src/assets/styles/mixins.scss
const MEDIA_QUERIES = {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)",
} as const;

type ClientDeviceState = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};

const DEFAULT_DEVICE_STATE: ClientDeviceState = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
};

function readClientDeviceState(): ClientDeviceState {
    return {
        isMobile: window.matchMedia(MEDIA_QUERIES.mobile).matches,
        isTablet: window.matchMedia(MEDIA_QUERIES.tablet).matches,
        isDesktop: window.matchMedia(MEDIA_QUERIES.desktop).matches,
    };
}

export function useClientBreakpoint(): ClientDeviceState {
    const [clientDeviceState, setClientDeviceState] =
        useState(DEFAULT_DEVICE_STATE);

    useEffect(() => {
        const handleChange = () =>
            setClientDeviceState(readClientDeviceState());

        handleChange();

        const mediaQueryLists = Object.values(MEDIA_QUERIES).map((query) =>
            window.matchMedia(query),
        );

        mediaQueryLists.forEach((mql) => {
            mql.addEventListener("change", handleChange);
        });

        return () => {
            mediaQueryLists.forEach((mql) => {
                mql.removeEventListener("change", handleChange);
            });
        };
    }, []);

    return clientDeviceState;
}
