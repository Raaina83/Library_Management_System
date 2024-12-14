import { useEffect, useState } from "react";
import IssuedBooksTableRow from "./IssuedBooksTableRow";

const IssuedBooksTable = () => {
    const [issuedBooks, setIssuedBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const data = await fetchData('http://localhost:8080/api/v1/user/books/issued');
            setIssuedBooks(data);
            // setLoading(false);
          } catch (error) {
            console.log(error);
            // setError(error);
            // setLoading(false);
          }
        }
    
        fetchData();
      }, []);
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
    <div className="overflow-x-auto">
        <table className="table table-lg text-black">
            <thead className="text-black text-lg">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Branch</th>
                <th>Year</th>
                <th>Issued Book</th>
                <th>Due Date</th>
            </tr>
            </thead>
            <tbody>
                {issuedBooks?.map((item, key) => (
                    <IssuedBooksTableRow name={item.name} book={item.book} branch={item.branch} year={item.year} dueDate={item.dueDate} key={key} index={key}/>
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
};

export default (IssuedBooksTable);