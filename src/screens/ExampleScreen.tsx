import {BaseView, UIText} from "@src/com";
import {RNScreen} from "@src/types";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

const ExampleScreen: RNScreen = () => {

    return (
        <BaseView>
            <ScrollView>
                <UIText>Example text2</UIText>
            </ScrollView>
        </BaseView>
    );
};

export default ExampleScreen;
