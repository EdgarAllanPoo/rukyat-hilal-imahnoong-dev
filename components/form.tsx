"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            // @ts-ignore
          }).then(({ ok, error }) => {
            setLoading(false);
            if (ok) {
              router.push("/form-upload");
            } else {
              toast.error(error);
            }
          });
        } else {
          const target = e.target as typeof e.target & {
            name:           { value: string };
            email:          { value: string };
            password:       { value: string };
            year_of_birth:  { value: number };
            phone_number:   { value: string };
            agency_name:    { value: string };
          };
          const name = target.name.value;
          const email = target.email.value;
          const password = target.password.value;
          const year_of_birth = target.year_of_birth.value;
          const phone_number = target.phone_number.value;
          const agency_name = target.agency_name.value;
          fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
              year_of_birth: year_of_birth,
              phone_number: phone_number,
              agency_name: agency_name,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Account created! Redirecting to login...");
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              toast.error(await res.text());
            }
          });
        }
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {type === "register" && (
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs text-gray-600 uppercase"
              >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              />
          </div>
          <div>
            <label
              htmlFor="year_of_birth"
              className="block text-xs text-gray-600 uppercase"
            >
              Year of Birth
            </label>
            <input
              id="year_of_birth"
              name="year_of_birth"
              type="number"
              min="0"
              autoComplete="off"
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-xs text-gray-600 uppercase"
            >
              Phone Number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              type="text"
              autoComplete="off"
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="agency_name"
              className="block text-xs text-gray-600 uppercase"
            >
              Agency Name
            </label>
            <input
              id="agency_name"
              name="agency_name"
              type="text"
              autoComplete="off"
              required
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "bg-s-green text-white hover:bg-p-green"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? "Sign In" : "Sign Up"}</p>
        )}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          here.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
