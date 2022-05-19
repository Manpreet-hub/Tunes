import axios from "axios";

export const loginService = (data) => axios.post("/api/auth/login", data);
export const signUpService = (data) => axios.post("/api/auth/signup", data);
