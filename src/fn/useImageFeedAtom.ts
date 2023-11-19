import {createAtom} from "@reatom/core";
import {PAGES_MAX, PAGES_MIN} from "@src/config";
import {PexelsDTO} from "@src/types";

import {useAtomState} from "./hooks";

type TypeAtomState = {
    data: PexelsDTO[];
    currentPage: number;
};

const initState: TypeAtomState = {
    data: [],
    currentPage: 1,
};

const atom = createAtom(
    {
        setData: (data: PexelsDTO) => data,
        setPage: (page: number) => page,
    },
    ({onAction}, state = initState) => {
        onAction("setData", (data) => {
            if (state.data.length >= PAGES_MAX) {
                state = {
                    ...state,
                    data: state.data.slice(PAGES_MAX - PAGES_MIN),
                };
            }
            state = {
                ...state,
                data: [...state.data, data],
            };
        });
        onAction("setPage", (page) => {
            state = {
                ...state,
                currentPage: page,
            };
        });

        return state;
    },
);

type UseAtomReturns = {
    state: TypeAtomState;
    setData: (data: PexelsDTO) => void;
    setPage: (page: number) => void;
};

// export const getAdultOnboarding = () => atom.getState();
// export const adultOnboardingInit = (status?: AdultOnboardingStep) => atom.init.dispatch(status);
// export const adultOnboardingToNextStep = () => atom.toNextStep.dispatch();

export const useImageFeedAtom = (): UseAtomReturns => {
    const state = useAtomState(atom);

    return {
        state,
        setData: (data) => atom.setData.dispatch(data),
        setPage: (page) => atom.setPage.dispatch(page),
    };
};
