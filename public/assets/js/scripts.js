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
                $("#cities").append("<tr>\
                                    <td>" + response[i].LocalizedName +  "</td>\
                                    <td>" + response[i].AdministrativeArea.LocalizedName + "</td>\
                                    <td>" + response[i].Country.LocalizedName + "</td>\
                                    <td><a href='#' onclick='consultarClima("+response[i].Key+","+response[i].LocalizedName+")' ><i class='fa fa-search'></i></a></td>\
                                    </tr>"

                );
                // $("#link").click(function(){
                //     consultarClima(response[i].Key, response[i].LocalizedName);
                // });

            }
            let key = response[0].Key;
            console.log(response);


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
         console.log("abaixo");
         console.log(data);
         let temperatura = (data[0].Temperature.Metric.Value);

         alert(temperatura + "ºC");
         $("#cityName").text(cidade);
         $("#temperatura").text(temperatura);

     }
     });
}
