$(document).ready(function() {
  // Variables minimapa
  ocultarImgsEdif();
  var miniMapa = $("#miniMapa").first();
  var mapaLeft = miniMapa.offset().left;
  var mapaTop = miniMapa.offset().top;
  var mapaWidth = miniMapa.width();
  var mapaHeight = miniMapa.height();

  // Inic
  posicionarEdif();
  $("#infoEdif").hide();
  ocultarEdif();
  ocultarVid();
  $("body").css('background', '#1f1d36');
  areaBtnSelec(".astro", ".geo", ".meteo", "Astro", "Geo", "Meteo");

  // Informacion del edificio
  function ocultarEdif(){
    for(var i = 1; i < 26; i++){
      $("#infoEdif" + i).hide();
    }
  }

  function ocultarImgsEdif(){
    for(var i = 1; i < 21; i++){
      $("#miniMapa" + i).hide();
    }
  }

  function edifClick(a){
    $("#infoEdif0").hide();
    ocultarEdif();
    ocultarImgsEdif();
    $("#miniMapa").hide();
    $("#infoEdif" + a).show();
    $("#miniMapa" + a).show();
  }

  $("#btnInfoEdif1").click(function(){edifClick(1);});
  $("#btnInfoEdif2").click(function(){edifClick(2);});
  $("#btnInfoEdif3").click(function(){edifClick(3);});
  $("#btnInfoEdif4").click(function(){edifClick(4);});
  $("#btnInfoEdif5").click(function(){edifClick(5);});
  $("#btnInfoEdif6").click(function(){edifClick(6);});
  $("#btnInfoEdif7").click(function(){edifClick(7);});
  $("#btnInfoEdif8").click(function(){edifClick(8);});
  $("#btnInfoEdif9").click(function(){edifClick(9);});
  $("#btnInfoEdif10").click(function(){edifClick(10);});
  $("#btnInfoEdif11").click(function(){edifClick(11);});
  $("#btnInfoEdif12").click(function(){edifClick(12);});
  $("#btnInfoEdif13").click(function(){edifClick(13);});
  $("#btnInfoEdif14").click(function(){edifClick(14);});
  $("#btnInfoEdif15").click(function(){edifClick(15);});
  $("#btnInfoEdif16").click(function(){edifClick(16);});
  $("#btnInfoEdif17").click(function(){edifClick(17);});
  $("#btnInfoEdif18").click(function(){edifClick(18);});
  $("#btnInfoEdif19").click(function(){edifClick(19);});
  $("#btnInfoEdif20").click(function(){edifClick(20);});

  $("#btnInfoEdif").click(function(){$("#infoEdif").show();});
  $("#btnClose").click(function(){$("#infoEdif").hide();});

  function posYtam(edif, pw, ph, tw, th){
    pw = mapaLeft + mapaWidth * (pw/100);
    ph = mapaTop + mapaHeight * (ph/100);
    tw = mapaWidth * (tw/100);
    th = mapaHeight * (th/100);

    $(edif).css("left", pw);
    $(edif).css("top", ph);
    $(edif).css("width", tw);
    $(edif).css("height", th);
  }

  function posicionarEdif(){
    posYtam("#btnInfoEdif1", 35, 3.5, 25, 22);
    posYtam("#btnInfoEdif2", 71, 7, 20, 20);
    posYtam("#btnInfoEdif3", 74, 38, 13, 20);
    posYtam("#btnInfoEdif4", 60, 26, 10, 22);
    posYtam("#btnInfoEdif5", 38, 26, 12, 10);
    posYtam("#btnInfoEdif6", 13, 15, 10, 22);
    posYtam("#btnInfoEdif7", 24, 35, 10, 12);
    posYtam("#btnInfoEdif8", 37, 36, 9, 11);
    posYtam("#btnInfoEdif10", 18, 48, 15, 17);
    posYtam("#btnInfoEdif11", 41, 47, 9, 12);
    posYtam("#btnInfoEdif12", 59.5, 58, 10, 12);
    posYtam("#btnInfoEdif13", 74, 60, 13, 20);
    posYtam("#btnInfoEdif14", 59.5, 72, 9, 17);
    posYtam("#btnInfoEdif15", 82, 83, 13, 15);
    posYtam("#btnInfoEdif16", 68.5, 83, 9, 15);
    posYtam("#btnInfoEdif17", 41, 85, 13, 14);
    posYtam("#btnInfoEdif18", 28, 85, 13, 14);
    posYtam("#btnInfoEdif19", 13, 76, 10, 18);
    posYtam("#btnInfoEdif20", 3, 76, 10, 18);
  }

  // Videos
  $("video").click(function() {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });

  function seleccionado(btn, a){
    for(var i = 0; i < 7; i++){
      $(btn + i).find(".on").hide();
      $(btn + i).find(".off").show();
    }
    $(btn + a).find(".on").show();
    $(btn + a).find(".off").hide();
  }

  function ocultarVid(){
    for(var i = 0; i < 7; i++){
      $("#vidAstro" + i).hide();
      $("#vidAstro" + i).find("video").get(0).pause();

      $("#vidGeo" + i).hide();
      $("#vidGeo" + i).find("video").get(0).pause();

      $("#vidMeteo" + i).hide();
      $("#vidMeteo" + i).find("video").get(0).pause();
    }
  }

  function seccionVid(vid, btn, a){
    ocultarVid();
    $(vid + a).show();
    seleccionado(btn, a);
  }

  function pregVid(vid, btn, a){
    ocultarVid();
    $(vid + a).show();
    $(vid + a).find("video").get(0).play();
    seleccionado(btn, a);
  }

  $("#btnVidAstro0").click(function(){pregVid("#vidAstro", "#btnVidAstro", 0);});
  $("#btnVidAstro1").click(function(){pregVid("#vidAstro", "#btnVidAstro", 1);});
  $("#btnVidAstro2").click(function(){pregVid("#vidAstro", "#btnVidAstro", 2);});
  $("#btnVidAstro3").click(function(){pregVid("#vidAstro", "#btnVidAstro", 3);});
  $("#btnVidAstro4").click(function(){pregVid("#vidAstro", "#btnVidAstro", 4);});
  $("#btnVidAstro5").click(function(){pregVid("#vidAstro", "#btnVidAstro", 5);});
  $("#btnVidAstro6").click(function(){pregVid("#vidAstro", "#btnVidAstro", 6);});

  $("#btnVidGeo0").click(function(){pregVid("#vidGeo", "#btnVidGeo", 0);});
  $("#btnVidGeo1").click(function(){pregVid("#vidGeo", "#btnVidGeo", 1);});
  $("#btnVidGeo2").click(function(){pregVid("#vidGeo", "#btnVidGeo", 2);});
  $("#btnVidGeo3").click(function(){pregVid("#vidGeo", "#btnVidGeo", 3);});
  $("#btnVidGeo4").click(function(){pregVid("#vidGeo", "#btnVidGeo", 4);});
  $("#btnVidGeo5").click(function(){pregVid("#vidGeo", "#btnVidGeo", 5);});
  $("#btnVidGeo6").click(function(){pregVid("#vidGeo", "#btnVidGeo", 6);});

  $("#btnVidMeteo0").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 0);});
  $("#btnVidMeteo1").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 1);});
  $("#btnVidMeteo2").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 2);});
  $("#btnVidMeteo3").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 3);});
  $("#btnVidMeteo4").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 4);});
  $("#btnVidMeteo5").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 5);});
  $("#btnVidMeteo6").click(function(){pregVid("#vidMeteo", "#btnVidMeteo", 6);});

  // Tabs
  function btnSelec(btnOn, btnOff1, btnOff2){
    $(btnOn + "On").show(); $(btnOn + "Off").hide();
    $(btnOff1 + "On").hide(); $(btnOff1 + "Off").show();
    $(btnOff2 + "On").hide(); $(btnOff2 + "Off").show();
  }

  function areaSelec(areaOn, areaOff1, areaOff2){
    $("#entrev" + areaOn).show(); $("#entrev" + areaOff1).hide(); $("#entrev" + areaOff2).hide();
    $("#horasPlan" + areaOn).show(); $("#horasPlan" + areaOff1).hide(); $("#horasPlan" + areaOff2).hide();
    $("#tray" + areaOn).show(); $("#tray" + areaOff1).hide(); $("#tray" + areaOff2).hide();
    $("#laburo" + areaOn).show(); $("#laburo" + areaOff1).hide(); $("#laburo" + areaOff2).hide();
  }

  function areaBtnSelec(btnOn, btnOff1, btnOff2, areaOn, areaOff1, areaOff2){
    btnSelec(btnOn, btnOff1, btnOff2);
    areaSelec(areaOn, areaOff1, areaOff2);
  }

  $(".astroOff").click(function(){
    $("body").css('background', '#1f1d36');
    seccionVid("#vidAstro", "#btnVidAstro", 0);
    areaBtnSelec(".astro", ".geo", ".meteo", "Astro", "Geo", "Meteo");
  });

  $(".geoOff").click(function(){
    $("body").css('background', '#1c2b17');
    seccionVid("#vidGeo", "#btnVidGeo", 0);
    areaBtnSelec(".geo", ".astro", ".meteo", "Geo", "Astro", "Meteo");
  });

  $(".meteoOff").click(function(){
    $("body").css('background', '#2f1919');
    seccionVid("#vidMeteo", "#btnVidMeteo", 0);
    areaBtnSelec(".meteo", ".geo", ".astro", "Meteo", "Geo", "Astro");
  });
});
