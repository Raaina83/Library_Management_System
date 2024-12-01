
const IssuedBooksTableRow = ({name, branch, year, book, dueDate, index}) => {
  return (
    <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{branch}</td>
        <td>{year}</td>
        <td>{book}</td>
        <td>{dueDate}</td>
    </tr>
  );
}

export default IssuedBooksTableRow;