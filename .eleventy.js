export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js");

  eleventyConfig.addPassthroughCopy("./src/images/");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
