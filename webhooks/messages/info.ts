import { sendMessage } from "../webhook"

import infoTitle from "../payloads/info/info_title"
import infoWelcome from "../payloads/info/info_welcome"

import channelsTitle from "../payloads/info/channels/channels_title"
import bulletinBoardChannels from "../payloads/info/channels/list/bulletin_board"
import denChannels from "../payloads/info/channels/list/den"
import interestsChannels from "../payloads/info/channels/list/interests"
import seriousChannels from "../payloads/info/channels/list/serious"
import trigamBotnetChannels from "../payloads/info/channels/list/trigam_botnet"

import rolesTitle from "../payloads/info/roles/roles_title"
import staffRoles from "../payloads/info/roles/list/staff"
import descriptorRoles from "../payloads/info/roles/list/descriptors"
import colorRoles from "../payloads/info/roles/list/color"
import pronounRoles from "../payloads/info/roles/list/pronouns"
import pingRoles from "../payloads/info/roles/list/pings"

import socialsTitle from "../payloads/info/socials/socials_title"
import socialsButtons from "../payloads/info/socials/socials_buttons"

import divider from "../payloads/divider"

const webhookUrl = process.env[ "TEST_WEBHOOK" ] as string

try {
	await sendMessage( webhookUrl, [ infoTitle ] )
	await sendMessage( webhookUrl, [ infoWelcome ] )

	await sendMessage( webhookUrl, [ divider, divider ] )
	
	// Channels List
	await sendMessage( webhookUrl, [ channelsTitle ] )
	await sendMessage( webhookUrl, [ bulletinBoardChannels ] )
	await sendMessage( webhookUrl, [ denChannels ] )
	await sendMessage( webhookUrl, [ interestsChannels ] )
	await sendMessage( webhookUrl, [ seriousChannels ] )
	await sendMessage( webhookUrl, [ trigamBotnetChannels ] )

	//
	await sendMessage( webhookUrl, [ divider, divider ] )
	
	// Roles List
	await sendMessage( webhookUrl, [ rolesTitle ] )
	await sendMessage( webhookUrl, [ staffRoles ] )
	await sendMessage( webhookUrl, [ descriptorRoles ] )
	await sendMessage( webhookUrl, [ colorRoles ] )
	await sendMessage( webhookUrl, [ pronounRoles ] )
	await sendMessage( webhookUrl, [ pingRoles ] )

	//
	await sendMessage( webhookUrl, [ divider, divider ] )

	// Socials
	await sendMessage( webhookUrl, [ socialsTitle ] )
	await sendMessage( webhookUrl, [ socialsButtons ] )
} catch ( error ) {
	console.error( error )
}