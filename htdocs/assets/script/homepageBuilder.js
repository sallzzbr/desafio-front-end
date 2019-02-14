$.getJSON( "../../data.json", function( data ) {
  console.log (data.section[0]);

  for(var i = 0; i < 8; i++){
    //ROW ONE

    if(i < 2) {

      $("#destaques").append(HTMLdestaquesArticlePrimeiros);
      var destaqueImg = HTMLdAImg.replace("%data%", data.section[0].data[i].image);
      $(".destaques-artigo:last").append(destaqueImg);
      var formattedCategory = HTMLdACategory.replace("%data%", data.section[0].data[i].label);
      $(".destaques-content:last").append(formattedCategory);
      var formattedTitle = HTMLdATitle.replace("%data%", data.section[0].data[i].title);
      $(".destaques-content:last").append(formattedTitle);
      var formattedText = HTMLdAText.replace("%data%", data.section[0].data[i].description);
      $(".destaques-content:last").append(formattedText);
      var formattedUrl = HTMLdAShare.replace("%data%", data.section[0].data[i].url);
      $(".destaques-content:last").append(formattedUrl);

    } else if (i >= 2 && i < 4) {

      $("#destaques").append(HTMLdestaquesArticleSegundos)
      var destaqueImg = HTMLdAImg.replace("%data%", data.section[0].data[i].image);
      $(".segundos-img:last").append(destaqueImg);
      var formattedCategory = HTMLdACategory.replace("%data%", data.section[0].data[i].label);
      $(".segundos-content:last").append(formattedCategory);
      var formattedTitle = HTMLdATitle.replace("%data%", data.section[0].data[i].title);
      $(".segundos-content:last").append(formattedTitle);
      var formattedText = HTMLdAText.replace("%data%", data.section[0].data[i].description);
      $(".segundos-content:last").append(formattedText);
      var formattedUrl = HTMLdAShare.replace("%data%", data.section[0].data[i].url);
      $(".segundos-content:last").append(formattedUrl);

    } else if (i >= 4 && i < 8) {

      $("#destaques").append(HTMLdestaquesArticleTerceiros)
      var destaqueImg = HTMLdAImg.replace("%data%", data.section[0].data[i].image);
      $(".head-img:last").append(destaqueImg);
      var formattedCategory = HTMLdACategory.replace("%data%", data.section[0].data[i].label);
      $(".head-text:last").append(formattedCategory);
      var formattedTitle = HTMLdATitle.replace("%data%", data.section[0].data[i].title);
      $(".head-text:last").append(formattedTitle);
      var formattedText = HTMLdAText.replace("%data%", data.section[0].data[i].description);
      $(".content-text:last").append(formattedText);
      var formattedUrl = HTMLdAShare.replace("%data%", data.section[0].data[i].url);
      $(".content-share:last").append(formattedUrl);

    }
  }

  for(var i = 0; i < 4; i++){

      if (i == 0) {
        $("#brasil").append(HTMLdestaquesNoBorder)
      } else {
        $("#brasil").append(HTMLdestaquesArticleTerceiros)
      }

      var destaqueImg = HTMLdAImg.replace("%data%", data.section[1].data[i].image);
      $(".head-img:last").append(destaqueImg);
      var formattedCategory = HTMLdACategory.replace("%data%", data.section[1].data[i].label);
      $(".head-text:last").append(formattedCategory);
      var formattedTitle = HTMLdATitle.replace("%data%", data.section[1].data[i].title);
      $(".head-text:last").append(formattedTitle);
      var formattedText = HTMLdAText.replace("%data%", data.section[1].data[i].description);
      $(".content-text:last").append(formattedText);
      var formattedUrl = HTMLdAShare.replace("%data%", data.section[1].data[i].url);
      $(".content-share:last").append(formattedUrl);

  }

  for(var i = 0; i < 4; i++){

      if (i == 0) {
        $("#mundo").append(HTMLdestaquesNoBorder)
      } else {
        $("#mundo").append(HTMLdestaquesArticleTerceiros)
      }

      var destaqueImg = HTMLdAImg.replace("%data%", data.section[2].data[i].image);
      $(".head-img:last").append(destaqueImg);
      var formattedCategory = HTMLdACategory.replace("%data%", data.section[2].data[i].label);
      $(".head-text:last").append(formattedCategory);
      var formattedTitle = HTMLdATitle.replace("%data%", data.section[2].data[i].title);
      $(".head-text:last").append(formattedTitle);
      var formattedText = HTMLdAText.replace("%data%", data.section[2].data[i].description);
      $(".content-text:last").append(formattedText);
      var formattedUrl = HTMLdAShare.replace("%data%", data.section[2].data[i].url);
      $(".content-share:last").append(formattedUrl);

  }

});
