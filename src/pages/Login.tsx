import * as z from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Link } from "react-router";

import profileImage1 from "../assets/profile1.jpg";
import profileImage2 from "../assets/profile2.jpg";
import profileImage3 from "../assets/profile3.jpg";
import profileImage6 from "../assets/profile6.jpg";
import profileImage8 from "../assets/profile8.jpg";
import profileImage9 from "../assets/profile9.jpg";

const formSchema = z.object({
  username: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
})

type FormData = z.infer<typeof formSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {console.log(data)};

  return (
    <div className="relative flex min-h-[58rem] w-full flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div className="absolute left-[10%] top-[20%] hidden h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img src={profileImage3} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="absolute left-[18%] top-[45%] hidden h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img src={profileImage1} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="absolute left-[8%] top-[62%] hidden h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img src={profileImage2} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="absolute left-[20%] top-[30%] hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 md:flex">
        <span className="text-xs text-yellow-500">◆</span>
      </div>

      <div className="absolute left-[14%] top-[36%] h-2 w-2 rounded-full bg-pink-200" />
      <div className="absolute left-[24%] top-[60%] h-3 w-3 rounded-full bg-[var(--light-green)] opacity-40" />

      <div className="absolute right-[12%] top-[22%] hidden h-13 w-13 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img src={profileImage6} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="absolute right-[7%] top-[44%] hidden h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img src={profileImage8} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="absolute right-[18%] top-[58%] hidden h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img src={profileImage9} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="absolute right-[20%] top-[34%] hidden h-8 w-8 items-center justify-center rounded-full bg-emerald-50 md:flex">
        <span className="text-xs text-emerald-500">◆</span>
      </div>

      <div className="absolute right-[10%] top-[32%] h-3 w-3 rounded-full bg-yellow-200" />
      <div className="absolute right-[14%] top-[68%] h-2 w-2 rounded-full bg-purple-200" />

      <section className="relative z-10 flex w-full max-w-[420px] flex-col items-center">
        <h1 className="text-center text-5xl font-medium leading-[1.05] tracking-[-1.5px] text-black">
          Welcome back
        </h1>

        <p className="mt-4 text-center text-sm text-[var(--text-light)]">
          Log in to continue your job search.
        </p>

        <div className="mt-9 w-full rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-neutral-700">
                Email
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                <svg className="h-4 w-4 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                  {...register("username")}
                />
              </div>
              {errors.username && (
                <p className="text-xs text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold text-neutral-700">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[11px] font-medium !text-[var(--light-green)] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                <svg className="h-4 w-4 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                  {...register("password")}
                />
                <button
                  type="button"
                  aria-label="Show password"
                  className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-600"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="mt-2 flex h-11 w-full cursor-pointer items-center justify-center rounded-full bg-[var(--light-green)] text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.35)] active:translate-y-0 active:opacity-70"
            >
              Log in
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold !text-[var(--light-green)] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
}