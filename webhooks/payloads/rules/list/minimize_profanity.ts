import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🤬  Minimize Profanity\nThis community is an open and accepting one, which can include minors. Plus, not everyone enjoys being exposed to excessive swearing, and it can be pretty off-putting for some. Profanity isn't strictly forbidden, but keep it to a minimum."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent