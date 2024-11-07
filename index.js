import {initializeApp, applicationDefault} from 'firebase-admin/app';
import {getMessaging} from "firebase-admin/messaging";
import express, {json} from "express";
import cors from "cors";

process.env.GOOGLE_APPLICATION_CREDENTIALS;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cors({
    methods: ["GET", "POST","DELETE", "UPDATE", "PUT", "PATCH" ],
  })
);

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

initializeApp ({
  Credential: applicationDefault(),
  projectId: 'potion-for-creators'
});

// send notification
app.post('/send', function (req, res) {
  const recivedToken = req.body.fcmToken;
  const message = {
    notification: {
      title: "Push server Notifi",
      body: "Test Notification in nodejs Server"
    },
    token: "e5L114eAQNea-FqcfeqAPO:APA91bEyEY9tYp7i0an64T_HoeOrYHS09tG4SqreTkHYFR5rZKRo1zFjqzCj7j5H_sS2RzJdqQZZg7iu3p_lplx5IPEk1jgDplQSRklYCUfWLTfzaoslZjQ"
  }
  getMessaging()
  .send(message)
  .then((response) => {
    res.status(200).json({
      message: "Sucessfully send message",
      token: recivedToken,
    });
    console.log("Sucessfully send message", response);
  })
  .catch((error) => {
    res.status(400);
    res.send(error);
    console.log("Error sending message", error);
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});