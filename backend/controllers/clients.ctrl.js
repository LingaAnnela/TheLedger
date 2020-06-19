const mongoose = require("mongoose");
const Client = require("../models/client.model");

exports.get_all_clients = (req, res, next) => {
  Client.find()
    .select("firstName lastName email phoneNo displayPic _id")
    .exec()
    .then((docs) => {
      if (docs) {
        const response = {
          count: docs.length,
          clients: docs.map((doc) => {
            return {
              id: doc._id,
              firstName: doc.firstName,
              lastName: doc.lastName,
              email: doc.email,
              phoneNo: doc.phoneNo,
              displayPic: doc.displayPic,
              request: {
                type: "GET",
                url: "http://localhost:3000/api/clients/" + doc._id,
              },
            };
          }),
        };
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: `The clients information is not found`,
          clients: docs,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.get_client_by_id = (req, res, next) => {
  const id = req.params.clientId;
  Client.findById(id)
    .select("firstName lastName email phoneNo displayPic _id")
    .exec()
    .then((doc) => {
      console.log("response : " + doc);
      if (doc) {
        res.status(200).json({
          message: `Client information with ID : ${id}`,
          client: doc,
        });
      } else {
        res.status(404).json({
          message: `No Client information is found with ID : ${id}`,
        });
      }
    })
    .catch((error) => {
      console.log("error : " + error);
      res.status(500).json({
        message: error,
      });
    });
};

exports.create_client = (req, res, next) => {
  console.log('::: ---- ::::: ', req.file);
  const client = new Client({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    // diplayPic : req.file.path
  });
  console.log("client : " + client.diplayPic);
  client
    .save()
    .then((doc) => {
      console.log("Added : " + doc.displayPic);
      res.status(201).json({
        message: "Client added successfully!",
        client: {
          id: doc._id,
          firstName: doc.firstName,
          lastName: doc.lastName,
          email: doc.email,
          phoneNo: doc.phoneNo,
          displayPic: doc.displayPic,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/clients/" + doc._id,
          },
        },
      });
    })
    .catch((error) => {
      console.log("error : " + error);
      res.status(500).json({
        error: error,
      });
    });
};

exports.remove_client_by_id = (req, res, next) => {
  const id = req.params.clientId;
  Client.deleteOne({
    _id: id,
  })
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.update_client_by_id = (req, res, next) => {
  const id = req.params.clientId;
  const updateOps = {};
  for (const [key, value]  of Object.entries(req.body)) {
    updateOps[key] = value;
  }
  console.log(': 1 : ', updateOps);
  Client.updateOne(
    {
      _id: id,
    },
    {
      $set: updateOps,
    }
  )
    .exec()
    .then((doc) => {
      console.log(': : ', doc._id);
      res.status(200).json({
        message: `Updated succesufully`,
        client: {
          // ?? 
          ...updateOps,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/clients/" + doc._id,
          },
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};
