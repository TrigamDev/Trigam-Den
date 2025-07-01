import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🚻  Pronouns\n- <:he_him:1389450372988403814> <@&1067518546764124281>\n- <:she_her:1389450390885634118> <@&1067518579693588500>\n- <:they_them:1389450403481129031> <@&1067518602686759022>\n- <:it_its:1389450419935248496> <@&1385692116826456257>\n- <:any_all:1389450429607448596> <@&1389450585492947037>\n- <:neopronouns:1389450455427317821> <@&1389450701146689588>\n- <:none:1389450486201061396> <@&1389450628937547796>\n- <:ask:1389450499627155456> <@&1385692288637731036>"
		} as APITextDisplayComponent,
	]
} as APIContainerComponent