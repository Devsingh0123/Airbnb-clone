import Booking from "../model/booking.model.js";
import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

// create booking
export const createBooking = async (req, res) => {
  try {
    let { id } = req.params;

    let { checkIn, checkOut, totalRent } = req.body;

    let listing = await Listing.findById(id);
    if (!listing) {
      return res
        .status(404)
        .json({ message: "Listing is not found while create booking" });
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      return res
        .status(400)
        .json({ message: "pleasse select a vaild checkIn/checkOut date" });
    }
    if (listing.isBooked) {
      return res.status(400).json({ message: "Listing already booked" });
    }

    let booking = await Booking.create({
      checkIn,
      checkOut,
      totalRent,
      host: listing.host,
      guest: req.userId,
      listing: listing._id,
    });

    let user = await User.findByIdAndUpdate(
      req.userId,
      {
        $push: { booking: listing },
      },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: "user is not found while create booking" });
    }
    listing.guest = req.userId;
    listing.isBooked = true;

    await listing.save();
    return res.status(201).json(booking);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error while booking creation ${error}` });
  }
};

// cancel booking

export const cancelBooking = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { isBooked: false });

    let user = await User.findByIdAndUpdate(listing.guest, {
      $pull: { booking: listing._id },
    });

    if (!user) {
      return res
        .statusa(404)
        .json({ message: "user not found while cancel the booking" });
    }

    return res.statusa(404).json({ message: "booking cancelled" });
  } catch (error) {
    return res
      .statusa(404)
      .json({ message: `error while cancel the booking ${error}` });
  }
};
