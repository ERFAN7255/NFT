import { compare, hash } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";

const hashedPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data: object): string => {
  const token = sign(data, process.env.AccessTakenSecretKey as string, {
    expiresIn: "60d",
  });
  return token;
};

const verifyAccessToken = (token: string): JwtPayload | string | false => {
  try {
    const tokenPayload = verify(
      token,
      process.env.AccessTakenSecretKey as string
    );
    return tokenPayload;
  } catch (error) {
    return false;
  }
};

export {
  hashedPassword,
  generateAccessToken,
  verifyPassword,
  verifyAccessToken,
};