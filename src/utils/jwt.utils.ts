import jwt, { JwtPayload } from "jsonwebtoken";

const secret = 'SGKjt4osPZK4OyoLrgw9twpKcPiRbRFUqSxXOmcBEa2fQcfLb6wl6yjOupTwcl2l';
if (!secret) {
  throw new Error("JWT_SECRET environment variable is not set");
}

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch {
    return null;
  }
};
