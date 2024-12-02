import Home from './Home';
import './table.css'
const RequestsTable = () => {
  return (
    <div className="overflow-x-hidden">
        <table className="table table-lg text-black">
            <thead className="text-black text-lg">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Branch</th>
                <th>Year</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Request</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Btch CSE</td>
                <td>3rd</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>
                    <div className="flex gap-2">
                    <button>Approve</button>
                    <button className="bg-red-400">Reject</button>
                    </div>
                </td>
            </tr>
            <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Btech</td>
                <td>Zemlak,</td>
                <td>United States</td>
                <td>12/5/2020</td>
            </tr>
            <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Btech</td>
                <td>Carroll Group</td>
                <td>China</td>
                <td>8/15/2020</td>
            </tr>
            <tr>
                <th>4</th>
                <td>Marjy Ferencz</td>
                <td>Btech</td>
                <td>Rowe-Schoen</td>
                <td>Russia</td>
                <td>3/25/2021</td>
            </tr>
            <tr>
                <th>5</th>
                <td>Yancy Tear</td>
                <td>bnjkekqhg</td>
                <td>Wyman-Ledner</td>
                <td>Brazil</td>
                <td>5/22/2020</td>
            </tr>
            <tr>
                <th>6</th>
                <td>Irma Vasilik</td>
                <td>Editor</td>
                <td>Wiza, Bin</td>
                <td>Venezuela</td>
                <td>12/8/2020</td>
            </tr>
            <tr>
                <th>7</th>
                <td>Meghann Durtnal</td>
                <td>Staff </td>
                <td>Schuster</td>
                <td>Philippines</td>
                <td>2/17/2021</td>
            </tr>
            <tr>
                <th>8</th>
                <td>Sammy Seston</td>
                <td>Accountant I</td>
                <td>O Hara, Welch and Keebler</td>
                <td>Indonesia</td>
                <td>5/23/2020</td>
            </tr>
            <tr>
                <th>9</th>
                <td>Lesya Tinham</td>
                <td>Safety Technician IV</td>
                <td>Turner-Kuhlman</td>
                <td>Philippines</td>
                <td>2/21/2021</td>
            </tr>
            <tr>
                <th>10</th>
                <td>Zaneta Tewkesbury</td>
                <td>VP Marketing</td>
                <td>Sauer LLC</td>
                <td>Chad</td>
                <td>6/23/2020</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default Home()(RequestsTable);