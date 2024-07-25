import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

export default {
  // Entry point of your application
  entry: "./src/main.jsx",

  // Output configuration
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve("dist"), // Output directory
  },

  // Production mode ensures optimizations like tree shaking
  mode: "production",

  // Optimization settings
  optimization: {
    minimize: true, // Enable minification
    minimizer: [new TerserPlugin()], // Use TerserPlugin for minification
    usedExports: true, // Mark unused exports
  },

  // Module rules for how to treat different types of modules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply rule to JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader
          options: {
            presets: ["@babel/preset-env"], // Use the env preset
          },
        },
      },
      // Add more rules as needed
    ],
  },

  // Plugins configuration
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before build
    // Add more plugins as needed
  ],
};
