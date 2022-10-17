const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('secretpong')
    .setDescription('Replies with a sus Pong!'),
  async execute(interaction) {
    await interaction.reply({ content: 'Secret Pong!', ephemeral: true })
  }
}

// this is an Ephemeral responses example
