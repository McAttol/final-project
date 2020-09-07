import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "./action-types";
import { getBooking, getRoomsByDate, loadBookingList } from "./booking-actions";

jest.dontMock("./booking-actions");
jest.mock("axios");
jest.mock("../dispatcher");

describe("Booking action", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("Should get booking list", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadBookingList();
    expect(axios.get.mock.calls[0][0]).toEqual("/api/booking/");
  });
});
