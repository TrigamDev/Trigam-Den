import { sendMessage } from "../webhook"

import rulesTitle from "../payloads/rules/rules_title"
import rulesNotes from "../payloads/rules/rules_notes"

import beRespectful from "../payloads/rules/list/be_respectful"
import minimizeProfanity from "../payloads/rules/list/minimize_profanity"
import noNSFW from "../payloads/rules/list/no_nsfw"
import minimizeDrama from "../payloads/rules/list/minimize_drama"
import useChannelsCorrectly from "../payloads/rules/list/use_channels_correctly"
import dontSpam from "../payloads/rules/list/dont_spam"
import dontAdvertise from "../payloads/rules/list/dont_advertise"
import followTOS from "../payloads/rules/list/follow_tos"

const webhookUrl = process.env[ "TEST_WEBHOOK" ] as string

try {
	await sendMessage( webhookUrl, [ rulesTitle ] )

	// Rules List
	await sendMessage( webhookUrl, [ beRespectful ] )
	await sendMessage( webhookUrl, [ minimizeProfanity ] )
	await sendMessage( webhookUrl, [ noNSFW ] )
	await sendMessage( webhookUrl, [ minimizeDrama ] )
	await sendMessage( webhookUrl, [ useChannelsCorrectly ] )
	await sendMessage( webhookUrl, [ dontSpam ] )
	await sendMessage( webhookUrl, [ dontAdvertise ] )
	await sendMessage( webhookUrl, [ followTOS ] )

	await sendMessage( webhookUrl, [ rulesNotes ], () => { console.log( "Completed!" ) } )
} catch ( error ) {
	console.error( error )
}