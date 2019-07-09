const ENV_NOW = process.env.NODE_ENV === "production" ? "production" : "demo";

const configURL = {
  api: {
    production: "https://api.manyoption.co.id",
    staging: "https://docker-api.nusatek.id",
    demo: "https://demo-api.manyoption.co.id"
  },
  socket: {
    production: "https://socket.manyoption.co.id",
    staging: "https://docker-socket.nusatek.id",
    demo: "https://demo-socket2.manyoption.co.id"
  }
};

export const ENV = () => {
  return {
    api: configURL.api[ENV_NOW],
    socket: configURL.socket[ENV_NOW]
  };
};
