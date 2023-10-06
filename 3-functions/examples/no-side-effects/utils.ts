export function generateSessionId(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
export interface User {
  id: number;
  username: string;
  loggedIn: boolean;
}
export interface Session {
  sessionId: string;
  userId: number;
  loggedInAt: Date;
}
