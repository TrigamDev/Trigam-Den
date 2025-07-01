import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## <:discord_white:1389313333253111898>  Follow the Discord Terms of Service\nThis mostly goes without saying, but follow Discord's rules as well. This server takes place on Discord, so you're subject to Discord's Terms of Service. You can find them [here](https://discord.com/terms)."
		} as APITextDisplayComponent
	]
} as APIContainerComponent