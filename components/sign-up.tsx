"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorContext } from "better-auth/react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SECTION: SIGN UP FORM */}
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              CREATE <span className="text-orange-500">YOUR ACCOUNT</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Join us and start your journey today.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Username */}
            <div>
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="shoha_07"
                className="bg-transparent border-gray-700 text-white mt-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                className="bg-transparent border-gray-700 text-white mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-transparent border-gray-700 text-white mt-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Profile Image */}
            <div>
              <Label htmlFor="image" className="text-gray-300">
                Profile Image (optional)
              </Label>
              <div className="flex items-center gap-3 text-white">
                {imagePreview && (
                  <div className="relative w-14 h-14 rounded-md overflow-hidden border border-gray-700 mt-2">
                    <Image
                      src={imagePreview}
                      alt="Profile preview"
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute -top-1 -right-1 bg-white text-black rounded-full p-0.5 shadow"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer bg-transparent border-gray-700 text-white mt-2"
                />
              </div>
            </div>

        
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold cursor-pointer"
              disabled={loading}
              onClick={async () => {
                await signUp.email({
                  email,
                  password,
                  name: username,
                  image: image ? await convertImageToBase64(image) : "",
                  callbackURL: "/dashboard",
                  fetchOptions: {
                    onResponse: () => setLoading(false),
                    onRequest: () => setLoading(true),
                    onError: async (ctx: ErrorContext) => {
                    toast.error(ctx.error.message);
                                           },
                    onSuccess: async () => router.push("/dashboard"),
                  },
                });
              }}
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : "SIGN UP"}
            </Button>

            <p className="text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SECTION: INFO */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-blue-500">01</h2>
            <p className="font-bold">LEARN AND CONNECT</p>
            <p className="text-gray-400 text-sm">
              Join a growing community of learners and mentors to build your skills.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-500">02</h2>
            <p className="font-bold">PERSONALIZED DASHBOARD</p>
            <p className="text-gray-400 text-sm">
              Track your progress and manage your learning journey easily.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-500">03</h2>
            <p className="font-bold">SECURE & FAST</p>
            <p className="text-gray-400 text-sm">
              Enjoy a seamless and secure signup experience powered by modern tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
