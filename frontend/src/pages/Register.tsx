// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Link } from "react-router";
// import { useNavigate } from "react-router";

// import React, { useState } from "react";

// import { registerUser } from "../services/auth.service";

// const formSchema = z
//   .object({
//     email: z.email({ message: "Invalid email address!" }),
//     password: z
//       .string()
//       .min(1, { message: "Password is required" })
//       .min(8, { message: "Password need to be at least 8 characters" }),
//     confirmPassword: z
//       .string()
//       .min(1, { message: "Password is required" })
//       .min(8, { message: "Password need to be at least 8 characters" }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// export default function Register() {
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   type FormData = z.infer<typeof formSchema>;

//   const handleSignup = async (data: FormData) => {
//     try {
//       await registerUser({ email: data.email, password: data.password }).then(
//         (response) => {
//           navigate("/login");
//           window.location.reload();
//           console.log(response);
//         },
//         (error) => {
//           console.log(error);
//         },
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <h1>Register Page</h1>
//       <form className="flex flex-col" onSubmit={handleSubmit(handleSignup)}>
//         <label htmlFor="email">email</label>
//         <input type="text" id="email" {...register("email")} />

//         {errors.email && (
//           <p className="text-xs text-red-500">{errors.email.message}</p>
//         )}

//         <label htmlFor="password">password</label>
//         <input type="text" id="password" {...register("password")} />
//         {errors.password && (
//           <p className="text-xs text-red-500">{errors.password.message}</p>
//         )}

//         <label htmlFor="password">confirmPassword</label>
//         <input type="text" id="password" {...register("confirmPassword")} />
//         {errors.confirmPassword && (
//           <p className="text-xs text-red-500">
//             {errors.confirmPassword.message}
//           </p>
//         )}

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

import { Link } from "react-router";

import profileImage1 from "../assets/profile1.jpg";
import profileImage4 from "../assets/profile4.jpg";
import profileImage5 from "../assets/profile5.jpg";
import profileImage6 from "../assets/profile6.jpg";
import profileImage7 from "../assets/profile7.jpg";
import profileImage9 from "../assets/profile9.jpg";

export default function Register() {
  return (
    <div className="relative flex min-h-[58rem] w-full flex-col items-center justify-center overflow-hidden px-4 py-16">
      <div className="absolute left-[9%] top-[18%] hidden h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img
          src={profileImage4}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[19%] top-[42%] hidden h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img
          src={profileImage5}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[7%] top-[64%] hidden h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img
          src={profileImage1}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[21%] top-[26%] hidden h-8 w-8 items-center justify-center rounded-full bg-emerald-50 md:flex">
        <span className="text-xs text-emerald-500">◆</span>
      </div>

      <div className="absolute left-[13%] top-[34%] h-2 w-2 rounded-full bg-purple-200" />
      <div className="absolute left-[23%] top-[62%] h-3 w-3 rounded-full bg-yellow-200" />

      <div className="absolute right-[11%] top-[20%] hidden h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img
          src={profileImage7}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[6%] top-[46%] hidden h-13 w-13 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img
          src={profileImage6}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[19%] top-[60%] hidden h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
        <img
          src={profileImage9}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[21%] top-[32%] hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 md:flex">
        <span className="text-xs text-yellow-500">◆</span>
      </div>

      <div className="absolute right-[12%] top-[36%] h-3 w-3 rounded-full bg-[var(--light-green)] opacity-40" />
      <div className="absolute right-[15%] top-[72%] h-2 w-2 rounded-full bg-pink-200" />

      <section className="relative z-10 flex w-full max-w-[460px] flex-col items-center">
        <h1 className="text-center text-5xl font-medium leading-[1.05] tracking-[-1.5px] text-black">
          Create account
        </h1>

        <p className="mt-4 text-center text-sm text-[var(--text-light)]">
          Join thousands of people finding their next role.
        </p>

        <div className="mt-9 w-full rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
          <form noValidate className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="firstName"
                  className="text-xs font-semibold text-neutral-700"
                >
                  First name
                </label>
                <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                  <svg
                    className="h-4 w-4 shrink-0 text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Alexandra"
                    className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lastName"
                  className="text-xs font-semibold text-neutral-700"
                >
                  Last name
                </label>
                <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                  <svg
                    className="h-4 w-4 shrink-0 text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Ionescu"
                    className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-neutral-700"
              >
                Email
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                <svg
                  className="h-4 w-4 shrink-0 text-neutral-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-neutral-700"
              >
                Password
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                <svg
                  className="h-4 w-4 shrink-0 text-neutral-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                />
                <button
                  type="button"
                  aria-label="Show password"
                  className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-600"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              <div className="mt-1 flex gap-1.5">
                <span className="h-1 flex-1 rounded-full bg-[var(--light-green)]" />
                <span className="h-1 flex-1 rounded-full bg-[var(--light-green)]" />
                <span className="h-1 flex-1 rounded-full bg-neutral-200" />
                <span className="h-1 flex-1 rounded-full bg-neutral-200" />
              </div>
              <p className="text-[11px] text-neutral-400">
                At least 8 characters, one number and one symbol.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-xs font-semibold text-neutral-700"
              >
                Confirm password
              </label>
              <div className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 px-4 transition-colors focus-within:border-[var(--light-green)]">
                <svg
                  className="h-4 w-4 shrink-0 text-neutral-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                />
                <button
                  type="button"
                  aria-label="Show password"
                  className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-600"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-neutral-700">
                I am looking for
              </span>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--light-green)] bg-[rgba(1,190,94,0.06)] px-4 py-3 text-xs font-medium text-black">
                  <input
                    type="radio"
                    name="accountType"
                    defaultChecked
                    className="h-3.5 w-3.5 accent-[var(--light-green)]"
                  />
                  A job
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-xs font-medium text-neutral-500 transition-colors hover:border-neutral-300">
                  <input
                    type="radio"
                    name="accountType"
                    className="h-3.5 w-3.5 accent-[var(--light-green)]"
                  />
                  Talent to hire
                </label>
              </div>
            </div>

            <label className="mt-1 flex items-start gap-2 text-[11px] leading-relaxed text-neutral-500">
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-neutral-300 accent-[var(--light-green)]"
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium !text-[var(--light-green)] hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-medium !text-[var(--light-green)] hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="mt-2 flex h-11 w-full cursor-pointer items-center justify-center rounded-full bg-[var(--light-green)] text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.35)] active:translate-y-0 active:opacity-70"
            >
              Create account
            </button>

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-neutral-200" />
              <span className="text-[11px] text-neutral-400">or</span>
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            <button
              type="button"
              className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-solid border-neutral-200 text-xs font-medium text-neutral-600 transition-all duration-200 hover:-translate-y-[1px] hover:border-neutral-300 active:translate-y-0 active:opacity-70"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a14 14 0 0 1 0 18" />
                <path d="M12 3a14 14 0 0 0 0 18" />
                <path d="M3 12h18" />
              </svg>
              Continue with Google
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold !text-[var(--light-green)] hover:underline"
          >
            Log in
          </Link>
        </p>
      </section>
    </div>
  );
}
