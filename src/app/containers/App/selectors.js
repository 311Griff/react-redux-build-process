import { createSelector } from 'reselect';

const selectStore = () => (state) => state.get('app');

const selectNum = () => createSelector(
    selectStore(),
    (app) => app.get('testNum')
);

const selectMultiplied = () => createSelector(
    selectStore(),
    (app) => (app.get('testNum') * 3)
);

const selectAdded = () => createSelector(
    selectStore(),
    (app) => (app.get('testNum') + 3)
);

const selectTotal = () => createSelector(
    selectStore(),
    (app) => app.get('testNum') + (app.get('testNum') * 3) + (app.get('testNum') + 3)
);

export {
    selectNum,
    selectMultiplied,
    selectAdded,
    selectTotal,
};
