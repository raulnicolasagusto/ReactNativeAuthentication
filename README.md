# ReactNativeAuthentication

Este proyecto es una aplicación de autenticación básica hecha con **React Native** y **Expo**. A continuación, encontrarás una guía paso a paso para crear este proyecto desde cero, instalar todas las dependencias necesarias y ejecutarlo en tu computadora. Está pensado para personas con pocos conocimientos de programación.

---

## 1. Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (incluye npm)
- [Git](https://git-scm.com/) (opcional, pero recomendado)
- Un editor de código, como [Visual Studio Code](https://code.visualstudio.com/)

---

## 2. Crear el proyecto con Expo

Expo facilita el desarrollo de apps en React Native.

1. Instala Expo CLI de forma global (solo la primera vez):

   ```bash
   npm install -g expo-cli
   ```

2. Crea un nuevo proyecto:

   ```bash
   expo init ReactNativeAuthentication
   ```

   Elige la plantilla **blank (TypeScript)** cuando se te pregunte.

3. Entra a la carpeta del proyecto:

   ```bash
   cd ReactNativeAuthentication
   ```

---

## 3. Instalación de dependencias

Instala las siguientes dependencias en el orden indicado, ejecutando cada comando en la terminal dentro de la carpeta del proyecto:

1. **react-hook-form**  
   Para manejar formularios de manera sencilla.

   ```bash
   npm install react-hook-form
   ```

2. **zod**  
   Para validación de datos y esquemas.

   ```bash
   npm install zod
   ```

3. **@hookform/resolvers**  
   Para conectar zod con react-hook-form.

   ```bash
   npm install @hookform/resolvers
   ```

4. **expo-status-bar**  
   Barra de estado de Expo (ya incluida en proyectos Expo, pero puedes asegurarte):

   ```bash
   expo install expo-status-bar
   ```

5. **expo-router**  
   Hacemos una instalacion manual, ( ver documentacion )

   ```bash
   npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

   ---

   luego vamos al package.json y cambiamos la linea que contiene el "main":"index.js", ahora deberia ser:"main": "expo-router/entry", etc. SEGUIR INSTRUCCIONES DE LA DOCUMENTACION 

## 4. Estructura de carpetas y archivos

Tu proyecto debe tener una estructura similar a esta:

```
ReactNativeAuthentication/
│
├── App.tsx
├── index.ts
├── package.json
├── tsconfig.json
├── app.json
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
└── src/
    └── components/
        ├── CustomButton.tsx
        └── CustomInput.tsx
```

- `App.tsx`: Archivo principal de la aplicación.
- `src/components/CustomButton.tsx`: Componente de botón personalizado.
- `src/components/CustomInput.tsx`: Componente de campo de entrada personalizado.

---

## 5. Ejecutar la aplicación

Para iniciar la app, ejecuta en la terminal:

```bash
npm start
```

Se abrirá una ventana en tu navegador. Puedes escanear el código QR con la app **Expo Go** en tu celular para ver la app en tu dispositivo, o presionar `a` para abrir en un emulador de Android, o `w` para abrir en el navegador.

---

## 6. Notas adicionales

- Si tienes errores, asegúrate de que todas las dependencias estén instaladas correctamente.
- Puedes modificar los componentes en `src/components` para personalizar la app.
- Para más información, consulta la [documentación oficial de Expo](https://docs.expo.dev/) y [React Native](https://reactnative.dev/).

---

## ESTA SERIA LA PRIMERA PARTE

## instalacion de clerk

-Luego de contar con esta estructura de carpetas:
ReactNativeAuthentication/
│
├── app/
│   ├── (auth)/
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
|   |   |_layout.tsx
|   |   
│   ├── (protected)/
│   │   ├── _layout.tsx
│   │   └── home.tsx
│   └── index.tsx
|   |__ _layout.tsx
│
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
│
├── src/
│   ├── components/
│   │   ├── CustomButton.tsx
│   │   └── CustomInput.tsx
│   └── providers/
│       └── AuthProvider.tsx
│
├── app.json
├── package.json
├── tsconfig.json


-comenzamos la instalacion de clerk con "npm install @clerk/clerk-expo"

- pegamos la APi key de clerk en .env
-Imortamos el clerkProvider en el app/_layout.tsx ( el rootlayout)
-Borramos la carpeta providers que creamos , seguimos con la instalacion de clerk
-luego de seguir la documentacion y el video https://www.youtube.com/watch?v=vT03ndfr_-w&t=219s, instalamos  "npx expo install expo-web-browser" y "npx expo install expo-auth-session expo-crypto" para agregar la autenticacion con google y demas. 
-Seguimos los pasos de la documentacion de expo : https://clerk.com/docs/custom-flows/oauth-connections
-En este link seguimos los pasos para agregar otros metodos de autenticacion : https://clerk.com/docs/authentication/social-connections/oauth. Ademas aca tenemos que ir para configurar las credenciales de produccion. A continuacion, copio los pasos para esto:
### Add Google as a social connection
Before you start
A Clerk application is required.
A Google Developer account is required.
Enabling OAuth with Google allows your users to sign up and sign in to your Clerk application with their Google account.

Warning

Google OAuth 2.0 does not allow apps to use WebViews for authentication. See the dedicated Google blog post for more information. If your app requires users to sign in via in-app browsers, follow the setup instructions in the Google Help guide.

Configure for your development instance
For development instances, Clerk uses preconfigured shared OAuth credentials and redirect URIs—no other configuration is needed.

In the Clerk Dashboard, navigate to the SSO connections page.
Select Add connection and select For all users.
In the Choose provider dropdown, select Google.
Select Add connection.
Configure for your production instance
For production instances, you must provide custom credentials.

To make the setup process easier, it's recommended to keep two browser tabs open: one for the Clerk Dashboard and one for your Google Cloud Console.

Enable Google as a social connection
In the Clerk Dashboard, navigate to the SSO connections page.
Select Add connection and select For all users.
In the Choose provider dropdown, select Google.
Ensure that both Enable for sign-up and sign-in and Use custom credentials are toggled on.
Save the Authorized Redirect URI somewhere secure. Keep this modal and page open.
Create a Google Developer project
Navigate to the Google Cloud Console.
Select a project or create a new one. You'll be redirected to your project's Dashboard page.
In the top-left, select the menu icon (≡) and select APIs & Services. Then, select Credentials.
Next to Credentials, select Create Credentials. Then, select OAuth client ID. You might need to configure your OAuth consent screen. Otherwise, you'll be redirected to the Create OAuth client ID page.
Select the appropriate application type for your project. In most cases, it's Web application.
In the Authorized JavaScript origins setting, select Add URI and add your domain (e.g., https://your-domain.com and https://www.your-domain.com if you have a www version). For local development, add http://localhost:PORT (replace PORT with the port number of your local development server).
In the Authorized Redirect URIs setting, paste the Authorized Redirect URI value you saved from the Clerk Dashboard.
Select Create. A modal will open with your Client ID and Client Secret. Save these values somewhere secure.
Set the Client ID and Client Secret in the Clerk Dashboard
Navigate back to the Clerk Dashboard where the modal should still be open. Paste the Client ID and Client Secret values that you saved into the respective fields.
Select Add connection.
Note

If the modal or page is no longer open, navigate to the SSO connections page in the Clerk Dashboard. Select the connection. Under Use custom credentials, paste the values into their respective fields.

Test your connection
The simplest way to test your connection is to visit your Clerk app's Account Portal, which is available for all Clerk apps out-of-the-box.

In the Clerk Dashboard, navigate to the Account Portal page.
Next to the Sign-in URL, select Visit. The URL should resemble:
For development – https://your-domain.accounts.dev/sign-in
For production – https://accounts.your-domain.com/sign-in
Sign in with your connection's credentials.
Warning

Google sign-in does not allow users to sign in via in-app browsers.

Important note about switching to production
Google OAuth apps have a publishing status that determines who can access the app. The publishing status setting can be found in the Google Cloud Platform console on the APIs & Services > OAuth consent screen page. You can only view the publishing status if the User type is set to External.

By default, Google OAuth apps are set to the "Testing" publishing status, which is intended for internal testing before opening connections to your intended audience. It's limited to 100 test users and depending on the requested OAuth scopes, they might need to be explicitly added to your trusted user list to be able to connect.

To switch a Google OAuth app to production, you must set the publishing status to "In production". This involves a verification process with regard to your app name, logo, and scopes requested before Google accepts the switch to production.

Ensure that your Clerk production app always uses a corresponding Google OAuth app that is set to the "In production" publishing status, so your end users don't encounter any issues using Google as a social connection.

Block email subaddresses
By default, your app will block any Google account with an email address that contains the characters +, = or # from being able to sign up, sign in, or be added to existing accounts.

For a Google organization with the domain example.com, blocking email subaddresses prevents someone with access to user@example.com from signing up with user+alias@example.com. This is a known Google OAuth vulnerability that could allow unauthorized, as Google organization administrators cannot suspend or delete the email alias account. It's recommended to keep this setting enabled for enhanced security.

To configure this setting:

In the Clerk Dashboard, navigate to the SSO connections page.
Select the Google connection.
Enable or disable Block email subaddresses.
Note

Existing Google accounts with email subaddresses will be blocked by this restriction and won't be able to sign in.
### Add Google as a social connection FIN

