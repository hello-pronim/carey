export const initialState = {};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STORED": {
      return action.value;
    }
  }
};