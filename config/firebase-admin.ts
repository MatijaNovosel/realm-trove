import { initializeApp, cert } from "firebase-admin/app";

const app = initializeApp({
  credential: cert(JSON.parse(process.env.SERVICE_ACCOUNT))
});

export default app;
