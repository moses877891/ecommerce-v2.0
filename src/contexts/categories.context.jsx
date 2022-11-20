import { createContext, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP',
}

const categoriesReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in categoriesReducer`);
    }
}

const INITIAL_STATE = {
    categoriesMap: null,
};

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
    const { categoriesMap } = state;

    const setCategoriesMap = (categoryMap) => {
        dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap));
    }

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
}