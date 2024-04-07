import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import Filter from "../components/Filter";
import BarGraph from "../components/BarGraph";
import { dataFormatter } from "../utils/dataFormat";

const Analysis = () => {
  const { filterByDateData } = useContext(DataContext);

  const formattedData = dataFormatter(filterByDateData);

  // const chartData = {
  //   labels: formattedData.map(({ type }) => type),
  //   datasets: [],
  // };

  return (
    <div>
      <section className="flex ">
        <Filter />
        <BarGraph formattedData={formattedData} />
      </section>
    </div>
  );
};

export default Analysis;
