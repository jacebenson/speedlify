const CacheAsset = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
	let url = "https://news.jace.pro/feeds.json";
	let urlsJson = await CacheAsset(url, {
		duration: "0s",
		type: "json",
	});

	return {
		name: "now-news-sources", // optional, falls back to object key
		description: "ServiceNow News Sources",
		// skip if localhost
		// skip if this is a new fork of the speedlify (not Zach’s)
		skip: false, //!process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
		estimatedTimePerBuild: .2,
		options: {
			frequency: 60 * 1, // 1 hour
			// Use "run" if the sites don’t share assets on the same origin
			//           and we can reset chrome with each run instead of
			//           each site in every run (it’s faster)
			// Use "site" if sites are all on the same origin and share assets.
			freshChrome: "run"
		},

		urls: urlsJson
	};
};
/*
module.exports = {
	name: "now-news-sources", // optional, falls back to object key
	description: "ServiceNow News Sources",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,//!process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
			"https://anerrantprogrammer.com",
			"https://helpfultechblog.com",
			"http://www.cloudminus89.com",
			"https://www.servicenowelite.com",
			"https://www.snc-blog.com",
			"https://andrew.alburydor.com",
			"https://blog.kofko.xyz",
			"https://checksumfailed.com",
			"https://codecreative.io",
			"https://developer.servicenow.com/blog.do",
			"https://dhruvsn.wordpress.com",
			"https://earlduque.com",
			"https://finite-partners.com",
			"https://glassputan.wordpress.com",
			"https://jace.pro",
			"https://mavembry.info",
			"https://portalorem.com",
			"https://servicenow.implementation.blog",
			"https://servicenowthink.wordpress.com",
			"https://servicenowtipps.wordpress.com",
			"https://serviceportal.io",
			"https://sncdevelopment.com",
			"https://snhackery.com",
			"https://snprotips.com",
			"https://techimonster.com",
			"https://verboselog.com",
			"https://womennow.dev",
			"https://www.ashleysn.com",
			"https://www.cookdown.com",
			"https://www.dylanlindgren.com",
			"https://www.saaswithservicenow.in",
			"https://www.servicenowguru.com"
	]
};
*/
