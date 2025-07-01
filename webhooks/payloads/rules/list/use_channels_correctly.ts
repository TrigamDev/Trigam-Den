import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 💬  Use Channels Correctly\nThis isn't a strict rule, and more just something to keep in mind, but please try to keep conversations in their relevant channels. It's completely fine if something unrelated to the channel's topic comes up naturally, but try to find a channel that fits what you'd like to talk about.\n<#1050447790112772136> is always open to any topic, so go there if you can't find a relevant channel."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent