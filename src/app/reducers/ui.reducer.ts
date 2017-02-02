import * as ui from '../actions/ui.action';

export interface State {
	editId: string;
};

const initialState: State = {
	editId: '',
};

export function reducer(state = initialState, action: ui.Actions): State {
	switch (action.type) {
		case ui.ActionTypes.FORM_EDIT_MODE: {
			return { editId: action.payload };
		}

		default: {
			return state;
		}
	}
}

export const getEditId = (state: State) => state.editId;
