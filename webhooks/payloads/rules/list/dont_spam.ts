import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 📨  Don't Spam\nThis should be obvious, but don't spam in any form. Spam is incredibly obtrusive, and makes the experience worse for everyone. You'll be fine as long as your intention wasn't to spam, so don't be too scared by this rule.\n\n> \"Spamming\" includes rapidly sending messages, copy+pasting messages repeatedly, sending massive text walls, sending copypasta, sending the same message in multiple channels, etc. However, this isn't a comprehensive list, and you can be banned for things not included in this list. Use your best judgement."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent