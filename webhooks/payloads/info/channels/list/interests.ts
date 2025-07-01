import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🖌️  Interests\n❗ **Description** ❗\n- <#1050454269683306527> - Show off anything you're proud of, such as art, projects, programming, and anything else.\n- <#1150576336071565332> - Post and discuss drawings, music, 3D models, or any other forms of artistic expression.\n- <#1385664959853101206> - Discuss specific games, share screenshots, post clips, or anything else related to games.\n- <#1050469354828992512> - Talk about programming, share resources, get help with something you're stuck on, or show off cool projects you've been working on.\n- <#1132482499075915898> - Discuss game development, show off the game you've been making, or complain about Unity.\n- <#1065324870113689641> - ❗ **Description** ❗\n- <#1065325058270175382> - ❗ **Description** ❗\n- <#1065324962270957599> - ❗ **Description** ❗"
		} as APITextDisplayComponent,
	]
} as APIContainerComponent