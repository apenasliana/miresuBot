const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hewwo')
    .setDescription('hewwo in you local language'),
  async execute(interaction) {
    const locales = {
      pl: 'Witaj Świecie!',
      de: 'Hallo Welt!',
      pt: 'Olá!'
    }
    interaction.reply(
      locales[interaction.locale] ?? 'Hello World (default is english)'
    )
  }
}
