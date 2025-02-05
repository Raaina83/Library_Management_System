import { useEffect, useState } from 'react';
import RequestsTableRow from './RequestsTableRow';
import axios from 'axios';
import toast from 'react-hot-toast';
import { server } from '../constants/config';

const RequestsTable = () => {
    const [requests, setRequests] = useState(null);
    async function getRequests() {
        const {data} = await axios.get(`${server}/api/v1/librarian/getRequests`, 
            {
                withCredentials: true
            }
        );
        console.log("data", data);
        setRequests(data.requests);
    }

    const requestHandler = async({accept, requestId, userId}) => {
        
        const toastId = toast.loading("Sending Request...");
        try {
            const {data} = await axios.post(`${server}/api/v1/librarian/approveRequest`, {
                accept,
                requestId,
                userId
            }, {
                withCredentials: true
            });
            getRequests();
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
        async function getRequests() {
            const {data} = await axios.get(`${server}/api/v1/librarian/getRequests`, 
                {
                    withCredentials: true
                }
            );
            console.log("data", data);
            setRequests(data.requests);
        }
        getRequests();
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
                    <RequestsTableRow name={item.sender.name} branch={item.sender.branch} year={item.sender.year} book={item.bookId.title} key={key} index={item._id} handler = {requestHandler} no={key} userId={item.sender._id}/>
                ))}

            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>Book</th>
                <th>Requests</th>
            </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default (RequestsTable);