import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 📣  Don't Advertise\nNot everyone wants to be advertised to everywhere they go. If it comes up naturally in conversation, or is relevant to something, it's fine, but don't purposefully come here with the intention of advertising your stuff.\nIf you'd like to show off something you've made, you can do so in <#1050454269683306527>, just keep it contained to that channel.\n\n> \"Advertising\" includes sending links in chat, telling people to go somewhere or check something, telling people to check your bio/about me, etc. However, this isn't a comprehensive list, and you can be banned for things not included in this list. Use your best judgement."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent