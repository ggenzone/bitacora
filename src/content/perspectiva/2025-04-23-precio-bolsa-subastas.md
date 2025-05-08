---
title: "¿Cómo se calcula el precio en las bolsas? Subasta inicial y subasta final"
date: 2025-04-23 15:28:00 +0000
categories: [finanzas, mercados]
tags: [bolsa, precio, subasta, mercados financieros, formación de precios]
math: false
image:
  path: ../../assets/img/posts/precio-bolsa-subastas.png
  alt: Cálculo del precio en bolsa y subastas
description: "Un análisis del precio de bolsa y el sistema de subastas en los mercados financieros."
---

> 🏛️ El precio de una acción en la bolsa no es arbitrario: surge del encuentro entre oferta y demanda, y en momentos clave se determina mediante subastas. Descubre cómo funciona este proceso fundamental para los mercados financieros.

---

## 📈 ¿Cómo se forma el precio en la bolsa?

El precio de un activo en la bolsa se determina por el mecanismo de **subasta continua** (o mercado continuo), donde compradores y vendedores introducen órdenes de compra (bids) y de venta (asks). El precio de la última transacción realizada es el llamado **precio de mercado**.

- Si hay más compradores que vendedores, el precio tiende a subir.
- Si hay más vendedores que compradores, el precio tiende a bajar.

El mercado casa las órdenes según prioridad de precio y, en caso de empate, por prioridad temporal.

---

## ⏰ Subasta de apertura (subasta inicial)

Antes de que abra el mercado, no se realizan operaciones, sino que se recogen órdenes de compra y venta durante un periodo determinado (por ejemplo, de 8:30 a 9:00 en la Bolsa española). Este proceso se denomina **subasta de apertura**.

- Todas las órdenes se introducen sin que se crucen operaciones.
- Al finalizar el periodo, se calcula el **precio de equilibrio de apertura**: el precio al que se podría negociar el mayor volumen posible de acciones.
- Se ejecutan todas las órdenes compatibles con ese precio.

Este mecanismo evita volatilidad excesiva en la apertura y permite que el mercado comience con un precio representativo.

---

## 🔔 Subasta de cierre (subasta final)

Al finalizar la jornada bursátil, se realiza una **subasta de cierre** con una mecánica similar:

- Durante los últimos minutos, se recogen órdenes de compra y venta sin que se crucen operaciones.
- Se calcula el **precio de cierre** como el precio de equilibrio que maximiza el volumen negociado.
- Se ejecutan las órdenes compatibles y ese precio se publica como el precio oficial de cierre.

La subasta de cierre es clave porque muchos fondos y derivados se valoran con el precio oficial de cierre.

---

## 🧮 ¿Cómo se calcula el precio de equilibrio en las subastas?

El **precio de equilibrio** es aquel que permite casar el mayor número de acciones entre compradores y vendedores. Si hay empate, se elige el precio más cercano al último precio negociado o el que deja menor volumen pendiente.

**Ejemplo simplificado:**

| Órdenes de compra | Cantidad | Precio |
|-------------------|----------|--------|
| Compra            | 100      | 10,10  |
| Compra            | 200      | 10,00  |
| Compra            | 150      | 9,90   |

| Órdenes de venta  | Cantidad | Precio |
|-------------------|----------|--------|
| Venta             | 120      | 9,90   |
| Venta             | 180      | 10,00  |
| Venta             | 200      | 10,10  |

- El precio de equilibrio será 10,00, donde se puede casar el mayor volumen (200 acciones).

---

## 📋 Tipos de órdenes que se pueden realizar

En la bolsa existen diferentes tipos de órdenes según la intención y estrategia del inversor:

- **Orden de mercado:** Ejecuta la compra o venta al mejor precio disponible en ese momento. Prioriza la rapidez sobre el precio exacto.
- **Orden limitada:** El inversor fija un precio máximo (compra) o mínimo (venta) al que está dispuesto a operar. Solo se ejecuta si el mercado alcanza ese precio.
- **Orden stop (de detención):** Se activa cuando el precio alcanza un nivel determinado, convirtiéndose en orden de mercado. Útil para limitar pérdidas o asegurar ganancias.
- **Orden stop-limit:** Similar a la anterior, pero al activarse se convierte en orden limitada, no de mercado.
- **Orden por lo mejor:** Se ejecuta al mejor precio disponible, pero si no puede completarse, la parte restante queda como orden limitada.

---

## ⏳ Tipos de duración de las órdenes

Las órdenes también pueden diferenciarse por su vigencia:

- **Orden del día:** Solo es válida durante la sesión en la que se introduce. Si no se ejecuta, se cancela al cierre.
- **Orden a mercado abierto (GTC, good till cancelled):** Permanece activa hasta que se ejecuta o el inversor la cancela manualmente.
- **Orden Fill or Kill (FOK):** Se ejecuta en su totalidad de inmediato o se cancela por completo.
- **Orden Immediate or Cancel (IOC):** Ejecuta la parte que pueda de inmediato y cancela el resto.

---

## 🏦 ¿Por qué existen las subastas?

- Evitan movimientos bruscos al inicio y final de la sesión.
- Permiten que el precio se forme con mayor información y volumen.
- Ofrecen transparencia y eficiencia en momentos clave del mercado.

---

> 💬 Las subastas bursátiles son momentos clave donde se concentra la liquidez y se define el precio de referencia para los mercados.
