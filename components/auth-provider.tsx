"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

// 認証コンテキストの型定義
type AuthContextType = {
  isLoggedIn: boolean;
  loading: boolean;
};

// 認証コンテキストの作成
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  loading: true,
});

// 認証コンテキストを使用するためのカスタムフック
export const useAuth = () => useContext(AuthContext);

// 認証プロバイダーコンポーネント
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // 認証状態の確認
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsLoggedIn(authenticated);
      setLoading(false);

      // 未ログイン状態でダッシュボードなどの保護されたページにアクセスした場合、ログインページにリダイレクト
      if (!authenticated && pathname !== "/" && !pathname.startsWith("/auth")) {
        router.push("/");
      }
    };

    checkAuth();
  }, [pathname, router]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
