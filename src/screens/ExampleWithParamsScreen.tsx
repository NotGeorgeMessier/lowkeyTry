import {BaseView, UIText} from "@src/com";
import {RNScreen} from "@src/types";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

const ExampleWithParamsScreen: RNScreen = () => {

    return (
        <BaseView>
            <ScrollView>
                <UIText>Example with params text</UIText>
            </ScrollView>
        </BaseView>
    );
};

export default ExampleWithParamsScreen;
