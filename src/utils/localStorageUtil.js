export const ITEMS_KEY = 'items-key';

export function saveToLocalStorage(key, value) {
    try {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (e) {
    }
}

function getValueFromLocalStorage(key, defaultValue) {
    try {
        return localStorage.hasOwnProperty(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue;
    } catch (e) {
        return defaultValue;
    }
}


export function getItemsFromLocaleStorage() {
    return getValueFromLocalStorage(ITEMS_KEY, []);
}

export function saveItemsToLocaleStorage(items) {
    return saveToLocalStorage(ITEMS_KEY, items);
}




