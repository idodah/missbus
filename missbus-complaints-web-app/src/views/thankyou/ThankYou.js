// import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Column from "../../components/Column"
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton"
import Row from "../../components/Row"
import Text from "../../components/Text"

const ThankYou = () => {
    const navigate = useNavigate()
    return (
        <Column fullWidth mainAxis="flex-start" gap={16} padding={[32, 0, 0, 0]} style={{"height": "100%"}} >
            <Text text="תלונה הוגשה בהצלחה" bold type={'title'}/>
            <div style={{"height": "16px"}}></div>
            <EmergencyButton text='הגשת תלונה נוספת'
            style={{"width": "164px"}}
            textStyle={{"fontSize": "16px"}} 
            
            onClick={()=>{navigate("/complain", { replace: true })}}/>
            <EmergencyButton 
            style={{"width": "164px"}}
            text='חזרה לזמני אוטובוס' 
            textStyle={{"fontSize": "16px"}} 
            onClick={()=>{navigate("/home", { replace: true })}}/>
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

        </Column>
    )
}

export default ThankYou