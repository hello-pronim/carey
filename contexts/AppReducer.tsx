export const initialState = {
  enrolmentDetails: {
    activeStep: 1,
  },
};

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "RESET_STORE": {
      return initialState;
    }
    case "INIT_STORE": {
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
