import Style from './page.module.css'
import Column from "@/components/Column"
import Text from '@/components/Text'
import Row from '@/components/Row';
import Divider from '@/components/Divider';
import TableData from '@/components/pages/home/TableData';
import BarChart from '@/components/pages/home/BarChart';
import misssusData from '@/assets/misssusData.json';
import negativeSamplingData from '@/assets/negativeSampling.json'




const App = () => {


  return (
    <Column padding={[32]} fitParent justifyContent='flex-start' gap={16} className={Style.main}>
      {/* <div style={{"position": "absolute", "top": "0", "left": "0", "zIndex": "0"}}>
        <BusBackground />
      </div> */}
      <Row fullWidth justifyContent='flex-start'>
        <Text text="Data" bold type="bigTitle" />
      </Row>
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Complaints collected from pilot" bold type="title" />
      </Row>
      <TableData data={misssusData} />
      <Column fullWidth alignItems='flex-start' padding={[16, 34]}>
        <Text text="Negative sampling we added (Opposite of complaints)" bold type="title" />
        <Text text="Busses that arrived on time" bold type="subTitle" />
      </Column>

      <TableData data={negativeSamplingData} />
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Free text complaints example" bold type="title" />
      </Row>
      <Column alignItems='center' fullWidth gap={16}>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />
          <Text bold text="אני חייל שצריך להגיע לבסיס ברמת הגולן בזמן וחייב להגיע לשאטל מירושלים חיכיתי בתחנה ושהאוטובוס עבר הוא סימנתי לו והוא המשיך בנסיעה והיה לו מקומות" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />
        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />
          <Text bold text="ברוב חוצפתו, נופף אלי בחזרה בתנועות שמבהירות שאיננו עוצר. חבל שיש נהגים כאלה. ביזיון ובושה" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />

          <Text bold text="גם איחר וגם עבר פה ולא עצר למרות שנפנפתי לו" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />

          <Text bold text="היו שלושה אנשים בתחנה. נפנפנו בידיים והוא פשוט התעלם והמשיך" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />

          <Text bold text="שוב. גם האחד לפניו לא הגיע. מה הבעיה שלכם????" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
      </Column>
      <Divider style={{ "margin": '16px' }} />
      <Row fullWidth justifyContent='flex-start' padding={[16, 0]}>
        <Text text="Statistics" bold type="bigTitle" />
      </Row>
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Mean comparison for each complaint type" bold type="title" />
      </Row>
      <Row fullWidth gap={32} style={{ "flexWrap": "wrap" }} justifyContent='flex-start' padding={[32, 0]}>
        <BarChart title="number of complaints" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[126, 25, 25, 36, 2]} />
        <BarChart title="Mean relative humidity" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[45.532, 47.88, 53.8, 65.75, 66.5]} />
        <BarChart title="Mean temperature (°C)" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[25.056, 25.18, 18.676, 16.711, 16.15]} />
        <BarChart title="Mean wind speed (m/s)" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[2.826, 2.16, 2.9, 2.522, 3.0]} />
        <BarChart title="Mean rainfall (mm)" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[0, 0, 0, 0, 0.05]} />
        <BarChart title="Mean route length" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[18.834, 18.792, 49.08, 19.656, 19.4]} />
        <BarChart title="Mean number of stations" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[34.667, 35.24, 26.12, 40.417, 46.5]} />
        <BarChart title="Mean weekly drives" labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[359.111, 390.96, 250.4, 319.0, 351.5]} />
        <BarChart title="Mean passengers number sum " labels={['On Time', 'Late', "Didn't stop", "Didn't arrive", "Other"]} values={[2.667, 2.36, 5.56, 2.806, 3]} />
      </Row>
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Mean comparison for each week day of compliants (without negative samples)" bold type="title" />
      </Row>
      <Row fullWidth gap={32} style={{ "flexWrap": "wrap" }} justifyContent='flex-start' padding={[32, 0]}>
        <BarChart title="Number of complaints for each week day" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[19, 11, 19, 13, 14, 6, 6]} />
        <BarChart title="Mean relative humidity" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[0.42105263157894735, 1.1818181818181819, 2.210526315789474, 3.0, 4.071428571428571, 4.5, 1.6666666666666667]} />
        <BarChart title="Mean temperature (°C)" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[67.73684210526316, 65.63636363636364, 54.10526315789474, 37.76923076923077, 66.57142857142857, 47.666666666666664, 49.333333333333336]} />
        <BarChart title="Mean wind speed (m/s)" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[2.8368421052631576, 2.1, 2.7421052631578946, 1.5846153846153848, 3.007142857142857, 2.2333333333333334, 3.016666666666667]} />
        <BarChart title="Mean rainfall (mm)" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[0.0, 0.03636363636363637, 0.005263157894736842, 0.0, 0.0, 0.0, 0.0]} />
        <BarChart title="Mean route length" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[31.93684210526316, 23.663636363636364, 34.33157894736842, 17.7, 28.657142857142855, 22.066666666666666, 26.683333333333334]} />
        <BarChart title="Mean number of stations" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[35.68421052631579, 38.18181818181818, 29.736842105263158, 35.69230769230769, 33.57142857142857, 40.5, 40.333333333333336]} />
        <BarChart title="Mean weekly drives" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[249.57894736842104, 400.0, 315.3157894736842, 384.84615384615387, 328.7857142857143, 274.1666666666667, 306.1666666666667]} />
        <BarChart title="Mean number of lines stopping at station " labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[37.10526315789474, 32.54545454545455, 28.894736842105264, 17.0, 27.285714285714285, 21.666666666666668, 32.666666666666664]} />
        <BarChart title="Mean daily number of passengers at station " labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[224.2828947631579, 248.08143940909093, 238.37280701578948, 175.98397436153846, 213.28571430214285, 202.64583333833335, 247.76736113333334]} />
        <BarChart title="Mean daily number of stops at station " labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[722.7894736842105, 670.5454545454545, 574.6842105263158, 612.6153846153846, 527.0, 493.8333333333333, 766.8333333333334]} />
      </Row>
      <Divider style={{ "margin": '16px' }} />
      <Row fullWidth justifyContent='flex-start' padding={[16, 0]}>
        <Text text="Results" bold type="bigTitle" />
      </Row>
      <Column fullWidth alignItems='flex-start' padding={[16, 32]}>
        <Text text="Machine learning models comparisons" bold type="title" />
        <Text text="Precision and recall work with binary lables. For this we converted all complaints into one label and non-complaint into another label" bold type="subTitle" />
      </Column>
      <Row fullWidth gap={32} style={{ "flexWrap": "wrap" }} justifyContent='flex-start' padding={[32, 0]}>
        <BarChart title="Accuracy" labels={['Random Forest', "XGBoost", "Decision Tree"]} values={[0.8, 0.84, 0.76]} />
        <BarChart title="Precision" labels={['Random Forest', "XGBoost", "Decision Tree"]} values={[0.774, 0.709, 0.742]} />
        <BarChart title="Recall" labels={['Random Forest', "XGBoost", "Decision Tree"]} values={[0.923, 0.846, 0.884]} />
        <BarChart title="F1 score" labels={['Random Forest', "XGBoost", "Decision Tree"]} values={[0.842, 0.772, 0.807]} />
      </Row>


    </Column>

  )
}

export default App
