const Mock = require("mockjs");
const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");
const interfaceList = require("./interface");
const { includes } = require("lodash");

function getJsonFile(fileName) {
  const filePath = path.resolve(__dirname, "./response", fileName);
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON5.parse(json);
}

function mockFileExist(fileName) {
  const dirPath = path.resolve(__dirname, "./response");
  const readDir = fs.readdirSync(dirPath);
  return includes(
    readDir.map((file) => file.split(".")[0]),
    fileName
  );
}

function randomWait() {
  return Math.random() * 1000 + 1000;
}

function bindMockRequest(app, method, name) {
  const requestURL = `${process.env.VUE_APP_REQUEST_PREFIX}/${name}`;
  app[method](requestURL, function (req, res) {
    if (mockFileExist(name)) {
      const json = getJsonFile(`./${name}.json5`);
      console.log("MOCK REQUEST: ", requestURL);
      setTimeout(() => {
        res.json(Mock.mock(json));
      }, randomWait());
    } else {
      res.json({
        errorMessage: "No Mock Response",
      });
    }
  });
}

module.exports = function (app) {
  if (process.env.VUE_APP_MOCK) {
    interfaceList.map((name) => {
      bindMockRequest(app, "post", name);
      bindMockRequest(app, "get", name);
    });
  }
};
