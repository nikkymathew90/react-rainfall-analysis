import { IChartTableData } from "./models";
import { Table } from "react-bootstrap";
export const ChartViewTable = (cdata: IChartTableData[]) => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>5min</th>
          <th>10min</th>
          <th>15min</th>
          <th>30min</th>
          <th>1hr</th>
          <th>2hr</th>
          <th>6hr</th>
          <th>12hr</th>
          <th>24hr</th>
        </tr>
      </thead>
      <tbody>
        {cdata.map((datas, idx) => {
          const { name, data } = datas;
          return (
            <tr key={idx}>
              <th>{name}</th>
              {data?.map((item, idx) => (
                <td key={idx}>{item}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
