import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 💢  Minimize Drama\nRefrain from starting drama here or bringing in outside drama. Drama isn't fun for anyone involved, and it can be very off-putting to be around. There's plenty of drama and negativity elsewhere, and it's nice to have spaces where you can take a break from it all.\n\n> If you have concerns about certain members, rather than starting an argument in public channels, please bring it up to the admin team, and they'll assess the situation and take appropriate actions."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent