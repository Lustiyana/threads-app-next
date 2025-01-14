/** @format */

import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 100,
});
