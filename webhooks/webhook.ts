import { MessageFlags, WebhookClient } from "discord.js"

export async function sendComponents( webhookUrl: string, components: any[] ) {
	const webhook = new WebhookClient({ url: webhookUrl })
	webhook.send({
		components: components,
		flags: [ MessageFlags.IsComponentsV2 ],
		withComponents: true,
		allowedMentions: {
			parse: []
		}
	})
}

export async function editComponents( webhookUrl: string, messageId: string, components: any[] ) {
	const webhook = new WebhookClient({ url: webhookUrl })
	webhook.editMessage( messageId, {
		components: components,
		flags: [ MessageFlags.IsComponentsV2 ],
		withComponents: true,
		allowedMentions: {
			parse: []
		}
	})
}