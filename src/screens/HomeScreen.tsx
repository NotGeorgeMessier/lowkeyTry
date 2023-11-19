import {BaseView, UIText, UITouch} from "@src/com";
import {useNav} from "@src/fn";
import {MainStackParamList} from "@src/navigation";
import {RNScreen} from "@src/types";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

const HomeScreen: RNScreen = () => {
    const {nav} = useNav<MainStackParamList>();

    return (
        <BaseView>
            <ScrollView>
                <UIText>Home text</UIText>
                <UITouch onPress={() => nav.navigate("Example")}>
                    <UIText>nav to exmaple</UIText>

                </UITouch>
            </ScrollView>
        </BaseView>
    );
};

export default HomeScreen;
