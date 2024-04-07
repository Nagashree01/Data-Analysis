/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const DataContext = createContext();
const initialState = {
  data: [],
  age: "",
  gender: "",
  dateFrom: "",
  dateTo: "",
};
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    case "SET_DATEFROM":
      return { ...state, dateFrom: action.payload };
    case "SET_DATETO":
      return { ...state, dateTo: action.payload };
    default:
      break;
  }
};

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://be4ad4f1-dcef-4964-82b6-e55323c61226-00-7so4las8kj6x.pike.replit.dev/data/"
      );
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterByAgeData =
    state.age === "" || state.age === "all"
      ? state.data
      : state.data.filter((dt) => dt.Age === state.age);
  //console.log(state, filterByAgeData);

  const filterByGenderData =
    state.gender === "" || state.gender === "both"
      ? filterByAgeData
      : filterByAgeData.filter((dt) => dt.Gender === state.gender);

  const filterByDateData =
    state.dateFrom === "" && state.dateTo === ""
      ? filterByGenderData
      : filterByGenderData.filter((dt) => {
          const dateOfDt = new Date(dt.Day);

          const min = new Date(`${state.dateFrom}T00:00:00.000Z`);
          const max = new Date(`${state.dateTo}T00:00:00.000Z`);

          return dateOfDt >= min && dateOfDt <= max;
        });
  console.log(filterByDateData);

  return (
    <DataContext.Provider value={{ state, dispatch, filterByDateData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
