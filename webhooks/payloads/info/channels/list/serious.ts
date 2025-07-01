import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 💼  Serious\n❗ **Description** ❗\n- <#1338627471095889920> - Spill your heart out about something you like.\n- <#1050763108471275630> - Get something off your chest."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent