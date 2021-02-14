module.exports = function (eleventyConfig) {
  // Výchozí výstupní složka: _site
  // Zkopírovat `images/` do `_site/images`
  eleventyConfig.addPassthroughCopy('images');
  // Zkopírovat `css/` to `_site/css/`
  eleventyConfig.addPassthroughCopy('css');
  // Zkopírovat `js/` to `_site/js/`
  eleventyConfig.addPassthroughCopy('js');
};
