<template>
    <div class= "container">
    <h1 class="text-center">Actriz</h1>
    <hr />

    <div class="row">
    <div class="col-md-1">
    </div>
        <div class="col-md-6" id="primerColumna">
            <div class="row">
                <div >
                 <h2>Experiencia</h2>
                
                    <div class="parrafo">
                    Actriz de cine y teatro se formó con los maestros Carlos Gandolfo y Agustín Alezzo. Egresada del IUNA de la carrera Dirección teatral.  Participó de diferentes seminarios complementarios de Entrenamiento actoral Sportivo Teatral ( Ricardo Bartis/ Mariano Gonzalez) , canto Liliana Vitale y Sergio Alem,  Entrenamiento del Actor (Cuerpo Expresivo) a cargo de Eduardo Herrera. Seminario sobre Stanislanvki con Valentin Vasislich Tepliakov de la Universidad GITIS de Moscú dictado en Bs As. 
                    </div>
                    <div class="parrafo">
                        Entre sus trabajos en cine participa "Legions" de Fabian Forte, “Necronomicón” dirigido por Marcelo Schapces, “Mariposa” dirigido por Marco Berger. “Lectura según Justino”, ópera prima de Arnaldo André,“Juan y Eva ” dirigido Paula de Luque.“Segunda muerte” dirigido por Santiago Fernández. “El grito en la sangre” dirigido por Fernando Musa,“Un historia de amor”  Dirigido por Diego Musiak.“ Franzie” dirigido por  Alejandra Marino. “La extranjera” protagónico dirigido por Fernando Díaz. “Tres de corazones”, dirigido por Sergio Renán.
                    </div>
                    <div>
                    En teatro "Cosméticos", de Bernanrdo Carey dirigido por Julio Ordano, Teatro del Pueblo. “Los Yugoslavos” de Juan Mayorga. Dirección Enrique Dacal. Prueba Contraria, adaptación Veronese/Abadi/Saba. Dirección: Román Podolsky. Epicrisis,  de Laura Coton, dirigida por Edgardo Millan. “Una leyenda con duende” escrita y dirigida por Mercedes Carreras. Renèe , escrita y dirigida por Javier Maestro. Diva de Patricia Suárez, dirección Néstor Caniglia. Mugres de la Maria y el Negro, de Cristina Escofet, dirigida por Susana Nova.Vidas Paralelas, escrita y dirigida por Mercedes Carreras. Carne Foránea en estado de descomposición, de Diego Pereira, dirigido por Marcelo Mangone. 
                    </div class="parrafo">

                    <div class="parrafo">
                    En televisión La Verdad, dirigida por Paula de Luque, Fronteras y El Paraíso ambas  dirigidas por Sabrina Farji. Mulas de Alberto Lechi, Enamorarte. Okupas de Bruno Stagnaro.  Los especiales de UNICEF entre otros.
                    </div>
                    <div class="parrafo">
                    Podcast dirigido por Ana Piterbarg "El agua electrizada"adaptacion de la novela de Feiling, emitidos por laplataforma CONTAR. 
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        <div class="col-md-3" id="segundaColumna">
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
        #parrafo{
        margin-bottom: 180px;
        }
</style>