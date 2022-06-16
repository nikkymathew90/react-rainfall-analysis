import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Select, { SingleValue } from "react-select";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import DatePicker, { DayValue, Day } from '@hassanmojab/react-modern-calendar-datepicker'
import TimePicker from "rc-time-picker";
import { Link } from "react-router-dom";
import { IRainfallSettings, ISite } from "./models";
import 
{ 
    setSelectedChannel,
    setSelectedEndDate,
    setSelectedIDFCurve,
    setSelectedSite,
    setSelectedStartDate,
    setSelectedEndTime,
    setSelectedStartTime} from './reducer';

import { useDispatch } from 'react-redux';


const RainfallSettings = (props:IRainfallSettings) => {
    const dispatch = useDispatch();

    const handleGen = () => {
    }

    const rainfallSiteOptions = props.sites.map((s)=>{
        return {value: s.id, label: s.name}
    });

    const rainfallChannelOptions = props.selectedSiteChannels.map((c) => {
        return {value: c.id, label: c.name}
    });

    const rainfallIDCurveOptions = props.idfCurves.map((i) => {
        return {value: i.id, label: i.name}
    });

    const startDt = moment(props.startDate + ' ' + props.startTime,"YYY/MM/DD HH:mm");
    const endDt = moment(props.endDate + ' ' + props.endTime,"YYY/MM/DD HH:mm");
    const startDate = {year: startDt.year()+2000, month: startDt.month()+1, day: startDt.date()};
    const endDate = {year: endDt.year()+2000, month: endDt.month()+1, day: endDt.date()};

    
    const generateReportURL = "/chart-view?"
        + "siteID=" + props.selectedSiteID
        + "&channelID=" + props.selectedChannelID
        + "&idfCurveID=" + props.selectedIDFCurveID
        + "&sdate="
        + startDate?.year + "/" + startDate?.month + "/" + startDate?.day
        + "&edate="
        + endDate?.year + "/" + endDate?.month + "/" + endDate?.day;


    return (
        <div className="px-5">
            <div className="d-flex flex-column">
                <h2 className="py-3">Rainfall Settings</h2>
                <div className="d-flex flex-column gap-2" >
                    <Row>
                        <Col sm={2} className="d-flex align-items-center justify-content-end">
                            SELECT A RAINFALL SITE:
                        </Col>
                        <Col sm={10}>
                            <Select
                                options={rainfallSiteOptions}
                                value={rainfallSiteOptions.find(s=>s.value==props.selectedSiteID)}
                                defaultValue={null}
                                onChange={(selectedOption) => { dispatch(setSelectedSite(selectedOption?.value))} }
                                className="zIndex-103"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            sm={2}
                            className="d-flex align-items-center justify-content-end"
                        >
                            SELECT A RAINFALL CHANNEL:
                        </Col>
                        <Col sm={10}>
                            <Select
                                options={rainfallChannelOptions}
                                value={rainfallChannelOptions.find(c=>c.value==props.selectedChannelID)}
                                defaultValue={null}
                                onChange={(selectedOption) => { dispatch(setSelectedChannel(selectedOption?.value))} }
                                className="zIndex-102"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            sm={2}
                            className="d-flex align-items-center justify-content-end"
                        >
                            SELECT AN IDF CURVE:
                        </Col>
                        <Col sm={10}>
                            <Select
                                options={rainfallIDCurveOptions}
                                value={rainfallIDCurveOptions.find(i=>i.value==props.selectedIDFCurveID)}
                                defaultValue={null}
                                onChange={(selectedOption) => { dispatch(setSelectedIDFCurve(selectedOption?.value))} }
                                className="zIndex-101"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            sm={2}
                            className="d-flex align-items-center justify-content-end"
                        >
                            SELECT START DATE:
                        </Col>
                        <Col sm={10}>
                            <DatePicker
                                wrapperClassName="w-100"
                                inputClassName="w-100 text-start datepicker"
                                inputPlaceholder="Select Start Date"
                                calendarPopperPosition="bottom"
                                value={startDate}
                                onChange={(selectedDate) => { 
                                    dispatch(setSelectedStartDate(`${selectedDate?.year}/${selectedDate?.month}/${selectedDate?.day}`)) 
                                }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <label className="me-1">Optional:</label>
                            <TimePicker
                                showSecond={false}
                                allowEmpty={true}
                                value={startDt}
                                onChange={(selectedStartTime) => {
                                    dispatch(setSelectedStartTime(selectedStartTime.format("HH:mm")))
                                }
                            }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className="d-flex align-items-center justify-content-end">
                            SELECT END DATE:
                        </Col>
                        <Col sm={10}>
                            <DatePicker
                                wrapperClassName="w-100 zIndex-99"
                                inputClassName="w-100 text-start datepicker"
                                inputPlaceholder="Select End Date"
                                calendarPopperPosition="bottom"
                                value={endDate}
                                onChange= {(selectedDate) => { dispatch(setSelectedEndDate(`${selectedDate?.year}/${selectedDate?.month}/${selectedDate?.day}`)) }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <label>Optional:</label>
                            <TimePicker
                                showSecond={false}
                                allowEmpty={true}
                                value={endDt}
                                onChange={(selectedEndTime) => {
                                    dispatch(setSelectedEndTime(selectedEndTime.format("HH:mm")))
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Link  to={generateReportURL}>
                                <Button onClick={handleGen} className="me-2 outline-gray">
                                    GENERATE IDF ANAYSIS
                                </Button>
                            </Link>
                            <Button className="outline-gray"
                                onClick={undefined}
                            >RESET</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );
};

export default RainfallSettings;