import Style from './TableData.module.css'

const RowTable = ({ rowData }) => {
  return (
    <td className={Style.tableTD}>{rowData}</td>
  )
}

const HeadTable = ({ headData }) => {
  return (
    <th className={Style.tableTH}>{headData}</th>
  )
}

const TableData = ({ data }) => {
  const keys = Object.keys(data[0])
  return (
    <div className={Style.tblDiv} >

      <table className={Style.tbl} >
        <thead className={Style.tableHead}>
          <tr className={Style.tableTR}>
            {
              keys.map((item, index) => (
                <HeadTable headData={item} key={index} />
              ))
            }
            <td style={{ "width": "4px" }} />
          </tr>
        </thead>
        {/* </table>
          <div className={Style.tblContentDiv}>
          <table className={Style.tbl} > */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {
                Object.keys(item).map((keyItem, keyIndex) => {
                  const rowData = item[keyItem];
                  if (rowData !== null) {
                    return <RowTable rowData={rowData.toString()} key={keyIndex} />
                  }
                })
              }
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  )
}

export default TableData