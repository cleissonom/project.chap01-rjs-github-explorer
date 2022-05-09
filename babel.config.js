// Como instalamos o preset-env, temos que colocar nas configurações do babel que ele deve ser usado

module.exports = {
   presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      ["@babel/preset-react", {
         runtime: "automatic",
      }],
   ]
}