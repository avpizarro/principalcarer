import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getMedicine: function () {
    return axios.get("/api/medication/");
  },
  // Deletes the book with the given id
  deleteMedicine: function (id) {
    return axios.delete("/api/medication/" + id);
  },
  // Saves a book to the database
  saveMedication: function (medicationData) {
    return axios.post("/api/books", medicationData);
  },
};
