const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('followup')
    .setDescription('This is a follow up Pong'),
  async execute(interaction) {
    //CODE
    await interaction.reply('Pong!')
    await interaction.followUp('você perdeu O JOGO')
    //CODE
  }
}

//this is a follow up response example
