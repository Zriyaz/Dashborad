const initialState = {
  staticData: [],
  dataQuality: [],
  businessImpact: [],
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'STATIC_DATA':
      return {
        ...state,
        staticData: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
