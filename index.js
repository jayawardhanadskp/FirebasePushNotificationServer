import {initializeApp, applicationDefault} from 'firebase-admin/app';
import {getMessaging} from "firebase-admin/messaging";
import express, {json} from "express";

initializeApp ({
  Credential: applicationDefault(),
  projectId: 'potion-for-creators'
});