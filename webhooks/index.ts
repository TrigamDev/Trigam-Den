import { MessageFlags, WebhookClient } from "discord.js"

import rulesTitle from "./payloads/rules/rules_title"
import rulesList from "./payloads/rules/rules_list"
import test from "./payloads/test"



const webhookUrl = process.env[ "TEST_WEBHOOK" ] as string

try {
	await sendComponents( webhookUrl, [ rulesList ] )
} catch ( error ) {
	console.error( error )
}



async function sendComponents( webhookUrl: string, components: any[] ) {
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

async function editComponents( webhookUrl: string, messageId: string, components: any[] ) {
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