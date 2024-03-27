// create initial state object
export const initial_state = {
  name: "",
  postcode: "",
  address: "",
  city: "",
  phoneNumber: "",
  email: "",
  loading: false,
  errorStatus: false,
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
      return { ...state, errorStatus: true };
    }

    // actions upon checking postcode with external API
    // to fetch data
    case "FETCH_START": {
      return { ...state, loading: true, errorStatus: false };
    }
    // when fetching is successful
    case "FETCH_SUCCESS": {
      console.log("valid postcode");
      return { ...state, loading: false, errorStatus: false };
    }
    // when there is error
    case "FETCH_ERROR": {
      console.log("invalid postcode");
      return { ...state, loading: false, errorStatus: true };
    }
    // set default action
    default:
      return state;
  }
}
