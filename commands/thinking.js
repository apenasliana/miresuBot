const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName('thinking')
    .setDescription('let the bot think for some seconds'),
  async execute(interaction) {
    await interaction.deferReply()
    await wait(4000)
    await interaction.editReply('OK, I got you an answer!')
    await wait(8000)
    await interaction.editReply('Your answer is: ')
    await wait(8000)

    await interaction.editReply('Wait for it. ')
    await wait(400)

    await interaction.editReply('Wait for it.. ')
    await wait(400)

    await interaction.editReply('Wait for it... ')
    await wait(400)

    await interaction.editReply('Wait for it.... ')
    await wait(400)

    await interaction.editReply('Wait for it..... ')
    await wait(400)

    await interaction.editReply('Wait for it...... ')
    await wait(1000)
    await interaction.editReply('O JOGO')
  }
}
// this is an Deferred responses example
//remember: discord needs a 3 second acknowledgement that the interaction was received;
// after this first interaction you have a 15 min token to do another task and then send the result.
