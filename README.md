<div align="center">
  <img src="https://user-images.githubusercontent.com/36193643/200554001-c98e1bbe-8aa2-4d7f-ac01-f9b3252cc94b.png" />
</div>

<h1 align=center>Realm trove</h1>
<p align=center>
  A web app for tracking Realm of Mad God loot items and quests.
</p>

![banner](https://user-images.githubusercontent.com/36193643/208254039-2f17701c-42b9-4bba-894a-37f1f0700f76.png)

## 🚀 Features

- Loot tracking for UT & ST items and blueprints
- Export your loot via generated screenshot
- Quest and quest mark tracking
- Share your loot profile with a unique link

## 🔨 Built With

- [Nuxt 3](https://v3.nuxtjs.org/)
- [Vue 3](https://vuejs.org/)
- [Firebase](https://firebase.com/)
- [WindiCSS](https://windicss.org/)
- [Vercel](https://vercel.com/)

## ⚙️ Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

1. Create a Firebase project: [console.firebase.google.com](https://console.firebase.google.com/)
2. Register a new Web app
3. Generate a new service account key
4. Define a `.env` file with the following entries:

```sh
SERVICE_ACCOUNT=
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
MEASUREMENT_ID=
```

**Note**: the service account entry must be a single line JSON string surrounded by single quotations (`'`)

5. Enable the Google provider under Authentication -> Sign-in method
6. Add a new user
7. Start the project with the following command:

```sh
yarn dev
```

Check out the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
