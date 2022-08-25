import { useState } from "react"

interface Data {
  name: string
  number1: number
  number2: number
  status: string
}

export default function TableLogic() {

  const [tableData, setTableData] = useState([
    {name: "John Doe", number1: 133742069, number2: 694201337,  status: "Waiting ⌛"},
    {name: "Jane Doe", number1: 420691337, number2: 694201337,  status: "Waiting ⌛"},
    {name: "Lee Doe", number1: 694201337, number2: 694201337,  status: "Waiting ⌛"}
  ])

  const [changedStatus, setChangedStatus] = useState(false)

  const waitingClass = "border-2 border-blue-800 rounded-md bg-transparent text-blue-800 text-center font-bold"
  const agreeClass = "border-2 border-green-800 rounded-md bg-transparent text-green-800 text-center font-bold"
  const disagreeClass = "border-2 border-red-800 rounded-md bg-transparent text-red-800 text-center font-bold"

  function changeStatus(resultData: Data, status: string){
    if(resultData){
      (resultData.status === 'Waiting ⌛' || resultData.status !== status) ? 
      resultData.status = status : 
      resultData.status = resultData.status = 'Waiting ⌛'

      setTableData([...tableData])

      setChangedStatus(true)

    }
  }

  function saveChanges(){
    setChangedStatus(false)
  }

  return (
    <div className="rounded-lg shadow-lg px-4 py-4 bg-white">
      <table className="table-fixed m-0">
        <tbody>
        <tr>
          <th>Name</th>
          <th>First Number</th>
          <th>Second Number</th>
          <th className="text-center">Status</th>
          <th className="text-center">Agree</th>
          <th className="text-center">Disagree</th>
        </tr>
        {
          tableData.map(data => {
            return (
              <tr key={data.number1}>
                <td>{data.name}</td>
                <td>{data.number1}</td>
                <td>{data.number2}</td>
                <td>
                  <div className={
                    data.status === 'Waiting ⌛' ? waitingClass :
                    data.status === 'Agreed ✔' ? agreeClass :
                    data.status === 'Disagreed ❌' ? disagreeClass : ''
                }> {data.status}</div>
                </td>
                <td className="align-middle">
                  <div className="flex justify-center">
                  <input checked={data.status === 'Agreed ✔'} onChange={() => changeStatus(data, 'Agreed ✔')} className="w-6 h-6" type="checkbox" />
                  </div>
                </td>
                <td className="align-middle">
                  <div className="flex justify-center">
                    <input checked={data.status === 'Disagreed ❌'}  onChange={() => changeStatus(data, 'Disagreed ❌')} className="w-6 h-6" type="checkbox" />
                  </div>
                </td>
              </tr>
          )})
        }
        </tbody>
      </table>

        <div>
          <h4>The Object:</h4>
          <div className="prose-xl bg-slate-800/90 text-white p-4 rounded-lg mb-4 text-center text-base">
            <div>
              {JSON.stringify(tableData[0])}          
            </div>
            <div>
              {JSON.stringify(tableData[1])}          
            </div>
            <div>
              {JSON.stringify(tableData[2])}          
            </div>
          </div>
        </div>

      <div className="flex justify-end">
        <button onClick={() => saveChanges()}  disabled={changedStatus === false} className="bg-blue-500 text-white font-semibold rounded-md px-2.5 py-0.5 disabled:bg-slate-300">Save Changes</button>
      </div>
    </div>
  )
}