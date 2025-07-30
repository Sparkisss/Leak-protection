import { useState } from 'react';

export function useIsAuthenticated(): boolean {
  const [auth] = useState<boolean>(false);
  return auth;
}
