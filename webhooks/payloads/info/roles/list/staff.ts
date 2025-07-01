import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🔨  Staff\n- <@&1062062425807007835> - Trigam!\n- <@&1062063039207178290> - Server staff with full admin permissions\n- <@&1065677199677591642> - Server staff with limited permissions, only having control over users and messages"
		} as APITextDisplayComponent,
	]
} as APIContainerComponent