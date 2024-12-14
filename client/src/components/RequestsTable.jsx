import Home from './Home';
import RequestsTableRow from './RequestsTableRow';

const RequestsTable = () => {
    const data = [
        {
            name: "Raaina",
            branch: "Btech CSE",
            year: 3,
            book: "Discreete Maths-1",
            dueDate: "6/12/2024",
        },
        {
            name: "Raaina",
            branch: "Btech CSE",
            year: 3,
            book: "Discreete Maths-1",
            dueDate: "6/12/2024",
        },
        {
            name: "Raaina",
            branch: "Btech CSE",
            year: 3,
            book: "Discreete Maths-1",
            dueDate: "6/12/2024",
        },
        
    ]
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

                {data.map((item, key) => (
                    <RequestsTableRow name={item.name} branch={item.branch} year={item.year} book={item.book} key={key} index={key}/>
                ))}

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

export default (RequestsTable);