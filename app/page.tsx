"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  // ログイン済みの場合はダッシュボードにリダイレクト
  useEffect(() => {
    if (isLoggedIn && !loading) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, loading, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md">
        <Card className="border-2">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">LYNX</CardTitle>
            <CardDescription>
              サイト管理ツール
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>ブロガーやアフィリエイター、自社のメディアサイトを運営している</p>
              <p>Webマーケター向けのサイト管理ツール</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => router.push("/auth/google")}
            >
              Googleアカウントでログイン
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
