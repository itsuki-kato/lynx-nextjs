"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ScrapingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">スクレイピング</h2>
        <p className="text-muted-foreground">
          Webサイトの情報を取得します。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>新規スクレイピング</CardTitle>
          <CardDescription>
            Webサイトの情報を取得して分析します
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              placeholder="https://example.com"
              type="url"
            />
            <p className="text-xs text-muted-foreground">
              スクレイピングするWebサイトのURLを入力してください
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="depth">取得深度</Label>
            <Input
              id="depth"
              placeholder="1"
              type="number"
              min="1"
              max="5"
            />
            <p className="text-xs text-muted-foreground">
              リンクをたどる深さを指定します（1〜5）
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">スクレイピングを開始</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>スクレイピング履歴</CardTitle>
          <CardDescription>
            過去のスクレイピング結果
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border p-4 text-center">
            <p className="text-sm text-muted-foreground">
              スクレイピング履歴がありません
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
