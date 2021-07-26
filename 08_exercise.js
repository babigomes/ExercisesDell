var getElementsText = $('#category-list-container li').map(function(){ 
  var innerText = $(this).parent().parent().find("h5").text()
  $(this).before('<span>'+ innerText +'- </span>');
});
