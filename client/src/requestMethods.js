import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNThlYTI4ODQ0MmNjMDg2YWYxNTk2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzA0NDQ0NiwiZXhwIjoxNjY3MzAzNjQ2fQ.qHyZosQWOmGXQkJzL-Bgkcpq1rgpsH5bLY0OO6L2gdQ";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});