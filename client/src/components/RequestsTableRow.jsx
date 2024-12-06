
const RequestsTableRow = ({name, branch, year, book, dueDate, index}) => {
    return (
      <tr>
          <th>{index+1}</th>
          <td>{name}</td>
          <td>{branch}</td>
          <td>{year}</td>
          <td>{book}</td>
          <td>{dueDate}</td>
          <td>
            <div className="flex gap-2">
                <button className='bg-green-400 px-4 py-2 rounded-md hover:shadow-md'>Approve</button>
                <button className="bg-red-400 px-4 py-2 rounded-md hover:shadow-lg">Reject</button>
            </div>
          </td>
      </tr>
    );
  }
  
  export default (RequestsTableRow);