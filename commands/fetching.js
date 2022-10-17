const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fetchreply')
    .setDescription('fetch the message and log it'),
  async execute(interaction) {
    await interaction.reply('Pong!')
    const message = await interaction.fetchReply()
    console.log(message)
  }
}

//this is a Fetching responses example
