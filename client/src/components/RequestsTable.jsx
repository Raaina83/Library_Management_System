import { useEffect, useState } from 'react';
import RequestsTableRow from './RequestsTableRow';
import axios from 'axios';

const RequestsTable = () => {
    const [requests, setRequests] = useState(null);
    const requestHandler = async({accept, requestId}) => {
        try {
            const {data} = await axios.post('http://localhost:8080/api/v1/librarian/approveRequest', {
                requestId,
                accept
            }, {
                withCredentials: true
            });
            console.log("data",data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function getRequests() {
            const {data} = await axios.get('http://localhost:8080/api/v1/librarian/getRequests', 
                {
                    withCredentials: true
                }
            );
            console.log("data", data);
            setRequests(data.requests);
        }
        if(requests == null) getRequests();
    })

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
    <div className="overflow-x-hidden">
        <table className="table table-lg text-black">
            <thead className="text-black text-lg">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Branch</th>
                <th>Year</th>
                <th>Book</th>
                <th>Request</th>
            </tr>
            </thead>
            <tbody>

                {requests?.map((item, key) => (
                    <RequestsTableRow name={item.sender.name} branch={item.sender.branch} year={item.sender.year} book={item.bookId.title} key={key} index={item._id} handler = {requestHandler} no={key}/>
                ))}

            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>Book</th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default (RequestsTable);