import { APIContainerComponent, APITextDisplayComponent, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.TextDisplay,
			content: "## 🤖  Trigam Botnet\n❗ **Description** ❗\n- <#1385984980714258583>  - Important information about the Trigam Botnet.\n- <#1385695314341527712>  - Announcements about the Trigam Botnet.\n- <#1385985140366245888> - Updates from the Trigam Botnet [GitHub](https://github.com/TrigamDev/Trigam-Botnet)\n- <#1385700357505810563>  - Talk about the Trigam Botnet!\n- <#1385700407636004955>  - Use Trigam Botnet commands here in order to keep them out of the normal channels.\n- <#1385700600901009498>  - Discuss, share, and learn custom commands.\n- <#1385700745076015186>  - Suggest changes or improvements for the Trigam Botnet.\n- <#1385700781130518668>  - Report bugs, glitches, and any other unexpected behavior of the Trigam Botnet.\n- <#1385700877784060187> - Ask questions, request help, or get any kind of support for the Trigam Botnet."
		} as APITextDisplayComponent,
	]
} as APIContainerComponent