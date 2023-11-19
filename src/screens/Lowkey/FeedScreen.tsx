import {useIsFocused} from "@react-navigation/native";
import {BaseView, ImagesFeed, Pagination} from "@src/com";
import {getPhotos, qq, useImageFeedAtom} from "@src/fn";
import {RNScreen} from "@src/types";
import * as React from "react";

const FeedScreen: RNScreen = () => {
    const [loading, setLoading] = React.useState(false);
    const {state: {currentPage, data}, setData, setPage} = useImageFeedAtom();
    const isFocused = useIsFocused();

    React.useEffect(() => {
        if (isFocused) {
            qq("getPhotos");
            setLoading(true);
            getPhotos(currentPage)
                .then((res) => {
                    setData(res);
                })
                .catch((e) => qq("err", e))
                .finally(() => setLoading(false));
        }

    }, [isFocused]);

    const onPage = async (page: number): Promise<void> => {
        if (currentPage === page) {
            return;
        }

        setPage(page);
        const newDataIndex = data.findIndex((d) => d.page === page);
        if (newDataIndex < 0) {
            setLoading(true);
            try {
                qq("getPhotos");
                const res = await getPhotos(page);
                setData(res);
            } catch (e) {
                qq("err", e);
            } finally {
                setLoading(false);
            }
        }
    };



    return (
        <BaseView>
            <ImagesFeed />
            <Pagination currentPage={currentPage} onPage={onPage} />
        </BaseView>
    );
};



export default FeedScreen;
