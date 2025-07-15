/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "property-no-vendor-prefix": [
      true,
      { ignoreProperties: ["text-size-adjust"] },
    ],
  },
};
