// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  module: {
    rules: [{ test: /\.ts|tsx$/, use: "ts-loader" }],
  },
};
