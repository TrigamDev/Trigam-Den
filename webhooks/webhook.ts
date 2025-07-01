import { AsyncQueue } from "@sapphire/async-queue"
import { MessageFlags, WebhookClient } from "discord.js"



const queue = new AsyncQueue()

export async function sendMessage( webhookUrl: string, components: any[], callback?: () => void ) {
	await queue.wait()
	
	const webhook = new WebhookClient({ url: webhookUrl })
	webhook.send({
		components: components,
		flags: [ MessageFlags.IsComponentsV2 ],
		withComponents: true,
		allowedMentions: {
			parse: []
		}
	}).then( () => {
		if ( typeof callback !== "undefined" ) callback()
	}).finally( () => {
		queue.shift()
	})
}

export async function editMessage( webhookUrl: string, messageId: string, components: any[], callback?: () => void ) {
	const webhook = new WebhookClient({ url: webhookUrl })
	webhook.editMessage( messageId, {
		components: components,
		flags: [ MessageFlags.IsComponentsV2 ],
		withComponents: true,
		allowedMentions: {
			parse: []
		}
	}).then( () => {
		if ( typeof callback !== "undefined" ) callback()
	})
}