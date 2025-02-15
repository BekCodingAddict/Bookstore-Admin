"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

//FAKE USER TO TEMPO LOGIN
const FAKE_USER = {
  email: "john@example.con",
  password: "12345678",
};

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  interface LoginFormInputs {
    email: string;
    password: string;
  }

  // Handle login
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setError(null);
    try {
      if (
        data.email !== FAKE_USER.email &&
        data.password !== FAKE_USER.password
      ) {
        throw new Error("Invalid credentials");
      }

      router.push("/books");
    } catch (err) {
      setError("Invalid email or password! Error:" + err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
          Dashboard Login
        </h2>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={"john@example.com"}
              {...register("email")}
              className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={"12345678"}
              {...register("password")}
              className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
