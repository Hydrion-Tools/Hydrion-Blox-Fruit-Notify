const { Client, Intents } = require('discord.js-selfbot-v13');
const axios = require('axios');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

if (!config.token || !config.webhooks || Object.keys(config.webhooks).length === 0) {
  console.error('Error: Missing required configuration values in config.json');
  process.exit(1);
}

const replacements = {
  fields: {
    "Haki Color Name": "🎨 Haki Color Name",
    "Player Count": "👥 Player Count",
    "Job Id": "🔗 Job ID",
    "Join Script": "🚀 Join Script",
    "Sword Name": "⚔️ Sword Name",
    "Moon Status": "🌕 Moon Status",
    "Time": "⌚ Time",
    "Boss Name": "👹 Boss Name",
    "Fruit Name": "🍑 Fruit Name"
  }
};

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  checkUpdate: false,
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  const webhookURL = config.webhooks[message.channel.id];
  if (!webhookURL) return;

  let embedContent = null;

  if (message.embeds.length > 0) {
    const embed = message.embeds[0];

    const title = "Blox Fruits Notifier | Hydrion";

    const fields = embed.fields.map((field) => {
      const newFieldName = replacements.fields[field.name] || field.name;
      return {
        name: newFieldName,
        value: field.value,
        inline: true
      };
    });

    embedContent = {
      embeds: [
        {
          author: {
            name: "hydra_devx",
            icon_url: "https://cdn.discordapp.com/avatars/1251647487081709682/01400c3876ba1264e5360888fef97642.webp?size=1024",
            url: "https://www.hydras-bio.vercel.app/"
          },
          title: title,
          description: embed.description || "No description provided.",
          color: 0x7289DA,
          fields: fields,
          footer: {
            text: "Powered by Hydrion",
            icon_url: "https://cdn.discordapp.com/avatars/1251647487081709682/01400c3876ba1264e5360888fef97642.webp?size=1024"
          },
          timestamp: new Date()
        }
      ]
    };
  }

  if (!embedContent && message.content.trim()) {
    embedContent = {
      content: message.content
    };
  }

  if (!embedContent) return;

  try {
    const response = await axios.post(webhookURL, embedContent);
    console.log(`Message sent to webhook for channel ${message.channel.id}:`, response.data);
  } catch (error) {
    console.error(`Error sending message to webhook for channel ${message.channel.id}:`, error.response ? error.response.data : error);
  }
});

client.login(config.token);

const express = require('express');
const app = express();

// Define a port, defaulting to 3000 if PORT is not set in the environment
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});