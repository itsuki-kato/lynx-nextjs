"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccessToken } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardPage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">ダッシュボード</h2>
          <p className="text-muted-foreground">
            サイト管理ツールへようこそ。ここでサイトの分析情報を確認できます。
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="ユーザーアバター" />
            <AvatarFallback>LX</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">ユーザー</p>
            <p className="text-xs text-muted-foreground">ログイン中</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">プロジェクト数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              プロジェクトを作成して管理を始めましょう
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">記事数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              スクレイピングで記事を取得できます
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">内部リンク数</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              内部リンクの関係性を管理できます
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>アクセストークン</CardTitle>
          <CardDescription>
            現在のアクセストークン情報です
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-muted p-4">
            <code className="text-xs break-all">{accessToken || "トークンがありません"}</code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
