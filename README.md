<<<<<<< HEAD
# react-scaffolding

Este proyecto de React Native utiliza una estructura de carpetas organizada para mejorar la modularidad y la legibilidad del código. A continuación se describe la estructura y la responsabilidad de cada carpeta.

## Estructura de Carpetas

```plaintext
src/
|-- example/
|-- shared/
|   |-- assets/
|   |   |-- images/
|   |   |-- fonts/
|   |-- components/
|   |-- screens/
|   |-- hooks/
|   |-- utils/
|       |-- dateFormatter/
|           |-- dateFormatter.ts
|           |-- dateFormatter.spec.ts
|-- domain/
|   |-- assets/
|   |   |-- images/
|   |-- api/
|   |-- types/
|   |-- components/
|       |-- atoms/
|       |-- molecules/
|       |-- organisms/
|   |-- screens/
|       |-- MyScreen/
|           |-- MyScreen.screen.tsx
|           |-- MyScreen.test.tsx
|-- context/
|   |-- MyContext/
|       |-- MyContext.tsx
|       |-- MyProvider.tsx
|       |-- MyContext.wrapper.tsx
|   |-- hooks/
|       |-- MyHook/
|           |-- useMyHook.ts
|           |-- useMyHook.test.ts
|-- navigators/
|   |-- DomainNavigator.tsx

```
### Responsabilidad de Carpetas

- **`example/`**: Contiene proyectos de ejemplo para probar o revisar funcionalidades internas del repositorio.
- **`shared/`**: Contiene funcionalidades compartidas entre dominios.
- **`domain/`**: Contiene las funcionalidades específicas de un dominio de la aplicación, como componentes, pantallas, API y tipos.
- **`context/`**: Contiene la implementación del contexto y los hooks personalizados utilizados en la aplicación.
- **`navigators/`**: Contiene navegadores de la aplicación, como el `DomainNavigator`.
- **`assets/`**: Contiene recursos visuales como imágenes y fuentes.
- **`components/`**: Contiene componentes visuales de la aplicación, siguiendo la nomenclatura de atomic design.
- **`screens/`**: Contiene las pantallas de la aplicación.
- **`hooks/`**: Contiene hooks personalizados utilizados en la aplicación.
- **`utils/`**: Contiene utilidades generales, como el `dateFormatter`.

## Notas

Asegúrate de seguir las prácticas de nomenclatura y estructura para mantener el proyecto organizado y fácil de mantener.
La estructura puede adaptarse según las necesidades de tu proyecto.


## Instrucciones para Ejecutar el Proyecto

Instalación de Dependencias: En primer lugar, asegúrate de tener Node.js instalado en tu máquina. Luego, sigue estos pasos:
bash

# Navega al directorio del proyecto
```cd nombre-de-tu-proyecto

# Instala las dependencias
npm install
```
# Iniciar la Aplicación: Una vez que todas las dependencias estén instaladas, puedes iniciar la aplicación:
``` npm start ```

Esto iniciará tu aplicación de React Native.

# Instalar PODs (iOS):
``` 
cd ios
npx-pod install 
```

Esto instalara los PODS de tu aplicación de React Native.

# Validar versión Java para Android:

En caso de recibir errores de gradlew, se debe validar utilizar una versión compatible con Gradlew. Validar compatibilidad en: https://docs.gradle.org/current/userguide/compatibility.html


## Ejecución de Pruebas Unitarias

El proyecto utiliza Jest para ejecutar pruebas unitarias. Aquí está el proceso para ejecutar las pruebas:

# Ejecutar Pruebas Unitarias: Para ejecutar todas las pruebas unitarias, ejecuta el siguiente comando:
``` npm test ```

Esto ejecutará las pruebas unitarias definidas en diferentes archivos de prueba dentro del proyecto.
# Ver Resultados de Pruebas: 

Después de ejecutar las pruebas, recibirás una salida similar a la que proporcionaste:
```
PASS  src/shared/utils/dateFormatter/dateFormatter.test.tsx
PASS  src/example/components/atoms/MyComponent/MyComponent.test.tsx
PASS  src/example/components/atoms/Header/Header.test.tsx
PASS  src/example/components/atoms/MyHookComponent/MyHookComponent.test.tsx
PASS  src/example/components/screens/HomeScreen/HomeScreen.test.tsx

Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Time:        ... s
Ran all test suites.
```

Esto indica que todas las pruebas unitarias pasaron con éxito.


=======
# genesys-react-template
>>>>>>> tr-demo-scaffolding-front-react/develop
