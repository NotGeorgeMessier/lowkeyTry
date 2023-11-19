import {useEffect} from "react";

import {qq} from "../helpers";


export const useQQ = (deps: React.DependencyList, ...args: any[]): void => {
    useEffect(() => {
        qq("qq:effect:", ...args);
    }, deps);
};
