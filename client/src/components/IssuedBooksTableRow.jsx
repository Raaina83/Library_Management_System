import { extractDate } from "../utils/extractDate";

const IssuedBooksTableRow = ({name, branch, year, book, dueDate, index, handler, bookIssueId, userId, email, emailHandler}) => {
  const modifiedDueDate = extractDate(dueDate);
  return (
    <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{branch}</td>
        <td>{year}</td>
        <td>{book}</td>
        <td>{modifiedDueDate}</td>
        <td>
          <button className='bg-green-500 px-4 py-2 rounded-md hover:shadow-md' onClick={() => handler({bookIssueId, userId})}>Return</button>
        </td>
        <td>
          <button className='bg-red-500 px-4 py-2 rounded-md hover:shadow-md' onClick={() => emailHandler({email, book, dueDate})}>Send Email</button>
        </td>
    </tr>
  );
}

export default (IssuedBooksTableRow);