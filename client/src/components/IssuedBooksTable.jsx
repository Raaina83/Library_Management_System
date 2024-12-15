import { useEffect, useState } from "react";
import IssuedBooksTableRow from "./IssuedBooksTableRow";
import axios from "axios";
import toast from "react-hot-toast";

const IssuedBooksTable = () => {
    const [issuedBooks, setIssuedBooks] = useState([]);

    const returnHandler = async({bookIssueId, userId}) => {
      const toastId = toast.loading("Sending Request...");
      try {
          const {data} = await axios.post('http://localhost:8080/api/v1/librarian/returnBook', {
              bookIssueId,
              userId
          }, {
              withCredentials: true
          });
          toast.success(data?.message, {
              id: toastId
          });

      } catch (error) {
          console.log(error)
          toast.error(error?.response?.data?.message || "Something went wrong", {
              id: toastId
            })
      }
  }

    useEffect(() => {
        async function fetchData() {
          try {
            const {data} = await axios.get('http://localhost:8080/api/v1/user/books/issued', {
              withCredentials: true
            });
            console.log("issue",data);
            setIssuedBooks(data.issuedBooks);
            // setLoading(false);
          } catch (error) {
            console.log(error);
            // setError(error);
            // setLoading(false);
          }
        }
    
        fetchData();
      }, []);
    // const data = [
    //     {
    //         name: "Raaina",
    //         branch: "Btech CSE",
    //         year: 3,
    //         book: "Discreete Maths-1",
    //         dueDate: "6/12/2024",
    //     },
    //     {
    //         name: "Raaina",
    //         branch: "Btech CSE",
    //         year: 3,
    //         book: "Discreete Maths-1",
    //         dueDate: "6/12/2024",
    //     },
    //     {
    //         name: "Raaina",
    //         branch: "Btech CSE",
    //         year: 3,
    //         book: "Discreete Maths-1",
    //         dueDate: "6/12/2024",
    //     },
    // ]
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
                <th>Return</th>
            </tr>
            </thead>
            <tbody>
                {issuedBooks?.map((item, key) => (
                    <IssuedBooksTableRow name={item.borrower.name} book={item.bookId.title} branch={item.borrower.branch} year={item.borrower.year} dueDate={item.borrower.till} key={key} index={key} handler={returnHandler} bookIssueId={item._id} userId={item.borrower._id}/>
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
                <th>Return</th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
};

export default (IssuedBooksTable);