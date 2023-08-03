import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import Row from '../../components/Row'
import { fetchStation } from '../../store/station/station.slice'



const Splash = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading, stationId} = useSelector(state => state.station)
    const params = useParams()
    useEffect(()=> {
        dispatch(fetchStation({stationId: params.stationId}))
    // eslint-disable-next-line
    }, [dispatch])

    useEffect(()=>{
        if (!loading && stationId !== null){
            navigate('/home')
        }
    // eslint-disable-next-line
    }, [loading, stationId])
    return (
        <Layout fullWidth style={{"height": "100%"}} color='white'>
            <img 
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/missbus-a70db.appspot.com/o/missbus.png?alt=media&token=7fe9ad13-fc94-4b2a-990c-4b7bf140e18b"/>
            <Row style={{"position": "absolute", "bottom": "0"}}>
                <img 
                    alt=""
                    width={144}
                    src="https://firebasestorage.googleapis.com/v0/b/missbus-a70db.appspot.com/o/image%2017.png?alt=media&token=dbb7217b-e57f-43e1-b1fe-71562025d81b"/>
                <img 
                    alt=""
                    width={64}
                    src="https://firebasestorage.googleapis.com/v0/b/missbus-a70db.appspot.com/o/logo_tachbura2%20(1)%202.png?alt=media&token=1ebb1a7f-0331-4317-85e7-e78ff05d3f89"
                />
                <img 
                    alt=""
                    width={96}
                    src="https://firebasestorage.googleapis.com/v0/b/missbus-a70db.appspot.com/o/image%2016.png?alt=media&token=1ee0663a-13d3-4c2f-951b-fc070b905a6a"/>
            </Row>
        </Layout>
    )
}

export default Splash