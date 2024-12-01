
const BookReport = () => {
  return (
    <div>
        <div>Book report</div>
        <table className="table table-lg text-black">
            <thead className="text-black text-lg">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Issued Date</th>
                <th>Return Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                <th>1</th>
                <td>Discreete Maths-1</td>
                <td>29/11/2024</td>
                <td>10/12/2024</td>
                <td>Returned</td>
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>Status</th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default BookReport