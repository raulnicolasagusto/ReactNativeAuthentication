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