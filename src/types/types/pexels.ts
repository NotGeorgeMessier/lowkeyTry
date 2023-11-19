
import {TypeID, TypeImageURI} from "./TDefault";

export type TypeCuratedPhoto = {
    id: TypeID;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: TypeID;
    avg_color: string;
    src: {
        original: TypeImageURI;
        large2x: TypeImageURI;
        large: TypeImageURI;
        medium: TypeImageURI;
        small: TypeImageURI;
        portrait: TypeImageURI;
        landscape: TypeImageURI;
        tiny: TypeImageURI;
    };
    liked: boolean;
    alt: string;
};
