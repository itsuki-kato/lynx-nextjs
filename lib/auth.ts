// 認証関連のユーティリティ関数

/**
 * アクセストークンを取得する
 */
export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('accessToken');
};

/**
 * リフレッシュトークンを取得する
 */
export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refreshToken');
};

/**
 * トークンを保存する
 */
export const saveTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

/**
 * トークンを削除する
 */
export const removeTokens = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

/**
 * ユーザーがログインしているかどうかを確認する
 */
export const isAuthenticated = (): boolean => {
  return !!getAccessToken();
};

/**
 * ログアウト処理
 */
export const logout = (): void => {
  removeTokens();
  window.location.href = '/';
};
