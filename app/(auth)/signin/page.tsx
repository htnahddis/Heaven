"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
        callbackURL: "/profile",
      });

      if (result.error) {
        toast.error(result.error.message || "Sign in failed");
      } else {
        toast.success("Signed in successfully!");
        router.push("/profile");
        router.refresh();
      }
    } catch (error) {
      toast.error("An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/profile",
      });
    } catch (error) {
      toast.error("Google sign in failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              SIGN IN TO <span className="text-orange-500">YOUR ACCOUNT</span>
            </h1>
          </div>

          <form onSubmit={handleEmailSignIn} className="flex flex-col gap-5">
            <div>
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                className="bg-transparent border-gray-700 text-white mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-gray-700 text-white mt-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Checkbox
                id="terms"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-gray-400">
                I agree to the General Terms and Privacy Policy
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                "LOGIN"
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full border-gray-700 text-black hover:bg-gray-900 gap-2 hover:text-white"
              disabled={loading}
              onClick={handleGoogleSignIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.98em"
                height="1em"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                />
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                />
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                />
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                />
              </svg>
              Sign in with Google
            </Button>

            <p className="text-center text-gray-500 text-sm">
              Dont have an account?{" "}
              <Link href="/signup" className="text-orange-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-blue-500">01</h2>
            <p className="font-bold">THE WIDEST DATABASE</p>
            <p className="text-gray-400 text-sm">
              Access over 105K total matches and data since 2015.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-500">02</h2>
            <p className="font-bold">ALWAYS UP TO DATE</p>
            <p className="text-gray-400 text-sm">
              Get info on all historical and upcoming tournaments, matches, and
              players.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-500">03</h2>
            <p className="font-bold">ONLY RELIABLE INFORMATION</p>
            <p className="text-gray-400 text-sm">
              Data analyzed and verified by experts and AI for accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}