import { useState } from 'react';

export function useIsAuthenticated(): boolean {
  const [auth] = useState<boolean>(true);
  return auth;
}
