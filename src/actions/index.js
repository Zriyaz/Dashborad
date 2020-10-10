import axios from 'axios';
export const getStatisticData = () => async (dispatch) => {
  try {
    const res = await axios.get('https://disease.sh/v3/covid-19/countries');
    dispatch({ type: 'STATIC_DATA', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', payload: error.message });
  }
};
