import { IRainfallSettings } from '../components/RainfallSettings/models';
import { IChartViewData } from '../components/RainfallChart/models'

export interface IAppState {
    rainfallSettings: IRainfallSettings,
    rainfallChartData: IChartViewData
}