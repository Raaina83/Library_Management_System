import BookIssue from "../models/BookIssue.js";
import Request from "../models/Request.js";

const getAllRequest = async(req, res) => {
    const pendingRequests = await Request.find({status: "pending"});

    return res
            .status(200)
            .json({
                success: true,
                requests: pendingRequests
            }) 
}

const approveRequest = async(req, res) => {
    const {accept, requestId} = req.body;
    const request = await Request.findById(requestId).populate("bookId");

    if(!request) return new Error("Request does not exist");

    if(!accept) {
        await request.deleteOne();

        return res
            .status(200)
            .json({
                success: true,
                message: "Book Issue Rejected",
            });
    }
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);

    await Promise.all([
        BookIssue.create({
            bookId: request.bookId,
            borrower: request.sender,
            from : new Date(),
            till: endDate,
        }),
        request.deleteOne()
    ]);

    return res
        .status(200)
        .json({
            success: true,
            message: "Book Issue Request Approved",
            sender: request.sender,
        });
}

export {getAllRequest, approveRequest};