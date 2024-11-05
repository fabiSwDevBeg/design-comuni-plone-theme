const initialState = {
    locale: "it", // lingua predefinita
};

const intlReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            console.log("Cambiando lingua a:", action.locale);
            return {
                ...state,
                locale: action.locale,
            };
        default:
            return state;
    }
};

export default intlReducer;


