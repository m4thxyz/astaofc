
# aptoide-api

A simple Node.js wrapper for the Aptoide app store API that allows you to search and download Android applications.

## Installation

```bash
npm install aptoide-api
```

## Features

- Search for apps on Aptoide store
- Get detailed app information (name, package, size, version, downloads, rating)
- Download APK files
- No API key required

## Usage

```javascript
const { search, download } = require('aptoide-api');

// Search for apps
const searchApp = async () => {
    try {
        const apps = await search('minecraft', 1); // second parameter is limit (default: 10)
        console.log(apps);
        // Returns array of apps with details:
        // [{
        //     name: 'Minecraft',
        //     package: 'com.mojang.minecraft',
        //     size: '123.45MB',
        //     version: '1.20.0',
        //     downloads: 1000000,
        //     rating: 4.5,
        //     icon: 'https://cdn.aptoide.com/...',
        //     downloadUrl: 'https://pool.apk.aptoide.com/...'
        // }]
    } catch (error) {
        console.error(error);
    }
};

// Download an APK
const downloadApk = async (url) => {
    try {
        const apkBuffer = await download(url);
        // Returns Buffer containing APK data
    } catch (error) {
        console.error(error);
    }
};
```

## API Reference

### search(query, limit = 10)
Search for apps on Aptoide store.

Parameters:
- `query` (string): The search term
- `limit` (number): Maximum number of results (default: 10)

Returns: Promise<Array> of app objects containing:
- name
- package
- size
- version
- downloads
- rating
- icon
- downloadUrl

### download(url)
Download an APK file.

Parameters:
- `url` (string): The download URL of the APK

Returns: Promise<Buffer> containing the APK data

_```By Naxordeve(Diegoson)```

# SOUTH AFRICA

## License

MIT
