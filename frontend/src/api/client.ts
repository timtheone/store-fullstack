import { Api } from "../apiClient/Api";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const apiClient = new Api({ baseUrl: API_URL });
export default apiClient;
