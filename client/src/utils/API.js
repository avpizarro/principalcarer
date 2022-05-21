import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all medication
  getMedication: function ()
  {
    return axios.get("/api/medication/");
  },
  // Deletes the medication with the given id
  deleteMedication: function (id)
  {
    return axios.delete("/api/medication/" + id);
  },
  // Saves a medication to the database
  saveMedication: function (clockData)
  {
    return axios.post("/api/medication/post", clockData);
  },
  // Gets all clocks
  getClocks: function ()
  {
    return axios.get("/api/clock/");
  },
  // Deletes the clock with the given id
  deleteClock: function (id)
  {
    return axios.delete("/api/clock/" + id);
  },
  // Saves a clock to the database
  saveClock: function (clockData)
  {
    return axios.post("/api/clock/post", clockData);
  },
  // Gets all transactions
  getTransactions: function ()
  {
    return axios.get("/api/budget/");
  },
  // Saves a transaction to the database
  saveTransaction: function (transactionData)
  {
    return axios.post("/api/budget/post", transactionData);
  },
  // Gets all tasks
  getTasks: function ()
  {
    return axios.get("/api/tasks/");
  },
  // Deletes the task with the given id
  deleteTask: function (id)
  {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a task to the database
  saveTask: function (taskData)
  {
    return axios.post("/api/tasks/post", taskData);
  },
  // Gets all shopping items
  getShopping: function ()
  {
    return axios.get("/api/shopping/");
  },
  // Deletes the shopping item with the given id
  deleteShopping: function (id)
  {
    return axios.delete("/api/shopping/" + id);
  },
  // Saves a shopping item to the database
  saveShopping: function (itemData)
  {
    return axios.post("/api/shopping/post", itemData);
  },
  // Gets all home images
  getHomeImages: function ()
  {
    return axios.get("/api/homeimage/");
  },
  // Gets all home images
  getNewestHomeImg: function ()
  {
    return axios.get("/api/homeimage/newest/");
  },
  // Deletes the home images with the given id
  deleteHomeImg: function (id)
  {
    return axios.delete("/api/homeimage/" + id);
  },
  // Saves a home image to the database
  saveHomeImg: function (itemData)
  {
    return axios.post("/api/homeimage/post", itemData);
  },
  uploadImage: function (itemData)
  {
    console.log("itemData", itemData);
    return axios.post("/api/upload", itemData);
  },
  getUploadedImages: function ()
  {
    return axios.get("/api/upload");
  },
  deleteUploadedImage: function (id)
  {
    return axios.delete("/api/upload/" + id)
  },
  getEvents: function ()
  {
    return axios.get("/api/calendar")
  },
  getEventById: function (id)
  {
    return axios.get("/api/calendar/event/" + id)
  },
  getEventsByDate: function (date)
  {
    return axios.get("/api/calendar/" + date)
  },
  addEvent: function (eventInfo)
  {
    return axios.post("/api/calendar/post", eventInfo)
  },
  updateEvent: function (id, eventInfo)
  {
    return axios.put("api/calendar/" + id, eventInfo)
  },
  removeEvent: function (id)
  {
    return axios.delete("api/calendar/" + id)
  }
};
