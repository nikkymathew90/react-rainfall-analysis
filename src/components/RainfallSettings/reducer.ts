import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRainfallSettings } from "./models";

const rainfallSettingsInitialState: IRainfallSettings = {
    sites: [{id:1,name:"Site 1"},{id:2,name:"Site 2"},{id:3,name:"Site 3"}],
    selectedSiteChannels: [{id:1,name:"Channel 1"},{id:1,name:"Channel 2"},{id:2,name:"Channel 3"},{id:3,name:"Channel 4"}],
    idfCurves: [{id:1,name:"Curve 1"},{id:2,name:"Curve 2"},{id:3,name:"Curve 3"},{id:4,name:"Curve 4"},{id:5,name:"Curve 5"}],
    startDate: '2022/02/15',
    startTime: '00:00',
    endDate: '2022/05/03',
    endTime: '00:00',
    selectedChannelID: -1,
    selectedSiteID: -1,
    selectedIDFCurveID: -1
}

export const rainfallSettingsSlice = createSlice({
    name: "rainfallSettings",
    initialState: rainfallSettingsInitialState,
    reducers: {
        setSelectedSite: (state, action)=> {
            state.selectedSiteID = action.payload
        },
        setSelectedChannel: (state, action)=> {
            state.selectedChannelID = action.payload
        },
        setSelectedIDFCurve: (state, action)=> {
            state.selectedIDFCurveID = action.payload
        },
        setSelectedStartDate: (state, action)=> {
            state.startDate = action.payload
        },
        setSelectedEndDate: (state, action)=> {
            state.endDate = action.payload
        },
        setSelectedStartTime: (state, action) => {
            state.startTime = action.payload
        },
        setSelectedEndTime: (state, action) => {
            state.endTime = action.payload
        }
    }
});

export const { setSelectedSite, setSelectedChannel, setSelectedIDFCurve, setSelectedStartDate, setSelectedEndDate, setSelectedEndTime, setSelectedStartTime } = rainfallSettingsSlice.actions

export const selectRainfallSettingsState = (state:any) => (state.rainfallSettings as IRainfallSettings) 

export default rainfallSettingsSlice.reducer