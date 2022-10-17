const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pingping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!')
    await wait(2000)
    await interaction.editReply('Pong again you loser!')
  }
}

//this is a EDITING RESPONSES example
//to check bot's ping use : https://discordjs.guide/popular-topics/faq.html#how-do-i-check-the-bot-s-ping
//thanks past me
