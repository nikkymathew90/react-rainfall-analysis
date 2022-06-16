export interface IChartViewData {
    chartGraphData: IChartGraphData[],
    chartTableData: IChartTableData[] 
}

export interface IChartGraphData {
    name: string,
    type: string,
    data: number[]
}

export interface IChartTableData {
    name: string,
    data?: number[]
}