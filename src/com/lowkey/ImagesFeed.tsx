import {FEED_CONFIG} from "@src/config";
import {useImageFeedAtom} from "@src/fn";
import {RNFC, TypeStyle} from "@src/types";
import React from "react";
import {FlatList, ViewStyle} from "react-native";

import {PhotoCell} from "./PhotoCell";

export const ImagesFeed: RNFC = () => {
    const {state: {currentPage, data}} = useImageFeedAtom();

    const DATA = data.find((d) => d.page === currentPage);

    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={DATA?.photos ?? []}
            getItemLayout={(_, index) => ({
                length: FEED_CONFIG.CELL_HEIGHT,
                offset: FEED_CONFIG.CELL_HEIGHT * index,
                index,
            })}
            renderItem={({item}) => <PhotoCell item={item}/>}
            keyExtractor={(item) => `${item.id}`}
        />
    );
};

const styles = {
    list: {
        margin: FEED_CONFIG.MARGIN,
    },
} satisfies TypeStyle<ViewStyle>;
