import { createAction, props } from '@ngrx/store';

export const search = createAction('SEARCH_KEYWORD', props<{search: string}>());
