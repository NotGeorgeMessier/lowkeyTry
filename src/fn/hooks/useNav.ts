import {NavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";

type UseNavReturns<StackParamList extends Record<string, object | undefined>> = {
    nav: ReturnType<typeof useNavigation<NavigationProp<StackParamList>>>;
    route: ReturnType<typeof useRoute<RouteProp<StackParamList>>>;
};

export const useNav = <StackParamList extends Record<string, object | undefined>>(): UseNavReturns<StackParamList> => {
    const nav = useNavigation<NavigationProp<StackParamList>>();
    const route = useRoute<RouteProp<StackParamList>>();

    return {nav, route};
};
