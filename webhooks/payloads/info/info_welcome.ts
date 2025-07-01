import { APIContainerComponent, APISeparatorComponent, APITextDisplayComponent, ComponentType } from "discord.js";

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "# <:trigam_icon:1146885731139198997>  Welcome to the Trigam Den!\nThis is a community server mainly centered around Trigam's projects, but this also aims to be an open and accepting community of people with similarly nerdy interests. Come here to talk about Trigam's projects, receive updates, make suggestions, or simply meet others and have fun."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## 📲  Invite\nhttps://dsc.gg/trigam-den"
		} as APITextDisplayComponent
	]
} as APIContainerComponent