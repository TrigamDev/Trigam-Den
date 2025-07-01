import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🏠  Den\nThe main hangout place of the server. Strike up a conversation, show off something you like, share a funny, have fun!\n- <#1050447790112772136> - Hang out and have a good time. Try to avoid interrupting conversations if possible!\n- <#1050452516648792217> - Post any images/videos you like, find interesting, or otherwise find worth sharing.\n- <#1051901476764647615> - Dump the mass of memes you've collected on your hard drive.\n- <#1050455240530468874> -  Answer a quick Question of the Day to incite ~~arguments~~ discussion.\n- <#1050454457730748476> - Use bot commands here in order to keep them out of the normal channels.\n- <#1065324717038370858> - Talk, stream, and hang out in call.\n- <#1065324769903398994> - Similar to <#1065324717038370858>, but for when it's full."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent