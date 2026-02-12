import express from "express";

const router = express.Router();

router.post("/test", (req, res) => {
  console.log("GitHub webhook Received");
  console.log(req.body);

  res.status(200).json({
    received: true
  });
});

export default router;
