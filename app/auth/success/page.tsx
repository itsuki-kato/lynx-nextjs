"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { saveTokens } from "@/lib/auth";

export default function AuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("token");
    const refreshToken = searchParams.get("refreshToken");

    if (accessToken && refreshToken) {
      // トークンを保存する
      saveTokens(accessToken, refreshToken);

      // 少し待ってからダッシュボードにリダイレクト
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // エラー処理
      console.error("アクセストークンまたはリフレッシュトークンがありません");
      
      // 少し待ってからログインページにリダイレクト
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [router, searchParams]);

  const accessToken = searchParams.get("token");
  const refreshToken = searchParams.get("refreshToken");
  const isSuccess = accessToken && refreshToken;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="border-2">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              {isSuccess ? "認証成功" : "認証エラー"}
            </CardTitle>
            <CardDescription>
              {isSuccess 
                ? "アクセストークンとリフレッシュトークンを保存しました" 
                : "アクセストークンまたはリフレッシュトークンがありません"}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
            {isSuccess ? (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">ダッシュボードにリダイレクトしています...</p>
                <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">ログインページにリダイレクトしています...</p>
                <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-destructive"></div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
