# Consigna: Crear y Gestionar un Historial con Arrays y Objetos en JavaScript

En este ejercicio, vamos a crear un sistema básico de historial utilizando arrays y objetos en JavaScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.

## Objetivo

- **Crear un historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
- **Usar métodos avanzados de arrays** como `filter`, `find`, y `findIndex` para gestionar el historial.

## Tareas

1. **Crear una estructura de datos para el historial**:
   - El historial será un array llamado `historial`, que al principio estará vacío.
   - Cada acción en el historial será un objeto con las siguientes propiedades:
     - `id`: un número que identifica de forma única cada acción.
     - `descripcion`: una breve descripción de la acción.
     - `fecha`: la fecha y hora en que se agregó la acción.

2. **Crear funciones para gestionar el historial**:
   - **Agregar una nueva acción al historial**: Esta función tomará un `id` y una `descripcion`, y los agregará como un nuevo objeto al array `historial`. Debe registrar también la fecha y hora actuales. (esto lo podemos hacer con new Date().toISOString() ) 
   - **Eliminar una acción del historial por ID**: Esta función tomará un `id` como parámetro y eliminará la acción que tenga ese `id` del historial.
   - **Eliminar todo el historial**: Esta función borrará todas las acciones del historial, dejando el array vacío.

3. **Crear una función para mostrar el historial**:
   - Esta función imprimirá en la consola todas las acciones del historial, mostrando su `id`, `descripcion`, y `fecha`.