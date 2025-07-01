import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🔔  Pings\n- <@&1114010502302027918> - Pings for general, server-related announcements\n- <@&1385985591836934164> - Pings for occasional server events\n- <@&1388167766602809476> - Pings for the Trigam Botnet updates\n- <@&1388167853244420156> - Pings for DiscoML updates\n- <@&1388167818801057824> - Pings for Collections updates\n- <@&1388167889730932837> - Pings for Argon updates"
		} as APITextDisplayComponent,
	]
} as APIContainerComponent