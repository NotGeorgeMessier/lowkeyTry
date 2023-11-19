import {TypeCuratedPhoto} from "../pexels";

export type PexelsDTO = {
    page: number;
    per_page: number;
    photos: TypeCuratedPhoto[];
    next_page: `https://api.pexels.com/v1/curated/?page=${number}&per_page=${number}`;
};
