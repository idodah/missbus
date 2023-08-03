import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Column from '../Column'
import EmergencyButton from '../EmergencyButton'
import Row from '../Row'
import Text from '../Text'

const TopBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {stationId, stationName} = useSelector(state => state.station)
    console.log(location)
    return (
        <Column color='#13181B' crossAxis='flex-end' padding={[8, 16]} gap={8} style={{"position": "relative", "height": "144px"}}> 
            {
                location.pathname !== '/complain' && location.pathname !== '/thankyou' ?
                <EmergencyButton size={16} width={"100px"} text='הגשת תלונה' onClick={()=>{navigate('/complain')}} 
                style={{"position": "absolute", "top":"16px", "left": "16px"}}/> : null
            }
            <Text text='מערכת תלונות' type='subTitle' color='white' bold/>
            <Column crossAxis='flex-end' gap={8} padding={[16, 0]}>
                <Row gap={4}>
                    <Text text={stationId ? stationId : 'XXXXXXXXX'} color='gray' bold/>
                    <Text text=':מספר תחנה ' color='white' bold/>
                </Row>
                <Row gap={4}>
                    <Text text={stationName ? stationName : 'XXXXXXXXX'} color='gray' bold/>
                    <Text text=':שם תחנה ' color='white' bold/>
                </Row>
            </Column>
        </Column>
    )
}

export default TopBar