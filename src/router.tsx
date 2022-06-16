import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import RainfallSettingsView from './components/RainfallSettings/RainfallSettingsView';
import RainfallChartView from './components/RainfallChart/RainfallChartView';
import { IAppState } from "./store/models";
import { selectRainfallChartGraphState, selectRainfallChartTableState} from './components/RainfallChart/reducer'
import { selectRainfallSettingsState } from './components/RainfallSettings/reducer'
import { useAppSelector } from './store/store-creator'

  function MainRouter() {
    
    const rainfallSettingsData = useAppSelector(selectRainfallSettingsState);
    const rainfallChartGraphData = useAppSelector(selectRainfallChartGraphState);
    const rainfallChartTableData = useAppSelector(selectRainfallChartTableState);

      return (
        <Router>
          <Routes>
            <Route path="/rainfall-settings" element={<RainfallSettingsView
              sites={rainfallSettingsData.sites}
              startDate={rainfallSettingsData.startDate}
              endDate={rainfallSettingsData.endDate}
              idfCurves={rainfallSettingsData.idfCurves}
              selectedChannelID={rainfallSettingsData.selectedChannelID}
              selectedIDFCurveID={rainfallSettingsData.selectedIDFCurveID}
              selectedSiteChannels={rainfallSettingsData.selectedSiteChannels}
              selectedSiteID={rainfallSettingsData.selectedSiteID}
              startTime={rainfallSettingsData.startTime} endTime={rainfallSettingsData.endTime}
              />} 
            />
            <Route path="/" element={<Navigate to='/rainfall-settings' />} />
            <Route path="/chart-view" element={<RainfallChartView chartGraphData={rainfallChartGraphData} chartTableData={rainfallChartTableData}/>} />
          </Routes>
        </Router>
    );
  }

export default MainRouter