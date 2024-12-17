# REACT Validate Route TypeScript

Proyecto para validar las rutas públicas y privadas usando React-Route-Dom

## Instalaciones

- Rutas
  - React Router Dom
  - Tipos de React Router Dom
- Valores Globales
  - Redux
  - Tipos de Redux
  - Toolkit de Redux

```sh
# react-router-dom
npm i react-router-dom

# @types/react-router-dom
npm i @types/react-router-dom

# react-redux
npm i react-redux

# @types/react-redux
npm i @types/react-redux

# @reduxjs/toolkit
npm i @reduxjs/toolkit
```

## Implementación

- Services: donde se hace la llamada a la API.
- Utilities: Funciones de utilidades globales.
- Models: se creó el modelo del usuario para el login, roles de usuario y los nombres de las rutas.
- Redux: Contiene todas las variables y acciones globales que se usará en toda la aplicación.
  - State: Se crean Slice, que es una función que contiene un estado inicial y las acciones que contendrá la aplicación de forma global por cada Slice.
- Guard:
  - Validación de las rutas para dar acceso al usuario.
  - Validación de los roles del usuario para dar acceso.
- App.tsx:
  - Suspense: Muestra un cargando mientras se esta validando las rutas.
  - Provider: Asignacción del store de Redux para utilizar las variables y funciones globales.
  - Se creo otro route para que realice la validación del rol del usuario.
