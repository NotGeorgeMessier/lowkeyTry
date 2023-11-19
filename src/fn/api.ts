import {UNSAFE__PEXELS_API_KEY} from "@src/config";

const PER_PAGE = 16;
const getUrl = (page: number, per_page: number) => {
    return `https://api.pexels.com/v1/curated/?page=${page}&per_page=${per_page}`;
};

export const getPhotos = async (page: number): Promise<any> => {
    const url = getUrl(page, PER_PAGE);
    const res = await fetch(url, {
        headers: {
            Authorization: UNSAFE__PEXELS_API_KEY,
        },
        method: "GET",
    });

    return res.json();
};
