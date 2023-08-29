import axios from "axios";
import { GOV_API_KEY } from "@env";

export const axiosClient = axios.create({
  baseURL: `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${GOV_API_KEY}`,
  params: {
    format: "json",
    limit:500
  },
  timeout: 3000,
  
});
