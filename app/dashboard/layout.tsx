"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { logout } from "@/lib/auth";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  // 未ログイン状態の場合はログインページにリダイレクト
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, loading, router]);

  // ローディング中またはログインしていない場合は何も表示しない
  if (loading || !isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ヘッダー */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col gap-4 py-4">
              <div className="px-2 py-2">
                <h2 className="text-lg font-semibold tracking-tight">LYNX</h2>
                <p className="text-sm text-muted-foreground">サイト管理ツール</p>
              </div>
              <Separator />
              <nav className="flex flex-col gap-2 px-2">
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard")}>
                  ダッシュボード
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/projects")}>
                  プロジェクト
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/scraping")}>
                  スクレイピング
                </Button>
              </nav>
              <Separator />
              <Button variant="ghost" className="justify-start text-red-500" onClick={logout}>
                ログアウト
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">LYNX</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="flex flex-1">
        {/* サイドバー (デスクトップ) */}
        <aside className="hidden w-64 border-r bg-background md:block">
          <div className="flex flex-col gap-4 py-4">
            <div className="px-6 py-2">
              <h2 className="text-lg font-semibold tracking-tight">LYNX</h2>
              <p className="text-sm text-muted-foreground">サイト管理ツール</p>
            </div>
            <Separator />
            <nav className="flex flex-col gap-2 px-2">
              <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard")}>
                ダッシュボード
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/projects")}>
                プロジェクト
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => router.push("/dashboard/scraping")}>
                スクレイピング
              </Button>
            </nav>
            <div className="mt-auto px-2 py-2">
              <Separator className="my-4" />
              <Button variant="ghost" className="justify-start text-red-500" onClick={logout}>
                ログアウト
              </Button>
            </div>
          </div>
        </aside>

        {/* コンテンツエリア */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
