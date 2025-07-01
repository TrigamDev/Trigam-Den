import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 📰  Bulletin Board\nRules, announcements, and other important information.\n- <#1050244837141651546> - All of the rules of the server.\n- <#1050244819986960394> Information about the server, channels, and roles in case the theming causes confuses.\n- <#1050447178029596792> - Announcements about the server, events, and anything else that's important.\n- <#1050241893897875569> - Hi! Welcome to the Trigam Den!"
		} as APITextDisplayComponent
	]
} as APIContainerComponent