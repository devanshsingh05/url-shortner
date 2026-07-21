export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Lax",
    maxAge: 60 * 60 * 1000, // 5 mins

}