export const initialState = {
  enrolmentDetails: {
    activeStep: 3,
  },
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STORED": {
      return action.value;
    }
    case "SET_ENROLMENT_DETAILS": {
      return {
        ...state,
        enrolmentDetails: action.value,
      };
    }
  }
};
