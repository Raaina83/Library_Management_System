import Rating from "../models/Rating.js";

export const addRating = async (req, res) => {
    try {
        const { rating } = req.body;

        if (!rating) {
            return res.status(400).json({ success: false, message: "Rating is required" });
        }

        const newRating = new Rating({
            rating,
            owner: req.user._id, // Assuming req.user is set by authentication middleware
        });

        await newRating.save();

        res.status(201).json({
            success: true,
            message: "Rating added successfully",
            rating: newRating,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getUserRatings = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming req.user is set by authentication middleware
        const ratings = await Rating.find({ owner: userId });

        if (!ratings.length) {
            return res.status(404).json({ success: false, message: "No ratings found" });
        }

        res.status(200).json({
            success: true,
            ratings,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteRating = async (req, res) => {
    try {
        const { ratingId } = req.params;

        const rating = await Rating.findOneAndDelete({ _id: ratingId, owner: req.user._id });

        if (!rating) {
            return res.status(404).json({ success: false, message: "Rating not found or unauthorized" });
        }

        res.status(200).json({
            success: true,
            message: "Rating deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};