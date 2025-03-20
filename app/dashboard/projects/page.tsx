"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">プロジェクト</h2>
        <p className="text-muted-foreground">
          サイトのプロジェクトを管理します。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 新規プロジェクト作成カード */}
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>新規プロジェクト</CardTitle>
            <CardDescription>
              新しいプロジェクトを作成します
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-8">
            <div className="rounded-full bg-muted p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">プロジェクトを作成</Button>
          </CardFooter>
        </Card>

        {/* プロジェクトがない場合のメッセージ */}
        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>プロジェクトがありません</CardTitle>
            <CardDescription>
              新しいプロジェクトを作成して、サイト管理を始めましょう
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              プロジェクトを作成すると、サイトの記事やリンク関係を管理できるようになります。
              左側の「新規プロジェクト」ボタンをクリックして、プロジェクトを作成してください。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
