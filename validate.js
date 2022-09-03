// @ts-check
const jsonschema = require("jsonschema");
const fs = require("fs");
const path = require("path");

/**
 *
 * @param {import("./validate").Draft} draft
 * @param {any} instance
 */
function validate(draft, instance) {
  const validator = new jsonschema.Validator();
  const filepath = path.resolve(path.join("schemas", draft + ".json"));

  if (!fs.existsSync(filepath))
    throw new Error("Draft not found in the schemas directory.");

  const schema = require(filepath);
  return validator.validate(schema, instance, {
    required: true,
  });
}

module.exports = validate;
exports.default = validate;
