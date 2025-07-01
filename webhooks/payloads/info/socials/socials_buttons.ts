import { APIActionRowComponent, APIButtonComponent, APIContainerComponent, APITextDisplayComponent, ButtonStyle, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "GitHub",

					url: "https://github.com/trigamdev"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Modrinth",

					url: "https://modrinth.com/user/Trigam"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Planet Minecraft",

					url: "https://www.planetminecraft.com/member/trigam"
				} as APIButtonComponent
			]
		} as APIActionRowComponent<APIButtonComponent>,

		{
			"type": 14,
			"divider": false,
			"spacing": 1
		},

		{
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Bluesky",

					url: "https://bsky.app/profile/trigam.dev"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Mastodon",

					url: "https://wetdry.world/@trigam"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "YouTube",

					url: "https://www.youtube.com/@TrigamDev"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Twitch",

					url: "https://www.twitch.tv/trigamdev"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Reddit",

					url: "https://www.reddit.com/user/TrigamDev"
				} as APIButtonComponent
			]
		} as APIActionRowComponent<APIButtonComponent>,
		{
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Twitter (Inactive!)",

					url: "https://twitter.com/TrigamDev"
				} as APIButtonComponent
			]
		} as APIActionRowComponent<APIButtonComponent>,

		{
			"type": 14,
			"divider": false,
			"spacing": 1
		},

		{
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Steam",

					url: "https://steamcommunity.com/id/trigam"
				} as APIButtonComponent,
				{
					type: ComponentType.Button,
					style: ButtonStyle.Link,

					label: "Roblox",

					url: "https://www.roblox.com/users/2706934589/profile"
				} as APIButtonComponent
			]
		} as APIActionRowComponent<APIButtonComponent>
	]
} as APIContainerComponent