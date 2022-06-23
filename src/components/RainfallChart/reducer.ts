import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IChartGraphData,
  IChartTableData,
  IChartInfoData,
  IChartViewData,
} from "./models";

const chartViewDataInitialState: IChartViewData = {
  chartGraphData: [
    {
      type: "line",
      name: "2 Year Event",
      data: [90, 90, 85, 70, 50, 40, 35, 25, 20],
    },
    {
      type: "line",
      name: "5 Year Event",
      data: [95, 85, 75, 65, 55, 35, 25, 20, 18],
    },
    {
      type: "line",
      name: "10 Year Event",
      data: [90, 80, 70, 60, 50, 30, 20, 18, 15],
    },
    {
      type: "line",
      name: "25 Year Event",
      data: [85, 75, 65, 55, 45, 35, 15, 12, 7],
    },
    {
      type: "line",
      name: "50 Year Event",
      data: [80, 70, 60, 50, 40, 20, 17, 12, 5],
    },
    {
      type: "line",
      name: "100 Year Event",
      data: [75, 65, 55, 50, 18, 12, 9, 5, 1],
    },
  ],
  chartTableData: [
    {
      name: "2 Year Event",
      data: [90, 90, 85, 70, 50, 40, 35, 25, 20],
    },
    {
      name: "5 Year Event",
      data: [95, 85, 75, 65, 55, 35, 25, 20, 18],
    },
    {
      name: "10 Year Event",
      data: [90, 80, 70, 60, 50, 30, 20, 18, 15],
    },
    {
      name: "25 Year Event",
      data: [85, 75, 65, 55, 45, 35, 15, 12, 7],
    },
    {
      name: "50 Year Event",
      data: [80, 70, 60, 50, 40, 20, 17, 12, 5],
    },
    {
      name: "100 Year Event",
      data: [75, 65, 55, 50, 18, 12, 9, 5, 1],
    },
  ],
  chartInfoData: {
    siteName: "Demo Rainfall CA",
    startDate: "12-3-2021",
    endDate: "30-4-2021",
  },
};
interface chartGraphDataRequestParams {
  siteID: number;
  channelID: number;
  idfCurveID: number;
  startDateTime: string;
  endDateTime: string;
}

export const fetchChartGraphData = createAsyncThunk(
  //TODO: Change the URL once we have actual/real endpoint to return chart data
  "rainfallChart/fetchChartGraphData",
  async (requestParams: chartGraphDataRequestParams, { dispatch }) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?siteID=${requestParams.siteID}&channelID=${requestParams.channelID}&idfCurveID=${requestParams.idfCurveID}&startDateTime=${requestParams.startDateTime}&endDateTime=${requestParams.endDateTime}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    ).then((response) => response.json());
  }
);

export const rainfallChartSlice = createSlice({
  name: "rainfallChart",
  initialState: chartViewDataInitialState,
  reducers: {},
  extraReducers: {
    [fetchChartGraphData.pending.toString()]: (state, action) => {
      console.log("Fetching data....");
    },
    [fetchChartGraphData.fulfilled.toString()]: (state, { payload }) => {
      console.log("Data fetched!");
      console.log(payload);
      state.chartGraphData = [
        {
          //TODO: change this test data to actual data received off endpoint
          type: "line",
          name: "Current Period",
          data: [95, 85, 80, 79, 69, 65, 59, 45, 30],
        },
        {
          type: "line",
          name: "1 Year Event",
          data: [81, 79, 70, 72, 65, 58, 53, 40, 29],
        },
        {
          type: "line",
          name: "2 Year Event",
          data: [60, 58, 55, 50, 45, 40, 35, 22, 18],
        },
        {
          type: "line",
          name: "3 Year Event",
          data: [72, 71, 69, 62, 55, 44, 39, 29, 20],
        },
        {
          type: "line",
          name: "5 Year Event",
          data: [82, 79, 75, 69, 60, 55, 39, 25, 22],
        },
        {
          type: "line",
          name: "50 Year Event",
          data: [78, 77, 73, 67, 58, 53, 37, 23, 18],
        },
        {
          type: "line",
          name: "100 Year Event",
          data: [89, 79, 71, 65, 57, 53, 25, 18, 15],
        },
      ];
    },
    [fetchChartGraphData.rejected.toString()]: (state, action) => {
      console.log("Data fetch failed!");
    },
  },
});

//export const {  } = rainfallChartSlice.actions

export const selectRainfallChartGraphState = (state: any) =>
  state.rainfallChart.chartGraphData as IChartGraphData[];
export const selectRainfallChartTableState = (state: any) =>
  state.rainfallChart.chartTableData as IChartTableData[];
export const selectRainfallChartInfoState = (state: any) =>
  state.rainfallChart.chartInfoData as IChartInfoData;

export default rainfallChartSlice.reducer;
