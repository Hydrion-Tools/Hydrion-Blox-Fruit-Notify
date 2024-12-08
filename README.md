
# Hydrion Blox Fruit Notify

Welcome to **Hydrion Blox Fruit Notify**, an advanced selfbot for Discord that sends custom notifications and message webhooks based on Discord messages. This bot monitors Discord channels for specific messages, processes them, and then sends them to configured webhooks with enhanced formatting.

## Features

- **Custom Webhooks**: Sends messages to configured webhooks for different channels.
- **Embeds**: Supports sending Discord embeds with dynamic field replacements.
- **Customizable**: Easily modify webhook URLs and field replacements in the configuration file.
- **Express Server**: Includes a basic Express server running on port 3000.

## Requirements

- **Node.js** (Version 14 or later recommended)
- **npm** (Node Package Manager, comes with Node.js)

## Getting Started

Follow these steps to set up and run **Hydrion S3LFB0T**.

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/Hydrion-S3LFB0T.git
cd Hydrion-S3LFB0T
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

### 3. Create the `config.json` File

In the root directory, create a file named `config.json` with the following structure:

```json
{
  "token": "YOUR_DISCORD_TOKEN",
  "webhooks": {
    "channelID1": "webhookURL1",
    "channelID2": "webhookURL2"
  }
}
```

Replace `YOUR_DISCORD_TOKEN` with your Discord bot's token, and add webhook URLs for each channel you want to send notifications to.

### 4. Run the Bot

Once your `config.json` file is ready, start the selfbot using:

```bash
node index.js
```

### 5. Web Server

An Express server is included for basic testing. The bot also listens on port 3000 by default.

- Open `http://localhost:3000` in your browser to see the basic "Hello World" response.

## Configuration

You can modify the following options in the `config.json` file:

- `token`: Your Discord selfbot token.
- `webhooks`: A list of channel IDs and their corresponding webhook URLs.

You can also modify the `replacements` object in the code to change how fields are displayed.

### Replacements

The bot replaces specific field names in the embeds. The default replacements are:

- `"Haki Color Name"` → `"🎨 Haki Color Name"`
- `"Player Count"` → `"👥 Player Count"`
- `"Job Id"` → `"🔗 Job ID"`
- `"Join Script"` → `"🚀 Join Script"`
- `"Sword Name"` → `"⚔️ Sword Name"`
- `"Moon Status"` → `"🌕 Moon Status"`
- `"Time"` → `"⌚ Time"`
- `"Boss Name"` → `"👹 Boss Name"`
- `"Fruit Name"` → `"🍑 Fruit Name"`

Modify these as needed for your specific use case.

## Notes

- **Privacy**: Never share your `token` or `config.json` file with others.
- **Webhooks**: Ensure your webhooks are valid and have the correct permissions.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it as needed!

## Contribution

We welcome contributions! Here's how you can help:

- 🌟 Star this repository to show your support.
- 🐛 Report issues or bugs in the **Issues** tab.
- 🔧 Fork the repo, make improvements, and submit a **Pull Request**.

---

🌟 **Enjoy automating with Hydrion S3LFB0T!** 🌟
# Hydrion-Blox-Fruit-Notify
