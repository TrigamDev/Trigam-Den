import { APIContainerComponent, APIMediaGalleryComponent, APIMediaGalleryItem, ComponentType } from "discord.js"

export default {
	type: ComponentType.Container,
	accent_color: 0x3f48cc,
	components: [
		{
			type: ComponentType.MediaGallery,
			items: [
				{
					media: {
						url: "https://raw.githubusercontent.com/TrigamDev/Trigam-Den/refs/heads/main/assets/titles/rules.png"
					},
					description: "Rules"
				} as APIMediaGalleryItem
			]
		} as APIMediaGalleryComponent
	]
} as APIContainerComponent