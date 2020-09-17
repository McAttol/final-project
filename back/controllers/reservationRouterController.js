function reservationController(Reservation) {
  function getList(req, res) {
    const reservationList = {};
    Reservation.find(reservationList, (error, reservations) => {
      if (error) {
        res.status(404);
        res.send("Not found");
      } else {
        res.json(reservations);
      }
    });
  }
  function getDetail(req, res) {
    res.send(req.available);
  }
  function saveRes(req, res) {
    const reservation = new Reservation(req.body);
    if (!req.body.familyName) {
      res.status(400);
      res.send("Family name is require");
    } else {
      reservation.save();
      res.status(201);
      res.json(reservation);
    }
  }

  function upLoad(req, res) {
    const { availability } = req;
    if (availability) {
      availability.name = req.body.name;
      availability.reservationNumber = req.body.reservationNumber;
      availability.roomNumber = req.body.roomNumber;
      availability.arrivalDate = req.body.arrivalDate;
      availability.departureDate = req.body.departureDate;
      availability.familyName = req.body.familyName;
      availability.name = req.body.name;
      availability.roomType = req.body.roomType;
      availability.pension = req.body.pension;
      availability.daysTotal = req.body.daysTotal;
      availability.passportNumber = req.body.passportNumber;
      availability.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json(availability);
        }
      });
    }
  }
  return { getDetail, getList, saveRes, upLoad };
}

module.exports = reservationController;
