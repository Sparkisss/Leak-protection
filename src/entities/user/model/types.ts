export interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
}

export interface SetUserPayload {
  email: string;
  token: string;
  id: string;
}
