export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Guacamol",
	description: "A FFXIV FC Website of Guacamol.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Rules",
      href: "/rules",
    },
    {
      label: "Members",
      href: "/members",
    },
	{
	  label: "Events",
	  href: "/events",
	}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/home",
		},
		{
			label: "Rules",
			href: "/rules",
		},
		{
			label: "Members",
			href: "/members",
		},
	],
	links: {
		rules : "/rules",
		members : "/members",
		discord: "https://discord.gg/juW79DrrvT",
    	sponsor: "https://fr.finalfantasyxiv.com/lodestone/freecompany/9237023573225399146/"
	},
};
