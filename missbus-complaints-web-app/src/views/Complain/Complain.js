import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Column from '../../components/Column'
import Dropdown from '../../components/Dropdown'
import EmergencyButton from '../../components/EmergencyButton'
import Input from '../../components/Input/Input'
import Text from '../../components/Text'
import { COMPLAINTS } from '../../constants'
import { updateBusLine, updateBusTime, updateComplain,updateFreeText, uploadComplain } from '../../store/complain/complain.slice'
import { getStringFromDate } from '../../utils'

const Complain = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState("")
    const [fullName, setFullName] = useState("")
    const {stationLines} = useSelector(state => state.station)
    const [isSubmit, setIsSubmit] = useState(false)
    const {complain, busLine, busTime, freeText, loading} = useSelector(state => state.complain)
    const [stationLineNumbers, setStationLineNumbers] = useState([])

    const submitComplain = () => {
        setIsSubmit(true)
        dispatch(uploadComplain({fullName: fullName, phoneNumber: phoneNumber}))
        // navigate("/thankyou", { replace: true })
    }

    useEffect(()=>{
        if (isSubmit && !loading) {
            navigate("/thankyou", { replace: true })
        }

    // eslint-disable-next-line
    },[isSubmit, loading])

    useEffect(() => {
        if (stationLines !== null) {
            setStationLineNumbers(
                Object.keys(stationLines).map((line) => {return {'id' : line, 'value': line}})
            )
        }
    }, [stationLines])

    const showArrivalTimes = (line) => {
        return stationLines[line].arrival_times.map((arrivalTime) => {return {'id' : arrivalTime, 'value': getStringFromDate(arrivalTime)}})
    }
    return (
        <Column fullWidth mainAxis='space-between' style={{"height": "100%", "position": "relative", "overflowY": "scroll"}} padding={[16, 0]}>
            <Column fullWidth>
                <Text text="בחר תלונה" bold type="title"/>
                <Column fullWidth padding={[32, 0]} gap={8}>
                    <Input 
                        id={100}
                        label="שם מלא"
                        value={fullName}
                        allowToChange={!loading}
                        setValue={setFullName}
                    />
                    <Input 
                        id={300}
                        label="מספר טלפון"
                        value={phoneNumber}
                        allowToChange={!loading}
                        setValue={setPhoneNumber}
                    />
                    <Dropdown title={"בחר קו אוטובוס"} 
                        textAddition="מספר קו:"
                        allowToCLick={!loading}
                        items={stationLineNumbers} onClick={(line)=> {
                        dispatch(updateBusLine(line.value))
                    }} />
                    {
                    busLine !== null ?
                        <Dropdown 
                            textAddition="זמן הגעה:"
                            allowToCLick={!loading}
                            title={"בחר זמן הגעה משוער"} items={showArrivalTimes(busLine)} onClick={(complain)=>{
                            dispatch(updateBusTime(complain.id))
                        }}/> : null
                    }
                    {
                        busTime !== null ?
                        <Dropdown 
                            allowToCLick={!loading}
                            title={"בחר תלונה"} items={COMPLAINTS} onClick={(complain)=>{
                            dispatch(updateComplain(complain.value))
                        }}/> : null
                    }
                    {
                        busLine !== null && complain !== null && busTime !== null ?
                        <>
                        <Input 
                            id={500}
                            allowToChange={!loading}
                            label="הערות נוספות"
                            value={freeText}
                            setValue={(newValue) => dispatch(updateFreeText(newValue))} />
                        <EmergencyButton text='הגשה' onClick={()=>{submitComplain()}} style={{
                            "width": "100%", 
                            "maxWidth": "256px", 
                            "padding": "0px"}}
                            textStyle={{"padding": "16px"}}
                            />
                        </> : null
                    }
                </Column>
            </Column>
        </Column>
    )
}

export default Complain