export interface IKeyNamePair {
    id: number,
    name: string
}
export interface ISite extends IKeyNamePair {
}

export interface IChannel extends IKeyNamePair {
}

export interface IIDFCurve extends IKeyNamePair {
}


export interface IRainfallSettings {
    sites: ISite[],
    selectedSiteChannels: IChannel[],
    selectedSiteID: number,
    selectedChannelID: number,
    selectedIDFCurveID: number,
    idfCurves: IIDFCurve[],
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string
}