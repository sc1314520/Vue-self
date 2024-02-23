module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 這裡要自己修改
    ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
