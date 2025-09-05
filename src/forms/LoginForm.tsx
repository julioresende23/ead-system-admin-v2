import { useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BtnArrow from "../svg/BtnArrow";
import { login, getToken } from "@/api/auth-validation-api";

type Variant = "signin" | "signinApi";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required"),
    remember: yup.boolean().default(true),
  })
  .required();

type Props = {
  /** opcional: escolha qual endpoint usar em auth-validation-api */
  variant?: Variant;
  /** rota de redirecionamento após login */
  redirectTo?: string;
};

   const LoginForm = ({ variant = "signin", redirectTo = "/student-dashboard" }: Props) => {
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting, isSubmitSuccessful },
   } = useForm<FormData>({
      resolver: yupResolver(schema),
      defaultValues: useMemo<FormData>(
         () => ({ email: "", password: "", remember: true }),
         []
      ),
      mode: "onTouched",
   });

  const onSubmit = async (form: FormData) => {
    try {
      // Chama sua API de login
      const { token, data, user } = await login(
        { email: form.email, password: form.password },
        { variant }
      );
      console.log(data)
      // Se o usuário NÃO quiser "remember me", mova o token para sessionStorage
      if (!form.remember && typeof window !== "undefined") {
        const t = token ?? getToken(); // se o util já gravou em localStorage, recupere
        try {
          if (t) {
            sessionStorage.setItem("AUTH_TOKEN", t);
            localStorage.removeItem("AUTH_TOKEN");
            sessionStorage.setItem("USER_KEYS", JSON.stringify(user));
            localStorage.removeItem("USER_KEYS");
          }
        } catch {
          /* ignore */
        }
      }

      toast.success("Login successfully", { position: "top-center" });
      reset({ email: "", password: "", remember: form.remember });
      if(user.role === 'Instructor') {
         navigate('/instructor-dashboard');
      } else {
         navigate(redirectTo);
      }
   
    } catch (err: any) {
      // Tenta extrair mensagem amigável do backend
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Login failed. Please try again.";
      toast.error(apiMsg, { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account__form" noValidate>
      <div className="form-grp">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          type="email"
          placeholder="email"
          aria-invalid={!!errors.email || undefined}
          aria-describedby="email-error"
          autoComplete="email"
        />
        <p id="email-error" className="form_error">{errors.email?.message}</p>
      </div>

      <div className="form-grp">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password")}
          type="password"
          placeholder="password"
          aria-invalid={!!errors.password || undefined}
          aria-describedby="password-error"
          autoComplete="current-password"
        />
        <p id="password-error" className="form_error">{errors.password?.message}</p>
      </div>

      <div className="account__check">
        <div className="account__check-remember">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms-check"
            {...register("remember")}
          />
          <label htmlFor="terms-check" className="form-check-label">Remember me</label>
        </div>
        <div className="account__check-forgot">
          {/* Ajuste a rota se tiver uma página de recuperação */}
          <Link to="/registration">Forgot Password?</Link>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-two arrow-btn"
        disabled={isSubmitting}
        aria-busy={isSubmitting || undefined}
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
        <BtnArrow />
      </button>

      {/* feedback sutil pós-submit (opcional) */}
      {isSubmitSuccessful && <span className="sr-only">Login successful</span>}
    </form>
  );
};

export default LoginForm;