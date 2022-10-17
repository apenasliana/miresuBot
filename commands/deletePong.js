const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('deletepong')
    .setDescription('sends you a pong and delete it after some seconds'),
  async execute(interaction) {
    await interaction.reply('Ponger!')
    await wait(4000)

    await interaction.deleteReply()
  }
}

//this is a deleting responses example
