import {NavigationContainer} from "@react-navigation/native";
import React from "react";

import {navigationRef} from "./src/navigation";
import {LowkeyStackNavigator} from "./src/navigation/stack";

const App: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <LowkeyStackNavigator />
        </NavigationContainer>
    );
};

export default App;
