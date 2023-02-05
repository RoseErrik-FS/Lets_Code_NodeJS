const express = require("express");
const router = express.Router();

// Calling http://localhost:3000/exercise with a GET Request
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Success - GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Calling http://localhost:3000/exercise/34 with a Get by ID request
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Success - GET by ID",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Calling http://localhost:3000/exercise/12 with a patch request
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Success - PATCH",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Calling http://localhost:3000/exercise with a post request
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Success - POST",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Calling http://localhost:3000/exercise/12 with a delete request
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "Success - DELETE",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
