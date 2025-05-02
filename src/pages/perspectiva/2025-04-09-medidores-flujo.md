---
layout: ../../layouts/post.astro
title:  "Evaluación de proyectos: ¿qué son la TIR y el VAN?"
date:   2025-04-09 00:00:00 +0000
categories: [finanzas, conceptos]
tags: [TIR, VAN, NPV, IRR, flujo de fondos, decisiones de inversión]
math: true
image:
  path: ../../assets/img/posts/medidores-flujo.webp  
  alt: Medidores de flujo
---

## Evaluación de proyectos: ¿qué son la TIR y el VAN?

Cuando se evalúa si un proyecto o inversión vale la pena, especialmente cuando hay **flujos de caja en el tiempo**, dos herramientas clave son:

- **VAN (Valor Actual Neto)**  
- **TIR (Tasa Interna de Retorno)**

Ambas se basan en el **valor del dinero en el tiempo**, algo fundamental en finanzas.

---

### 💸 ¿Qué es el VAN (Valor Actual Neto)?

El **VAN** mide cuánto valor se crea (o destruye) al llevar todos los flujos futuros al presente, descontándolos con una tasa determinada (por ejemplo, el costo de capital).

**Fórmula:**

```math
VAN = ∑ [FCt / (1 + r)^t] - Inversión inicial
```


Donde:

- **FCt**: Flujo de caja en el año *t*
- **r**: Tasa de descuento
- **t**: Año
- **Inversión inicial**: el desembolso al comienzo del proyecto

📌 *Interpretación:*  
- Si **VAN > 0**, el proyecto **crea valor**.  
- Si **VAN < 0**, **destruye valor**.

---

### 📈 ¿Qué es la TIR (Tasa Interna de Retorno)?

La **TIR** es la tasa de descuento que hace que el VAN sea igual a **cero**. Es decir, **la rentabilidad promedio anual** que generará el proyecto.

**Se calcula numéricamente**, no tiene una fórmula directa simple.

📌 *Interpretación:*  
- Si **TIR > tasa de descuento**, el proyecto es **rentable**.
- Si **TIR < tasa de descuento**, **no conviene**.

---

### 📊 Ejemplo básico

Supongamos:

- Inversión inicial: $1.000
- Flujo de caja: $400 por año durante 3 años
- Tasa de descuento: 10%

Cálculo del VAN:

```math
VAN = 400 / (1+0.10)^1 + 400 / (1+0.10)^2 + 400 / (1+0.10)^3 - 1000 = 363.64 + 330.58 + 300.53 - 1000 ≈ -5.25
```


➡️ *Este proyecto tendría un VAN negativo: no es rentable con esa tasa de descuento.*

---

## ⚠️ Consideraciones y trampas comunes

### 📌 La TIR puede confundir:

- **Proyectos con flujos mixtos (positivos y negativos)** pueden tener **más de una TIR** o ninguna.
- TIR **no refleja tamaño del proyecto**: un proyecto pequeño puede tener TIR alta, pero poco impacto económico.
- Comparar proyectos solo por TIR puede ser **engañoso**.

### 📌 El VAN sí toma en cuenta:

- **Tamaño y valor total** creado.
- **Fluctuaciones en los flujos.**
- Es el indicador **preferido en finanzas corporativas.**

---

## 🧠 En resumen

| Indicador | Mide                 | Bueno si...             | Consideraciones                      |
| --------- | -------------------- | ----------------------- | ------------------------------------ |
| **VAN**   | Valor neto creado    | VAN > 0                 | Depende de la tasa de descuento      |
| **TIR**   | Rentabilidad interna | TIR > tasa de descuento | Puede ser engañosa con flujos mixtos |

---

> 🎯 Recomendación práctica: **usar ambos indicadores** y siempre considerar el contexto del proyecto, su duración, magnitud y riesgos.

