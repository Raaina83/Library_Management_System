
const IssuedBooksTableRow = ({name, branch, year, book, dueDate, index, handler, bookIssueId, userId}) => {
  return (
    <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{branch}</td>
        <td>{year}</td>
        <td>{book}</td>
        <td>{dueDate}</td>
        <td>
          <button className='bg-green-400 px-4 py-2 rounded-md hover:shadow-md' onClick={() => handler({bookIssueId, userId})}>Return</button>
        </td>
    </tr>
  );
}

export default (IssuedBooksTableRow);