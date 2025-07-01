import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## ❤️  Be Respectful\nBe kind, civil, and respectful to your fellow server members. Don't be rude, disrespectful, or hateful for *any* reason — it's okay to disagree with someone, just do so respectfully. Along the same lines, hate speech and discrimination is **strictly forbidden**. This community is welcoming to all, and that type of language and behavior has no place here.\n\n> \"Hate speech\" includes bigotry, racism, sexism, ableism, homophobia, transphobia, xenophobia, antisemitism, islamophobia, etc. However, this isn't a comprehensive list, and you can be banned for things not included in this list. Use your best judgement, and if you aren't sure if your message can be considered hate speech, *you probably shouldn't send it!*."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent