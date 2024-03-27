// create initial state object
export const initial_state = {
  name: "",
  postcode: "",
  address: "",
  city: "",
  phoneNumber: "",
  email: "",
  errorStatus: false,
  loading: false,
};

// create reducer function
export function reducer(state, action) {
  switch (action.type) {
    // create actions 
    // action upon changes in the form
    case "CHANGE_FORM_DATA": {
      return { ...state, [action.payload.name]: action.payload.value };
    }
    // action upon submitting form 
    case "SUBMIT_FORM_DATA": {
      console.log(state);
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        errorStatus: false,
      };
    }   
    // action upon empty input fields
    case "EMPTY_INPUT": {
      console.log(state);
      return { ...state, errorStatus: true };
    }

 // set default action
    default:
      return state;
  }
}
