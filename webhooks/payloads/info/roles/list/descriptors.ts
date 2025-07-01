import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🏷️  Descriptors\n- <@&1065678390872522812> - My friends!\n- <@&1067609216984027226> - Bots and apps\n- <@&1116495587337060484> - People who have boosted the server"
		} as APITextDisplayComponent,
	]
} as APIContainerComponent