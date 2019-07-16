const ENV_NOW = process.env.NODE_ENV === "production" ? "production" : "demo";

const baseURL = {
  production: "https://dapur-online-akuntansi-api.luqmanul.com/",
  staging: "https://dapur-online-akuntansi-api.luqmanul.com/",
  demo: "https://dapur-online-akuntansi-api.luqmanul.com/"
};

export const ENV = () => {
  return {
    api: baseURL[ENV_NOW]
  };
};
