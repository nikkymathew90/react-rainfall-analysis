import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { produceWithPatches } from "immer";
import { Table } from "react-bootstrap";
import { IChartTableData, IChartViewData } from "./models";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { fetchChartGraphData } from "./reducer";
import { useAppDispatch } from "../../store/store-creator";

const ReactHighcharts = require("react-highcharts");

const parse = require("url-parse");

const RainfallChartView = (props: IChartViewData) => {
  //const [params, setParams] = useState<ChartViewParams>();
  const dispatch = useAppDispatch();
  const [queryParams] = useSearchParams();
  let params = Object.fromEntries(queryParams);
  console.log(params);

  //TODO: Uncomment this part once we have actual endpoint to pull data
  //const url = parse(window.location.href, true);
  //const queryParams = url.query;

  useEffect(() => {
    dispatch(
      fetchChartGraphData({
        siteID: ~~params.siteID,
        channelID: ~~params.channelID,
        idfCurveID: ~~params.idfCurveID,
        startDateTime: params.sdate,
        endDateTime: params.edate,
      })
    );
  }, []);

  const config: Highcharts.Options = {
    title: {
      text: "Rainfall Analysis Chart",
    },

    subtitle: {
      text: "tes subtitle",
    },

    yAxis: {
      title: {
        text: "Rainfall Intensity (mm / hr)",
      },
      min: 0,
      max: 100,
      tickInterval: 25,
    },

    xAxis: {
      title: {
        text: "Duration",
      },
      categories: [
        "5 min",
        "10 min",
        "15 min",
        "30 min",
        "1 hr",
        "2 hr",
        "6 hr",
        "12 hr",
        "24 hr",
      ],
    },

    series: props.chartGraphData as Highcharts.SeriesOptionsType[],

    exporting: {
      showTable: true,
    },
  };

  const DrawTable = (cdata: IChartTableData[]) => {
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

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div
      className="mt-3 mx-auto"
      style={{
        width: "90%",
        height: "auto",
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
        ref={chartComponentRef}
      />
      {DrawTable(props.chartTableData)}
    </div>
  );
};

export default RainfallChartView;
