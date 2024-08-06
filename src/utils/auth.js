import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/dist/client/components/headers";

const hashedPassowrd = async (password) => {
  const hashedPassowrd = await hash(password, 12);
  return hashedPassowrd;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.AccessTakenSecretKey, {
    expiresIn: "60d",
  });
  return token;
};

const verifyAccessToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.AccessTakenSecretKey);
    return tokenPayload;
  } catch (error) {
    return false;
  }
};

export {
  hashedPassowrd,
  generateAccessToken,
  verifyPassword,
  verifyAccessToken,
};
