/**
 * Firebase Configuration
 * 
 * This file uses environment variables for security.
 * All sensitive credentials are loaded from .env.local (local dev) or Vercel Dashboard (production).
 * 
 * Never hardcode API keys or other sensitive information in this file.
 */

import { initializeApp } from "firebase/app";

/**
 * Firebase configuration using environment variables
 * 
 * Required environment variables (set in .env.local or Vercel Dashboard):
 * - VITE_FIREBASE_API_KEY: Firebase API Key
 * - VITE_FIREBASE_AUTH_DOMAIN: Firebase Auth Domain
 * - VITE_FIREBASE_PROJECT_ID: Firebase Project ID
 * - VITE_FIREBASE_STORAGE_BUCKET: Firebase Storage Bucket
 * - VITE_FIREBASE_MESSAGING_SENDER_ID: Firebase Messaging Sender ID
 * - VITE_FIREBASE_APP_ID: Firebase App ID
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase with secure configuration
export const app = initializeApp(firebaseConfig);