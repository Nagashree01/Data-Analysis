import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

const Filter = () => {
  const { dispatch } = useContext(DataContext);
  return (
    <div className="pt-5 pr-5 flex flex-col gap-6 pl-4">
      <h5 className="text-xl font-medium">Filters</h5>
      <div>
        <p className="text-xl font-normal">Date</p>
        <p>From:</p>
        <input
          type="date"
          name="date-from"
          id="date-from"
          min="2022-10-04"
          max="2022-10-30"
          onChange={(e) =>
            dispatch({ type: "SET_DATEFROM", payload: e.target.value })
          }
        />
        <p>To:</p>
        <input
          type="date"
          name="date-to"
          id="date-to"
          min="2022-10-04"
          max="2022-10-30"
          onChange={(e) =>
            dispatch({ type: "SET_DATETO", payload: e.target.value })
          }
        />
      </div>
      <div>
        <p className="text-xl font-normal">Gender</p>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            onChange={(e) =>
              dispatch({ type: "SET_GENDER", payload: e.target.value })
            }
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            onChange={(e) =>
              dispatch({ type: "SET_GENDER", payload: e.target.value })
            }
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="both"
            id="both"
            onChange={(e) =>
              dispatch({ type: "SET_GENDER", payload: e.target.value })
            }
          />
          <label htmlFor="both">Both</label>
        </div>
      </div>
      <div>
        <p className="text-xl font-normal">Age</p>
        <div>
          <input
            type="radio"
            name="age"
            value="15-25"
            id="age-15-25"
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
          />
          <label htmlFor="age-15-25">15-25</label>
        </div>
        <div>
          <input
            type="radio"
            name="age"
            value=">25"
            id="age>25"
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
          />
          <label htmlFor="age>25">{`>`}25</label>
        </div>
        <div>
          <input
            type="radio"
            name="age"
            value="all"
            id="all"
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
          />
          <label htmlFor="all">All</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
