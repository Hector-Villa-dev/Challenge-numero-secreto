# Challenge-numero-secreto
Challenge crear proyecto numero secreto para alura

Este proyecto es un juego sencillo de "Amigo Secreto" en el que los usuarios pueden agregar nombres a una lista y luego sortear aleatoriamente a uno de ellos. Al final, cuando todos los nombres han sido sorteados, el juego muestra una alerta indicando que se han sorteado todos los participantes.


# Amigo Secreto

- **Agregar nombres** de participantes.
- **Sortear** de manera aleatoria.
- **Notificar** el resultado al final con todos los participantes sorteados.

---

## Características

1. **Agregar Amigos**: Permite ingresar el nombre de un nuevo participante y validar que no esté repetido.
2. **Lista Dinámica**: Muestra en tiempo real los participantes que se van agregando.
3. **Sorteo Aleatorio**: Al presionar “Sortear amigo”, se selecciona un participante al azar.
4. **Sorteo Completo**: Al terminar de sortear a todos, aparece un mensaje con la lista de todos los participantes.

---

## Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge, etc.).
- No se requiere conexión a Internet; es suficiente con abrir el archivo localmente.

---

## Instrucciones de Uso

1. **Clona** o **descarga** este repositorio en tu computadora.
2. **Abre** el archivo `index.html` en tu navegador web, puedes instalar la extension de Live Server para esto en tu visual studio code.

3. **Agrega nombres**:
   - Escribe el nombre de un participante en el campo de texto.
   - Haz clic en **“Añadir”**.
   - Verás el nombre agregado en la lista.

4. **Sortear Amigo**:
   - Presiona **“Sortear amigo”** para obtener un nombre al azar.
   - El nombre sorteado se mostrará en el área de resultados.
   - Cada nombre sorteado se elimina de la lista activa y pasa a la lista de sorteados.

5. **Final del Sorteo**:
   - Cuando todos los participantes hayan sido sorteados, se mostrará un mensaje con la lista de todos ellos.

---

## Estructura del Proyecto

El proyecto incluye los siguientes archivos:

.
├── index.html
├── style.css
└── app.js
