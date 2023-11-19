import {AtomBinded} from "@reatom/core";
import {useEffect, useState} from "react";

export function useAtomState<S>(atom: AtomBinded<S>): S {
    const [state, setState] = useState(atom.getState());
    useEffect(() => {
        const sub = atom.subscribe(setState);

        return () => sub();
    }, []);

    return state;
}
