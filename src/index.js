import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer is a function that modifies your data.
const countModifier = (count = 0, action) => {
    if (action.type === 'Add') {
        return count + 1;
    } else if (action.type === 'Minus') {
        return count - 1;
    }

    return count;
};
const countStore = createStore(countModifier);

countStore.subscribe(() => {
    number.innerText = countStore.getState();
});
add.addEventListener('click', () => countStore.dispatch({ type: 'Add' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'Minus' }));
