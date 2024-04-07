export const dataFormatter = (data) => {
  const newData = [
    { type: "A", value: 0 },
    { type: "B", value: 0 },
    { type: "C", value: 0 },
    { type: "D", value: 0 },
    { type: "E", value: 0 },
    { type: "F", value: 0 },
  ];
  for (let i = 0; i < data.length; i++) {
    newData[0].value += data[i].A || 0;
    newData[1].value += data[i].B || 0;
    newData[2].value += data[i].C || 0;
    newData[3].value += data[i].D || 0;
    newData[4].value += data[i].E || 0;
    newData[5].value += data[i].F || 0;
  }

  const values = newData.map((dt) => dt.value);
  const types = newData.map((dt) => dt.type);
  return { newData, values, types };
};
