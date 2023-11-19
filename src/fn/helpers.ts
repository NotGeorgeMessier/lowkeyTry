import {jstypes} from "@src/types";

// eslint-disable-next-line no-console
export const qq: (...args: any) => void = (...args) => console.log("qq", ...args);

export const isTypes: (val: any, ...types: jstypes[]) => boolean = (val, ...types) => types
    .map((t) => {
        if (t === "NaN") {
            return Number.isNaN(val);
        } else if (t === "null") {
            return val === null;
        } else {
            return typeof val === t;
        }
    })
    .reduce((t, acc) => acc || t);

export const toStr: (src: any) => string = (src) => {
    let val = src ?? "";
    val = isTypes(val, "boolean", "object") ? "" : val;
    val = isTypes(val, "function") ? toStr(val()) : val;

    return String(val);
};

export const roundNumber: <T>(src: T, options?: {ceil?: boolean; floor?: boolean}) => T | number = (
    src,
    options,
) => {
    if (isTypes(src, "NaN")) {
        return src;
    }

    return Math[options?.ceil ? "ceil" : options?.floor ? "floor" : "round"](Number(src));
};

export const jsxKey: (...args: Array<number | string>) => string = (...args) => ["JSXKey", ...args].join("_");

export const _range: (src: number) => number[] = (src) => {
    if (isTypes(src, "NaN")) {
        return [];
    }

    return new Array(Math.round(Number(src))).fill(0).map((_, i) => i);
};

export const _random: (max?: number) => number = (max = 1000) => roundNumber(Math.random() * max);

export const capitalizePlain: (str: string) => string = (str) => str[0].toUpperCase() + str.slice(1);

export const capitalize: (str: string) => string = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
