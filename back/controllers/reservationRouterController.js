function reservationController(Reservation) {
  function getDetail(req, res) {
    if (req.params && req.params.reservationNumber) {
      const reservation = +req.params.reservationNumber;
      Reservation.find(
        { reservationNumber: reservation },
        (error, availability) => {
          if (error) {
            res.status(404);
            res.send("Not found");
          } else if (reservation === 0) {
            res.status(404);
            res.send("reservation not found");
          } else {
            res.status(200);
            res.json(availability);
          }
        }
      );
    } else {
      res.status(404);
      res.send("not found");
    }
  }
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
    const { reservation } = req;
    if (reservation) {
      reservation.name = req.body.name;
      reservation.reservationNumber = req.body.reservationNumber;
      reservation.roomNumber = req.body.roomNumber;
      reservation.arrivalDate = req.body.arrivalDate;
      reservation.departudeDate = req.body.departudeDate;
      reservation.familyName = req.body.familyName;
      reservation.name = req.body.name;
      reservation.roomType = req.body.roomType;
      reservation.pension = req.body.pension;
      reservation.daysTotal = req.body.daysTotal;
      reservation.passportNumber = req.body.passportNumber;
      reservation.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.json(reservation);
        }
      });
    }
  }
  return { getDetail, getList, saveRes, upLoad };
}

module.exports = reservationController;
