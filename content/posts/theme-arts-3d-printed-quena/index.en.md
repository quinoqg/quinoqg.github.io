---
weight: 1
title: "Impresión 3D de una quena"
date: 2020-03-31T21:29:01+08:00
lastmod: 2020-03-31T21:29:01+08:00
draft: false
author: "Gustavo"
authorLink: "https://gquino.com"
description: "Impresión 3D de una quena."
images: []
resources:
- name: "featured-image"
  src: "featured-image.jpg"

tags: ["music",'DIY']
categories: ["Arts","Academia"]

lightgallery: true

toc:
  auto: false
---
## Introducción

Desarrollé este proyecto con el ánimo de combinar dos de mis aficiones: la música y la tecnología. Soy ingeniero investigador en materiales aeroespaciales y llevo aproximadamente 15 años tocando la quena, la flauta andina. Desde casi 10 años empecé a comprar o mandar a hacer quenas a luthieres profesionales, maestros en el arte de la construcción de quenas. Entre los materiales más empleados están el bambú, que crece en diversas partes de América, y otras maderas diversas como la jacarandá, el ébano, etc. En realidad se puede construir quenas con casi cualquier material sólido, incluso existen quenas de hueso o de metal. El luthier se encarga normalmente de diseñar la quena y de construirla. Los métodos de fabricación son principalmente métodos tradicionales como el taladrado y torneado, que básicamente extraen material para obtener el producto final. La impresión 3D, tiene un paradigma completamente opuesto, ya que adiciona material para obtener la pieza final, reduciendo de esta manera los residuos.

La impresión 3D es una tecnología que si bien ya existe desde hace varias décadas, se ha popularizado mucho recientemente. Esta polularidad ha sido impulsada principalmente por la innegable mejora tecnológica (mejores tolerancias y rapidez de fabricación) y mayor accesibilidad. En la actualidad, los materiales con los cuales se puedes imprimir componentes no solamente se limitan a plásticos, sino que se puede imprimir con materiales metálicos, compuestos, fibras de carbono o vegetal, e incluso tejido biológico.

En este trabajo intento mostrar que  es posible conseguir una quena fabricada mediante impresión 3D. Los invito a descubrir conmigo los resultados obtenidos y a intentar Uds mismo imprimir esta quena y contarme cómo les fue.

## Creando el modelo

Debido a que no conozco las técnicas de diseño de quenas (cálculo de longitud, diámetros y posicionamiento de agujeros, etc), simplemente copié las dimensiones de una quena que tenía midiendo con una regla común y corriente de 30cm. Esta forma de medición tiene un error de 0.5mm, lo cual puede ser significativo para el tamaño de quena que deseaba imprimir.
Utilicé esas medidas para construir el modelo virtual mediante el software Solidworks 2016. Para quienes están familiarizados con programas de diseño computacional, lo único complicado de construir en el modelo es la escotadura, también conocida como bisel. La forma en que la construí fue creando cortes cilíndricos desde planos oblicuos.

Pueden conseguir el modelo 3D (versión en una pieza) de forma gratuita en el siguiente link:

<a href="https://skfb.ly/6PY88" target="_blank" rel="noopener norefferer">
<figure align="center">
  <img src="Post3DprintedModel.png" alt="Descarga gratis">
  <div align="center">Modelo 3D de la QuinoQuena. Descarga gratis! </div>
</figure>
</a>

## Imprimiendo
La impresión la realicé mediante el servicio que brinda la Biblioteca Radclife de la Universidad de Oxford [link](https://libguides.bodleian.ox.ac.uk/3dprintingscanning). La impresora empleada fue la Prusa i3 MK3S y el material fue filamento de PLA.

El costo del servicio por 6 horas de impresión fue de 6 libras, aproximadamente 7.80 USD (noten que el servicio está significativamente suvbencionado por la universidad). Este tiempo de impresión no solamente depende de la geometría global de la quena (volumen), sino que es posible hacer que el interior de las paredes sea más "hueco" haciendo la quena más ligera lo que abarataría el costo de impresión.

<figure align="center">
  <img src="Post3DPrintQuenaProcess.png" alt="Impresión 3D de una quena"/>
  <div align="center">Impresión 3D de la QuinoQuena. </div>
</figure>

## Resultados

La quena impresa en dos partes tuvo muy buena tolerancia en la unión, la cual es firme y al mismo tiempo no requiere demasiada fuerza para su ensamble. El acabado superficial es rugoso y muestra líneas horizontales, típico de las piezas impresas en 3D, debido a la dirección en que el material fue depositado.

La calidad de sonido es aceptable, mostrando un volumen similar a la quena de bambú y un color particular. En el siguiente vídeo se puede apreciar el sonido, y unas pruebas de afinación.
<div align="center">
  <iframe width="420" height="315" align="center" frameBorder="0"
  src="https://www.youtube.com/embed/CGCw1c76_8E">
  </iframe> 
  <br/> <a href="https://www.youtube.com/embed/CGCw1c76_8E" target="_blank" rel="noopener norefferer"> Video completo de la experiencia. </a>
</div>

Anímate a imprimir una QuinoQuena! y usa el hashtah #quinoquena