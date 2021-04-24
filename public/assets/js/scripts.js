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
                                    <td><a href="#" onclick="consultarClima('+response[i].Key+',\`'+response[i].LocalizedName+'\`)" ><i class="fa fa-search"></i></a></td>\
                                    </tr>'
                );
            }
        },
        error: function(response){
            console.log("Deu ruim");
        }
     });
}

function consultarClima(key, cidade){

    $.ajax({
     type: "get",
     url: "http://dataservice.accuweather.com/currentconditions/v1/" + key + '?apikey='+ API_KEY + "&language=pt-br",
     dataType: "jsonp",
     success: function(data){
         let temperatura = (data[0].Temperature.Metric.Value);
         let clima = data[0].WeatherText;
         let dat = data[0].LocalObservationDateTime.split("T")[0];
         console.log(data[0].LocalObservationDateTime);
         let dia = dat.split("-")[2];
         let mes = dat.split("-")[1];
         let ano = dat.split("-")[0];

         let dataCorreta = dia + "/" + mes + "/" + ano;

         let link = "https://www.google.com/search?q=temperatura+em+" + cidade;

         $("#cityName").text(cidade);
         $("#temperatura").text(temperatura);
         $("#clima").text(clima);
         $("#data").text(dataCorreta);
         $("#hora").text("");
         $("#hora").append("<a href='"+link+"' target='_blank'>Consulte aqui</a>");
         $("#chooseCity").modal('hide');
     }
     });
}
