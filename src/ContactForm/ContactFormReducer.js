// create initial state object
export const initial_state = {
  name: "",
  postcode: "",
  address: "",
  city: "",
  phoneNumber: "",
  email: "",
  errorStatus: false,
  apiError: false,
  loading: false,
  unfilled: true,
};

// create reducer function
export function reducer(state, action) {
  switch (action.type) {
    // create actions
    // action upon changes in the form
    case "CHANGE_FORM_DATA": {
      state = { ...state, [action.payload.name]: action.payload.value };
      return state;
    }
    // action upon submitting form
    case "SUBMIT_FORM_DATA": {
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
        errorStatus: false,
      };
      console.log(state);
      return state;
    }
    // action upon empty input fields
    case "EMPTY_INPUT": {
      state = { ...state, errorStatus: true };
      console.log(state);
      return state;
    }
    // actions upon checking postcode with external API
    // to fetch data
    case "FETCH_START": {
      state = { ...state, loading: true, apiError: false };
      return state;
    }
    // when fetching is successful
    case "FETCH_SUCCESS": {
      console.log("valid postcode");
      return { ...state, loading: false, apiError: false, unfilled: false, };
    }
    // when there is error
    case "FETCH_ERROR": {
      console.log("invalid postcode");
      return { ...state, loading: false, apiError: true };
    }

    // set default action
    default:
      return state;
  }
}
