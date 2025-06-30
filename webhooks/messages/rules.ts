import { setTimeout } from "timers/promises"

import { sendComponents } from "../webhook"

import rulesTitle from "../payloads/rules/rules_title"
import rulesList from "../payloads/rules/rules_list"
import rulesNotes from "../payloads/rules/rules_notes"

const webhookUrl = process.env[ "TEST_WEBHOOK" ] as string

try {
	await sendComponents( webhookUrl, [ rulesTitle ] )
	await setTimeout( 1000 )
	await sendComponents( webhookUrl, [ rulesList ] )
	await setTimeout( 1000 )
	await sendComponents( webhookUrl, [ rulesNotes ] )
} catch ( error ) {
	console.error( error )
}