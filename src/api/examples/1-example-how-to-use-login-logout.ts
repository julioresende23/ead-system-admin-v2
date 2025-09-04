import { login, logout, isAuthenticated } from "@/api/auth-validation-api";
const email="";
const password="";
const { token } = await login({ email, password }); // salva AUTH_TOKEN
console.log("logado?"+token, isAuthenticated());          // true

logout();  