<div id="volver"></div>


 <div align="center">
 <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/da965cc5-8efa-40ae-95e4-f0229653d2fc" alt="Logo" width="100%">
 </div>

<h3 align="center">Autora <br/>
  Gabriela Gomez </h3>
<br/>
<p align="center"> 
<a href="https://burguerqueen.vercel.app/login" target="_blank"><strong>Acceso a Despliegue »</strong></a>
</p>

## Índice

* [1. Acerca del Proyecto](#1-acerca-del-proyecto)
* [2. Prototipo](#2-prototipo)
* [3. Características de la Aplicación](#3-características-de-la-aplicación)
* [4. Cómo Probar la Aplicación](#4-cómo-probar-la-aplicación)

***

## 1. Acerca del Proyecto

Un pequeño restaurante de hamburguesas que está creciendo necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

Esta es la información que tenemos de la clienta:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestrxs clientxs.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> Nuestrxs clientxs son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. La usuaria debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

Además la clienta nos ha dado un [link a la documentación](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
que especifica el comportamiento esperado de la API HTTP que deberás consumir.
Ahí puedes encontrar todos los detalles de los _endpoints_, como por ejemplo
qué parámetros esperan, qué deben responder, etc.

El objetivo principal de es aprender a construir una _interfaz web_ usando
el _framework_ elegido (React, Angular o Vue). Todos estos frameworks de
Front-end tratan de solucionar el mismo problema: **cómo mantener la interfaz
y el estado sincronizados**. Así que esta experiencia espera familiarizarte con
el concepto de _estado de pantalla_, y como cada cambio sobre el estado se va
a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

## 2. Prototipo
Los prototipos fueron realizados en **figma**, con notas adicionales para considerar en la edición y diseño del proyecto original. Este modelo recibió feedback mediante usuarios en cuanto a usabilidad y diseño.

<div align="center">
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/603ea353-f8ed-49e4-aa27-5337f6030214" width="600px"> <br/> <br/>
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/46a6d779-8e03-4e43-9a6a-27fbc81b639f" width="600px"> <br/> <br/>
</div>

## 3. Características de la Aplicación
Utilizando un interceptor y un servicio para registrar las llamadas a la api desde un mock, se dividieron las vistas de los componentes haciendo el filtro de acuerdo al rol del trabajador; esto con la finalidad de que cada empleado lleve sólo la responsabilidad de su rol, para que la aplicación lleve mayor fluidez en cuanto a lo que un usuario puede hacer dentro de la misma. 

Lo primero que se nota en la página es una vista de login, en la que cada empleado tiene su correo y contraseña únicos.

<div align="center">
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/ea898a7d-f17d-4900-bb75-657e80fef42c" width="600px"> <br/> <br/>
</div>

<h3>Vista del administrador</h3>

Este componente incluye la muestra tanto de los trabajadores como de los productos que maneja el restaurant, así como la vista detallada de cada trabajador. Además de incluir la edición tanto de productos como trabajadores.
<br>

<div align="center">
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/749b6b47-b8be-45e8-b863-6680f5b631f7" width="600px"> <br/> <br/>
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/018d7cc2-a2c8-4bc0-8bcb-5ed3d419463e" width="600px"> <br/> <br/>
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/e36eac3f-2559-4d88-be9b-92393065bcf6" width="600px"> <br/> <br/>
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/87e16d28-0d74-4b89-bd19-183d6b0e81f5" width="600px"> <br/> <br/>
</div>

<h3>Vista de los meseros</h3>
Esta vista incluye tanto los componentes para realizar las órdenes de los clientes, como la vista de las órdenes que se encuentran en cocina y las que fueron entregadas a los clientes.
<br>
<br>

<div align="center">
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/32951e17-6460-4fe2-a30f-7ff050f2682d" width="600px"> <br/> <br/>
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/33b11afd-b605-421f-96d4-bc02d10ab47d" width="600px"> <br/> <br/>
</div>

<h3>Vista de los cocineros</h3>

Este componente incluye solamente la vista de las órdenes, con la opcion de marcar las órdenes como listas para que que el mesero pase por ellas.
<br>

<div align="center">
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/de790966-942c-4ed9-b10a-8a46b0299477" width="600px"> <br/> <br/>
</div>

<h3>Tecnologías Utilizadas</h3>

<li>Angular 16</li>
<li>Angular CLI</li>
<li>Typescript</li>
<li>SASS</li>
<li>Figma</li>

## 4. Cómo Probar la Aplicación
Primero es necesario despertar el de mock para la api, dándo click a este <a href="https://mock-burguerqueen.glitch.me/" target="_blank">enlace</a>
<br>
Una vez que puedas ver esta pantalla, el mock se encontrará en funcionamiento:
<br>
<br>
<div align="center">
  <img src="https://github.com/GabrielaGL/burguerqueen-api-client/assets/120422565/a00f7809-b65c-4710-92e2-033190cad0ab" width="600px"> <br/> <br/>
</div>
<br>
<br>
Ahora es momento de abrir la aplicación, para eso puedes ir al link de despliegue o hacer click <a href="https://burguerqueen.vercel.app/login" target="_blank">aquí</a> 
<br>
Los usuarios registrados para entrar a la aplicación son los siguientes: <br>
<b>Admin:</b> Correo(ari.ariana_r@burguerqueen.com) Contraseña(ari123) <br>
<b>Meserx:</b> Correo(mar.mariana_g@burguerqueen.com) Contraseña(mar123) <br>
<b>Chef:</b> Correo(arturo.arturo_h@burgerqueen.com) Contraseña(arturo123) <br>



