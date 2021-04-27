const API_KEY = 'K3rgPRk6b2GzxJgChMYMtxdQHuuxTxAB';

function funcaoTeste(){
    event.preventDefault();
    $("#cities").html("");
    let city = $("#city").val();

    $.ajax({
        type: "get",
        url: "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+API_KEY+"&q="+city+"&language=pt-br",
        dataType: "json",
        success: function (response) {

            $("#chooseCity").modal('show');
            for(let i=0; i<response.length; i++){
                $("#cities").append('<tr>\
                                    <td>' + response[i].LocalizedName +  '</td>\
                                    <td>' + response[i].AdministrativeArea.LocalizedName + '</td>\
                                    <td>' + response[i].Country.LocalizedName + '</td>\
                                    <td><a href="#" onclick="consultarClima('+response[i].Key+',\`'+response[i].LocalizedName+'\`,\`'+ response[i].TimeZone['Name']+'\`)" ><i class="fa fa-search"></i></a></td>\
                                    </tr>'
                );
            }
        },
        error: function(response){
            Swal.fire({
                title: 'Erro',
                text: 'Algo deu errado!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
     });
}

function consultarClima(key, cidade, zona){

    $.ajax({
     type: "get",
     url: "http://dataservice.accuweather.com/currentconditions/v1/" + key + '?apikey='+ API_KEY + "&language=pt-br",
     dataType: "jsonp",
     success: function(data){
         let temperatura = (data[0].Temperature.Metric.Value);
         let clima = data[0].WeatherText;

         console.log(data);
         $("#cityName").text(cidade);
         $("#temperatura").text(temperatura);
         $("#clima").text(clima);

         $.ajax({
             type: 'get',
             url: "http://api.timezonedb.com/v2.1/get-time-zone?key=CIHIQ35CUES3&format=json&by=zone&zone=" + zona,
             dataType: "json",
             success: function(resp){

                 let dataTime = resp['formatted'];
                 let data = dataTime.split(" ")[0];
                 let hora = dataTime.split(" ")[1];
                 let dia = data.split("-")[2];
                 let mes = data.split("-")[1];
                 let ano = data.split("-")[0];

                 let dataCorreta = dia + "/" + mes + "/" + ano;

                 let periodo = definirPeriodo(hora);
                 $("#periodo").text(periodo);

                 $("#data").text(dataCorreta);
                 $("#hora").text(hora);

             }
         })
         let p = $("#periodo").val();
         console.log(p);
         switch (clima){
             case "Ensolarado":
             case "Parcialmente ensolarado":
             case "Parcialmente aberto":
             case "Predominantemente aberto":
             case "Predominantemente ensolarado":
             case "Céu claro":
                 $("#img-time").attr("src", "assets/img/sunny_day.png");
                 break;
             case "Encoberto":
             case "Parcialmente nublado":
             case "Nublado":
                 $("#img-time").attr("src", "assets/img/nublado.jpg");
                 break;
             case "Algumas nuvens":
             case "Predominantemente nublado":
                 $("#img-time").attr("src", "assets/img/predominante_nublado.jpg");
                 break;
             case "Chuva":
             case "Chuva fraca":
                 $("#img-time").attr("src", "assets/img/rainy_day.jpg")
                 break;
             default:
                 $("#img-time").attr("src", "assets/img/interrogacao.jpg");
                 break;
         }


         $("#chooseCity").modal('hide');
     }
     });
}

function definirPeriodo(hora){

    let horaManhaComeco = "06:00:00"
    let horaManhaFim = "11:59:59";
    let horaTardeComeco = "12:00:00";
    let horaTardeFim = "17:59:59";

    if(hora >= horaManhaComeco && hora <= horaManhaFim){
        return "Manhã";
    }else if(hora >= horaTardeComeco && hora <= horaTardeFim){
        return "Tarde";
    }
    return "Noite";
}