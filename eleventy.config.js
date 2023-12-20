import htmlMinifier from "html-minifier";
const minifyHTML = htmlMinifier.minify;

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");

	// Minify code
	eleventyConfig.addTransform("minifyOutput", (content, path) => {
		if (
			process.env.ELEVENTY_ENV === "production" &&
			path &&
			path.endsWith(".html")
		) {
			return minifyHTML(content, {
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
