$(document).ready (function(){
        
    $("button").on("click", function(){
        let randomCharacter = Math.ceil(Math.random()*(88-1+1)+1);
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomCharacter}.json`, function (data){
            console.log(data)
            $("h1.name").text(data ['name']);
            $("img.image").attr("src", data ['image']);
            $("#frame-wrapper").show();

        })
    })
        
       
})



