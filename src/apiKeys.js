const themoviedbApiKey =
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development"
    ? "645101f469947c0fc4c4c43f8cc53596"
    : null;
export { themoviedbApiKey };
