import { createReducer, on } from '@ngrx/store';
import { search } from './app.actions';

export const INITIAL_STATE = '';

const searchReducerCallback = createReducer(
    INITIAL_STATE,
    on(search, (state, { search }) =>  search )
);

export function searchReducer(state, action) {
    return searchReducerCallback(state, action);
}
