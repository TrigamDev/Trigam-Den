import { APIContainerComponent, APISeparatorComponent, APITextDisplayComponent, ComponentType } from "discord.js";

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "# 🗒️  Notes\nThese rules apply to many different areas, such as:\n- Messages sent within the server\n- Voice calls held within the server\n- DMs and voice calls held between members of the server\n- Any external communications between members of the server\n- Profiles of server members (such as profile picture, bio/about me, etc)\nThis community is meant to be safe and accepting, and that means protecting members however possible."
		} as APITextDisplayComponent,

		{
			type: ComponentType.Separator,
			divider: false,
			spacing: 2
		} as APISeparatorComponent,

		{
			type: ComponentType.TextDisplay,
			content: "You can contact admins for **any** reason: another member is being hateful, making you uncomfortable, you need clarification on something, you have a question, or any other reason. Don't feel too intimidated or feel too much like you're bothering them to contact admins if you need help, they're here to help you.\nIdeally, you should contact <@480828680604614675> directly, but any of the other admins work as well."
		} as APITextDisplayComponent
	]
} as APIContainerComponent