import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## ⚠️  No NSFW or NSFL\nAs mentioned above, this community is intended to be minor-friendly, so needless to say, NSFW/NSFL is strictly forbidden. Spoilers, warnings, and other ways of \"hiding it\" doesn't bypass this rule, don't post it whatsoever.\n\n> \"NSFW/NSFL\" includes sexually-charged conversations, sexually-suggestive media, pornography, and talks of or depictions of: violence, gore, bodily harm, bodily functions, and anything else along that vein."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent