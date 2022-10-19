import { initializeApp, cert } from "firebase-admin/app";
import admin from "firebase-admin";

if (admin.apps.length === 0) {
  initializeApp({
    credential: cert(JSON.parse(process.env.SERVICE_ACCOUNT))
  });
}

export default admin.app();
