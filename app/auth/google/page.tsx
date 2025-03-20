"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoogleAuthPage() {
  const router = useRouter();

  useEffect(() => {
    // Google OAuth認証を開始するAPIエンドポイント
    const startGoogleAuth = async () => {
      // バックエンドのAPIエンドポイントにリダイレクト
      window.location.href = "http://localhost:3000/auth/google";
    };

    startGoogleAuth();
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="border-2">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">認証中</CardTitle>
            <CardDescription>
              Google認証を開始しています...
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
