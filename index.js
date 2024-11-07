import {initializeApp, applicationDefault} from 'firebase-admin/app';
import {getMessaging} from "firebase-admin/messaging";
import express, {json} from "express";

process.env.GOOGLE_APPLICATION_CREDENTIALS;

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
});

initializeApp ({
  Credential: applicationDefault(),
  projectId: 'potion-for-creators'
});

// send notification

app.listen(3000, function() {
  console.log("Server started on port 3000");
});