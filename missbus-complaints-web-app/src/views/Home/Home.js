
import React from 'react'
import Column from '../../components/Column/Column'
import Row from '../../components/Row'
import Text from '../../components/Text'
// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getStringFromDate } from '../../utils'
import { AGENCY_TO_COLOR } from '../../constants'


const LineBox = ({line, agency}) => {

    return (
        <Row  style={{"height": "72px", "width": "112px"}} color={'#13181B'} mainAxis='flex-start' border>
            <Row style={{"width": "100%"}}>
                <Text text={line} color='white' bold type='title'/>
            </Row>
            <Column style={{"width": "16px", "height": "100%", "backgroundColor": AGENCY_TO_COLOR[agency]}} />

        </Row>
    )

}

const LineInfo = ({arr}) => {
    const now = Date.now()
    arr = arr.filter(itm => itm > now)
    const currentArrive = getStringFromDate(arr[0])
    const nextArrive = getStringFromDate(arr[1])
    return (
        <Column style={{"height": "72px"}} fullWidth color={'#13181B'} border padding={[16]}>
            {currentArrive && <Text text={`${currentArrive}`} color='white' type='normal' bold/>}
            {nextArrive && <Text text={`${nextArrive}`} color='white' type='normal' bold/>}
            {!(currentArrive || currentArrive) ? 
            <Text text={`אין יותר קווים היום`} color='darkGray' type='normal' bold/> : null
        
        }
            
        </Column>
    )
}


const Home = () => {

    // const navigate = useNavigate()
    const {stationLines} = useSelector(state => state.station)
    

    return (
        <Column fullWidth mainAxis='flex-start' style={{"height": "calc(100% - 144px)"}} padding={[16, 0]} gap={[16]} color={'white'}>
            <Column fullWidth padding={[16]} mainAxis='flex-start' gap={16} style={{"overflowY": "auto", "height": "100%"}} >
                <Row gap={16} fullWidth>
                <Column fullWidth>
                    <Text text={"זמני הגעה קרובים"} bold />
                </Column>
                    <Column style={{"width": "96px"}}>
                        <Text text={"מספר קו"} bold/>
                    </Column>
                </Row>
                {
                    Object.keys(stationLines).map((item, index) => { 
                        return (
                            <Row gap={16} fullWidth onClick={
                                ()=>{}//{navigate(`line/${item}`)}
                                } hoverEffect key={index}>
                                <LineInfo arr={stationLines[item].arrival_times}/>
                                <LineBox line={item} agency={stationLines[item].line_agency}/>
                            </Row>
                        )
                    })
                }


            
            </Column>
        </Column>
    )
}

export default Home