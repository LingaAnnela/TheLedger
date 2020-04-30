const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");
const clientCtrl = require("../controllers/clients.ctrl");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./backend/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    //we could throw the error by setting the first parameter to the error message!
    //Usually if we set the second parameter to false, which mean it does not fail the transaction until unless specified
    //but wont store the image on the server
    cb(null, false);
  }
};

var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 2 },
  fileFilter: fileFilter,
});

router.get("/", clientCtrl.get_all_clients);

router.get("/:clientId", clientCtrl.get_client_by_id);

// router.post('/', checkAuth, upload.single('clientImage'), clientCtrl.create_client);
router.post("/", upload.single("clientImage"), clientCtrl.create_client);

router.delete("/:clientId", checkAuth, clientCtrl.remove_client_by_id);

//Used to update the field but not to add the new fields! and the req.body should be array of items.
// EX: [ {"propName" : "email" , "value" : "sruthi@gmail.com"}]
router.patch("/:clientId", checkAuth, clientCtrl.update_client_by_id);

module.exports = router;
