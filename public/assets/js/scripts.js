const API_KEY = 'K3rgPRk6b2GzxJgChMYMtxdQHuuxTxAB';

function funcaoTeste(){
    event.preventDefault();
    let city = $("#city").val();

    $.ajax({
        type: "get",
        // url: "/locations/v1/cities/search?apikey="+key+"&q="+city+"&language=pt-br",
        url: "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+API_KEY+"&q="+city+"&language=pt-br",
        dataType: "json",
        success: function (response) {
           let key = response[0].Key;
        //    ajaxCall2(key);
           $.ajax({
            type: "get",
            url: "http://dataservice.accuweather.com/currentconditions/v1/" + response[0].Key + '?apikey='+ API_KEY + "&language=pt-br",
            dataType: "jsonp",
            success: function(data){
             console.log(data[0].Temperature.Metric.Value);
            }
        });
        },
        error: function(response){
            console.log("Deu ruim");
        }
     });
    
}

