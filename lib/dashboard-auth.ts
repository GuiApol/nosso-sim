import "server-only";

import {
  createHmac,
  timingSafeEqual,
} from "node:crypto";

export const DASHBOARD_COOKIE_NAME = "nosso-sim-dashboard";

const SESSION_DURATION_SECONDS = 60 * 60 * 12;

function getSessionSecret() {
  const secret = process.env.DASHBOARD_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "A variável DASHBOARD_SESSION_SECRET não foi configurada.",
    );
  }

  return secret;
}

function createSignature(value: string) {
  return createHmac("sha256", getSessionSecret())
    .update(value)
    .digest("hex");
}

function safeCompare(first: string, second: string) {
  const firstBuffer = Buffer.from(first);
  const secondBuffer = Buffer.from(second);

  if (firstBuffer.length !== secondBuffer.length) {
    return false;
  }

  return timingSafeEqual(firstBuffer, secondBuffer);
}

export function createDashboardSession() {
  const expiresAt =
    Math.floor(Date.now() / 1000) +
    SESSION_DURATION_SECONDS;

  const payload = String(expiresAt);
  const signature = createSignature(payload);

  return {
    token: `${payload}.${signature}`,
    maxAge: SESSION_DURATION_SECONDS,
  };
}

export function verifyDashboardSession(
  sessionToken?: string,
) {
  if (!sessionToken) {
    return false;
  }

  const [expiresAt, receivedSignature] =
    sessionToken.split(".");

  if (!expiresAt || !receivedSignature) {
    return false;
  }

  const expiration = Number(expiresAt);

  if (
    !Number.isFinite(expiration) ||
    expiration <= Math.floor(Date.now() / 1000)
  ) {
    return false;
  }

  const expectedSignature = createSignature(expiresAt);

  return safeCompare(
    receivedSignature,
    expectedSignature,
  );
}

export function verifyDashboardPassword(
  receivedPassword: string,
) {
  const expectedPassword =
    process.env.DASHBOARD_PASSWORD;

  if (!expectedPassword) {
    throw new Error(
      "A variável DASHBOARD_PASSWORD não foi configurada.",
    );
  }

  return safeCompare(
    receivedPassword,
    expectedPassword,
  );
}