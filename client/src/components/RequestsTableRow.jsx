
const RequestsTableRow = ({name, branch, year, book, index, handler, no, userId}) => {
    return (
      <tr>
          <th>{no+1}</th>
          <td>{name}</td>
          <td>{branch}</td>
          <td>{year}</td>
          <td>{book}</td>
          <td>
            <div className="flex gap-2">
                <button className='bg-green-400 px-4 py-2 rounded-md hover:shadow-md' onClick={() => handler({requestId: index, accept: true, userId})}>Approve</button>
                <button className="bg-red-400 px-4 py-2 rounded-md hover:shadow-lg" onClick={() => handler({requestId: index, accept: false, userId})}>Reject</button>
            </div>
          </td>
      </tr>
    );
  }
  
  export default (RequestsTableRow);