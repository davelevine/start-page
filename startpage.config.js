const defaultConfig = {
	username: "Dave's",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "YYYY/MM/DD",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_blank",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://my.search.cc/search?q=",
		target: "_blank",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "center",
				links: [
					{
						name: "Cloudflare",
						target: "_blank",
						url: "https://dash.cloudflare.com",
						icon: "simple-icons:cloudflare"
					},
					{
						name: "pfSense",
						target: "_blank",
						url: "https://pfsense.fluffy-python.ts.net:4443",
						icon: "simple-icons:pfsense"
					},
					{
						name: "Proton",
						target: "_blank",
						url: "https://protonmail.com/",
						icon: "simple-icons:protonmail"
					},
					{
						name: "Resume",
						target: "_blank",
						url: "https://dave.levine.io",
						icon: "mdi:web"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "center",
				links: [
					{
						name: "GitHub",
						target: "_blank",
						url: "https://github.com/davelevine",
						icon: "mdi:github"
					},
					{
						name: "HN API",
						target: "_blank",
						url: "https://api.xdv.com",
						icon: "simple-icons:fastapi"
					},
					{
						name: "PGP Tool",
						target: "_blank",
						url: "https://pgp.encoded.net",
						icon: "simple-icons:monkeytie"
					},
					{
						name: "Vercel",
						target: "_blank",
						url: "https://vercel.com/",
						icon: "simple-icons:vercel"
					},
				]
			},
			{
				title: "Services",
				color: "red",
				align: "center",
				links: [
					{
						name: "GPhotos",
						target: "_blank",
						url: "https://photos.google.com",
						icon: "simple-icons:googlephotos"
					},
					{
						name: "Plex",
						target: "_blank",
						url: "https://xenlab.fluffy-python.ts.net:32400",
						icon: "mdi:plex"
					},
					{
						name: "Reddit",
						target: "_blank",
						url: "https://www.reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "YouTube",
						target: "_blank",
						url: "https://youtube.com",
						icon: "simple-icons:youtube"
					}
				]
			},
			{
				title: "Homelab",
				color: "cyan",
				align: "center",
				links: [
					{
						name: "Hass.io",
						target: "_blank",
						url: "https://home.xdv.com",
						icon: "simple-icons:homeassistant"
					},
					{
						name: "MkDocs",
						target: "_blank",
						url: "https://docs.levine.io/",
						icon: "mdi:library"
					},
					{
						name: "NAS",
						target: "_blank",
						url: "https://diskstation.fluffy-python.ts.net",
						icon: "mdi:nas"
					},
					{
						name: "UniFi",
						target: "_blank",
						url: "https://ui.xdv.com",
						icon: "simple-icons:ubiquiti"
					}
				]
			},
			{
				title: "Other",
				color: "orange",
				align: "center",
				links: [
					{
						name: "Request",
						target: "_blank",
						url: "https://request.davelevine.io/",
						icon: "simple-icons:plex"
					},
					{
						name: "Status",
						target: "_blank",
						url: "https://status.wired.io",
						icon: "simple-icons:statuspage"
					},
					{
						name: "Tautulli",
						target: "_blank",
						url: "https://tautulli.davelevine.io",
						icon: "simple-icons:simpleanalytics"
					},
					{
						name: "Wikiless",
						target: "_blank",
						url: "https://wiki.xdv.com/",
						icon: "simple-icons:wikipedia"
					}
				]
			},
			{
				title: "Tech",
				color: "yellow",
				align: "center",
				links: [
					{
						name: "AWS",
						target: "_blank",
						url: "https://aws.amazon.com",
						icon: "simple-icons:amazonaws"
					},
					{
						name: "News",
						target: "_blank",
						url: "https://hn.xdv.com",
						icon: "simple-icons:ycombinator"
					},
					{
						name: "RSS",
						target: "_blank",
						url: "https://feedbin.com/",
						icon: "simple-icons:rss"
					},
					{
						name: "WHOIS",
						target: "_blank",
						url: "https://whois.xdv.com/",
						icon: "simple-icons:quicklook"
					},
				]
			}
		]
	}
}

export default defaultConfig
