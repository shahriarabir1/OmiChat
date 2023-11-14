const environment = {};

environment.developer = {
  name: "developer",
  port: 3000,
};

environment.production = {
  name: "production",
  port: 4000,
};

const current =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "developer";

const output =
  typeof environment[current] === "object"
    ? environment[current]
    : environment.developer;

module.exports = output;
