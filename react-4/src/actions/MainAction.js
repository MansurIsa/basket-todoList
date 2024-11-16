import { baseUrl } from "../MainApi";
import axios from "axios"
import { getCountriesFunc } from "../redux/MainReducer";

export const getCountries = () => async (dispatch) => {
    return await axios.get(`${baseUrl}all`)
      .then((resp) => {
        console.log(resp.data);
        dispatch(getCountriesFunc(resp.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };