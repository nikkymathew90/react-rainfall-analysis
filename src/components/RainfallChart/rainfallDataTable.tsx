import { RainFallPeriodTableData } from "./models";
import { Table } from "react-bootstrap";
import classNames from "./RainfallChartView.module.css";

export const RfDataViewTable = (rfdata: RainFallPeriodTableData[]) => {
  return (
    <Table bordered className={classNames.rfTable}>
      <tbody>
        {rfdata.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.data}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
