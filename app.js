
let mainParrafo = $( "#Pfirst" )
let btn= $( ".btnParrafo")

console.log(mainParrafo);


$( "#hide" ).on("click",() => {

  $( "#Pfirst").hide();


  $("#show").click(function(){
    $("#Pfirst").show();
  });
});

