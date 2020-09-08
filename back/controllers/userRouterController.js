function bookingController(RoomsDetail) {
  function get(req, res) {
    if (req.params && req.params.bookingDate) {
      const date = +req.params.bookingDate;
      RoomsDetail.find({ date }, (error, availability) => {
        if (error) {
          res.status(404);
          res.send("No hay!");
        } else {
          res.status(200);
          res.json(availability);
        }
      });
    } else {
      res.status(404);
      res.send("No hay!");
    }
  }
  function getList(req, res) {
    const bookingList = {};
    RoomsDetail.find(bookingList, (error, bookings) => {
      if (error) {
        res.status(404);
        res.send("No hay!");
      } else {
        res.json(bookings);
      }
    });
  }
  return { get, getList };
}

module.exports = bookingController;
