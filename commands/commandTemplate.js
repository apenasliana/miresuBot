const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nameherewithoutcaps')
    .setDescription('description'),
  async execute(interaction) {
    //CODE
    await interaction.reply('hey, this is a test lmao. Fuck off')
    //CODE
  }
}
