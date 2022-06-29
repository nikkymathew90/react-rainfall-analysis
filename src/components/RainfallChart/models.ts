export interface IChartViewData {
  chartGraphData: IChartGraphData[];
  chartTableData: IChartTableData[];
  chartInfoData: IChartInfoData;
}

export interface IChartGraphData {
  name: string;
  type: string;
  data: number[];
}

export interface IChartTableData {
  name: string;
  data?: number[];
}

export interface RainFallPeriodTableData {
  name: string;
  data?: string;
}

export interface IChartInfoData {
  siteName: string;
  startDate: string;
  endDate: string;
  rainfallSummary: RainFallPeriodTableData[];
}
