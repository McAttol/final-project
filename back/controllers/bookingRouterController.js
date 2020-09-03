function bookingController(RoomsDetail) {
  function get(req, res) {
    const query = {};
    if (req && req.query && req.query.date) {
      query.date = req.query.date;
    }

    RoomsDetail.find(query, (error, bookings) => {
      if (error) {
        res.send(error);
      }
      res.json(bookings);
    });
  }

  return { get };
}

module.exports = bookingController;
