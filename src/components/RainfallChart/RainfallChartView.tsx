import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { IChartViewData } from "./models";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { fetchChartGraphData } from "./reducer";
import { useAppDispatch } from "../../store/store-creator";
import classNames from "./RainfallChartView.module.css";
import { ChartViewTable } from "./RainfallChartViewTable";
import { RfDataViewTable } from "./rainfallDataTable";

const RainfallChartView = (props: IChartViewData) => {
  const dispatch = useAppDispatch();
  const [queryParams] = useSearchParams();
  let params = Object.fromEntries(queryParams);
  const subtitle = `${props.chartInfoData.siteName}<br>
  Rainfall Period :  ${props.chartInfoData.startDate} to ${props.chartInfoData.endDate}`;

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
      text: subtitle,
    },

    yAxis: {
      title: {
        text: "Rainfall Intensity (mm / hr)",
      },
      min: 0,
      max: 100,
      tickInterval: 25,
      lineColor: "#DEDEDE",
      lineWidth: 1,
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

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div className={classNames.chartContainer}>
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
        ref={chartComponentRef}
      />
      {RfDataViewTable(props.chartInfoData.rainfallSummary)}
      {ChartViewTable(props.chartTableData)}
    </div>
  );
};

export default RainfallChartView;
