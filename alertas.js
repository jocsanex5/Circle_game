(function(){

    let btnAyuda = document.getElementById('ayuda');

           //Boton de ayuda
        btnAyuda.addEventListener('click', function(){

            Swal.fire({

                icon: 'question',
                html: 
                    '<h2 class="font">Necesitas Ayuda?</h2>' +
                    '<br>' +
                    '<p class="font">Tienes que esquivar los cuadrados y los triangulos para evitar colicionar con ellos!!!</p>' +

                    '<img src="recursos/enemigos.png" width=""20px>' +
                    '<br>' +

                    '<p class="font">Tu objetivo es tocar el circulo menor y asi ganar puntos :)</p>' +

                    '<img src="recursos/circulo.png" width=""20px>' +

                    '<br>' +

                    '<button class="btn" id="btnPC">Como moverse en PC</button>' +

                    '<button class="btn" id="btnMovil">Como moverse en Movil</button>'
            })

                //btns de la alerta
                let btnPC = document.getElementById('btnPC');

                    btnPC.addEventListener('click', function(){

                    Swal.fire({

                        html: //instrucciones en pc
                            '<img src="recursos/pc.png" width="70px">' +

                            '<br>' +

                            '<p class="font">Utiliza las siguientes teclas:</p>' +

                            '<br>' +

                            '<h3 class="font">i = arriba</h3' +

                            '<br>' +

                            '<h3 class="font">k = abajo</h3' +

                            '<br>' +

                            '<h3 class="font">l = derecha</h3' +

                            '<br>' +

                            '<h3 class="font">j = izquierda</h3' 

                    })

                });

                let btnMovil = document.getElementById('btnMovil');

                    btnMovil.addEventListener('click', function(){

                        Swal.fire({

                            html: //Instrucciones de movil
                                '<img src="recursos/movil.png" width="70px">' +

                                '<br>' +

                                '<p class="font">Utiliza los siguientes botones:</p>' +

                                '<br>' +

                                '<img src="recursos/botones.png" width="150px">' 
                        })

                    });
        });

    let btnCreditos = document.getElementById('cre');

        btnCreditos.addEventListener('click', function(){

            Swal.fire({

                html: //creditos CG
                    '<img src="recursos/creditos.png" width="100px">' +

                    '<h3 class="font">Creador: Jocsan M.</h3> <p>Mi correo para consultas o sugerencias: -jocsanex5@gmail.com</p>' +

                    '<br>' +

                    '<h3 class="font">Publisher: Ponci V.</h3> <p>-josefernandovazquez98@gmail.com</p>' +

                    '<br>' +

                    '<h3 class="font">Marketing: Moises C.</h3> <p>-ca2tromoises22@gmail.com</p>'
            })
        });

}())
