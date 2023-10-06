import { User, Session, generateSessionId } from "./utils";

export const users: User[] = [
  { id: 1, username: "user1", loggedIn: false },
  { id: 2, username: "user2", loggedIn: true },
];
export const sessions: Session[] = [];

export const createUserSession = (user: User) => {
  const sessionId = generateSessionId();
  const loggedInAt = new Date();

  sessions.push({
    sessionId,
    userId: user.id,
    loggedInAt,
  });
};
