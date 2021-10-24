module.exports = function (eleventyConfig) {
	eleventyConfig.setDataDeepMerge(true);
	eleventyConfig.addWatchTarget("src/_data/");
	eleventyConfig.addPassthroughCopy("src/assets");

	// Minify code
	eleventyConfig.addTransform("minifyOutput", (content, path) => {
		if (
			process.env.ELEVENTY_ENV === "production" &&
			path &&
			path.endsWith(".html")
		) {
			return require("html-minifier").minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				minifyCSS: true,
				minifyJS: true,
				processScripts: "application/ld+json",
			});
		}
		return content;
	});

	// browserSync
	eleventyConfig.setBrowserSyncConfig({
		snippet: false,
		ui: false,
		// Uncomment the following line to enable https mode
		// https: true,
		port: 8080,
	});

	// Alias `layouts/default.njk` to `layout: default`
	eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

	// Directories & Templates
	return {
		dir: {
			input: "src",
			output: "www",
		},
		templateFormats: ["njk", "md", "html"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
