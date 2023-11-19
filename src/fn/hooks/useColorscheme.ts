import {THEME_NAMES} from "@src/types";
import {Colorscheme, colorscheme} from "@src/utils";
import {useColorScheme} from "react-native";

export const useColorscheme: (inverted?: boolean) => Colorscheme[THEME_NAMES] = (inverted = false) => {
    const schemeName = useColorScheme();
    if (inverted) {
        if (schemeName === "dark") {
            return colorscheme[THEME_NAMES.LIGHT];
        } else {
            return colorscheme[THEME_NAMES.DARK];
        }
    }
    if (schemeName === "dark") {
        return colorscheme[THEME_NAMES.DARK];
    } else {
        return colorscheme[THEME_NAMES.LIGHT];
    }
};
