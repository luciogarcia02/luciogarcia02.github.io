<template>
    <div class= "container">
    <h1 class="text-center">Biografía</h1>
    <hr />

    <div class="row">
    <div class="col-md-2">
    </div>
        <div class="col-md-4" id="primerColumna">
            <div class="row">
                <div>
                    <h2>Sobre mí</h2>
                    <div style="padding-bottom: 20px;">
                        Soy actriz, directora y productora. me gusta lo que hago. 
                        Creo que el arte en general nos permite ver y expresar la vida de modo diferente. Transforma el horizonte propio y el de los demás.
                    </div>
                </div>
                <div></div>
                <div style="padding-top: 0px;">
                 <h2>Formación</h2>
                <h6><b>Actuación</b></h6>
                    <ul>
                        <li>Carlos Gandolfo (1987/90)</li>
                        <li>Agustin Alezzo (1991/93)</li>
                    </ul>
                <h6><b>Egresada de Carrera Dirección Teatral IUNA (1993/96)</b></h6>
                    <ul>
                        <li><b>Seminarios complementarios</b></li>
                        <li>Entrenamiento Ricardo Bartis – 2018</li>
                        <li>Ganadora Beca Sagai de perfeccionamiento 2018</li>
                        <li>Canto Liliana Vitale 2017/ 2018</li>
                        <li>Canto/ entrenamiento Vocal Sergio Alem 2015/16/ 2017</li>
                        <li>Seminario sobre Stanislanvki con Valentin Vasislich Tepliakov de la Universidad GITIS de Moscú. Estudio Carlos Gandolfo (2006)</li>
                        <li>Workshop René Pollesch, Instituto Goethe (2006)</li>
                        <li>Canto Magdalena León (2004/05)</li>
                        <li>Workshop Joe Morris (2000)</li>
                        <li>Alberto Ure (1993)</li>
                        <li>Eric Morris (1989)</li>
                        <li>Doblaje (AAA, 1992)</li>
                        <li>Zapateo Americano y jazz con Ana Padilla (1988/90)</li>
                        <li>Canto Alicia Aman (1980/86).</li>
                        <li>Integrante grupo TEA, San Luis (1983/86).</li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="col-md-4" id="segundaColumna">
          <img class="responsive-img" src="../../archivos/biografia.jpg"> 
        </div>
    </div>
        <router-view></router-view>
    </div>




</template>

<style>
        .container{
          background-color:#fff7e6;
          color: black;
        }
          .responsive-img {
    max-width: 100%;
    height: auto
  }

</style>