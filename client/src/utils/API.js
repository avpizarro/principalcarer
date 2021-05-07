import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all medication
  getMedicine: function () {
    return axios.get("/api/medication/");
  },
  // Deletes the medication with the given id
  deleteMedicine: function (id) {
    return axios.delete("/api/medication/" + id);
  },
  // Saves a medication to the database
  saveMedication: function (clockData) {
    return axios.post("/api/medication", clockData);
  },
  // Gets all clocks
  getClocks: function () {
    return axios.get("/api/clock/");
  },
  // Deletes the clock with the given id
  deleteClock: function (id) {
    return axios.delete("/api/clock/" + id);
  },
  // Saves a clock to the database
  saveClock: function (clockData) {
    return axios.post("/api/clock", clockData);
  },

};
