import { APIContainerComponent, APISeparatorComponent, APITextDisplayComponent, ComponentType } from "discord.js";

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## ❤️  Be Respectful\nBe kind, civil, and respectful to your fellow server members. Don't be rude, disrespectful, or hateful for *any* reason — it's okay to disagree with someone, just do so respectfully. Along the same lines, hate speech and discrimination is **strictly forbidden**. This community is welcoming to all, and that type of language and behavior has no place here.\n\n> \"Hate speech\" includes bigotry, racism, sexism, ableism, homophobia, transphobia, xenophobia, antisemitism, islamophobia, etc. However, this isn't a comprehensive list, and you can be banned for things not included in this list. Use your best judgement, and if you aren't sure if your message can be considered hate speech, *you probably shouldn't send it!*."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## 🤬  Minimize Profanity\nThis community is an open and accepting one, which can include minors. Plus, not everyone enjoys being exposed to excessive swearing, and it can be pretty off-putting for some. Profanity isn't strictly forbidden, but keep it to a minimum."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## ⚠️  No NSFW or NSFL\nAs mentioned above, this community is intended to be minor-friendly, so needless to say, NSFW/NSFL is strictly forbidden. Spoilers, warnings, and other ways of \"hiding it\" doesn't bypass this rule, don't post it whatsoever.\n\n> \"NSFW/NSFL\" includes sexually-charged conversations, sexually-suggestive media, pornography, and talks of or depictions of: violence, gore, bodily harm, bodily functions, and anything else along that vein."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## 💢  Minimize Drama\nRefrain from starting drama here or bringing in outside drama. Drama isn't fun for anyone involved, and it can be very off-putting to be around. There's plenty of drama and negativity elsewhere, and it's nice to have spaces where you can take a break from it all.\n\n> If you have concerns about certain members, rather than starting an argument in public channels, please bring it up to the admin team, and they'll assess the situation and take appropriate actions."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## 💬  Use Channels Correctly\nThis isn't a strict rule, and more just something to keep in mind, but please try to keep conversations in their relevant channels. It's completely fine if something unrelated to the channel's topic comes up naturally, but try to find a channel that fits what you'd like to talk about.\n<#1050447790112772136> is always open to any topic, so go there if you can't find a relevant channel."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## 📨  Don't Spam\nThis should be obvious, but don't spam in any form. Spam is incredibly obtrusive, and makes the experience worse for everyone. You'll be fine as long as your intention wasn't to spam, so don't be too scared by this rule.\n\n> \"Spamming\" includes rapidly sending messages, copy+pasting messages repeatedly, sending massive text walls, sending copypasta, sending the same message in multiple channels, etc. However, this isn't a comprehensive list, and you can be banned for things not included in this list. Use your best judgement."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## 📣  Don't Advertise\nNot everyone wants to be advertised to everywhere they go. If it comes up naturally in conversation, or is relevant to something, it's fine, but don't purposefully come here with the intention of advertising your stuff.\nIf you'd like to show off something you've made, you can do so in <#1050454269683306527>, just keep it contained to that channel.\n\n> \"Advertising\" includes sending links in chat, telling people to go somewhere or check something, telling people to check your bio/about me, etc. However, this isn't a comprehensive list, and you can be banned for things not included in this list. Use your best judgement."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "## <:discord_white:1365836350582030367>  Follow the Discord Terms of Service\nThis mostly goes without saying, but follow Discord's rules as well. This server takes place on Discord, so you're subject to Discord's Terms of Service. You can find them [here](https://discord.com/terms)."
		} as APITextDisplayComponent
	]
} as APIContainerComponent