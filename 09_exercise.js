function myfunc() {

var columnA = [];
var columnB = [];
var columnC = [];
var indexObject = [];

$('.quick-link').find("a").each(function( index ) {

  if (index <= 11) {
   indexObject.push({element: $(this)});
    // for (i = 0; i <= 11; i++) {
    //  console.log($(this).index(i));
    //  console.log($(this));
    // }
    // for (i = 0; i <= 11; i += 3){
    //   columnA.push(i);
    // }
    // for (i = 1; i <= 11; i += 3){
    //   columnB.push(i);
    //   // $(this).attr('id', 'green');
    // }
  
    // for (i = 2; i <= 11; i += 3){
    //   columnC.push(i);
    //   // $(this).attr('id', 'orange');
    // }
  }
});
console.log(indexObject);
if (Object.keys(indexObject) == "0" || Object.keys(indexObject) == "3") {
console.log(indexObject.id);
}

$('.quick-link').find("a").click(function (e) {
  e.preventDefault();
  console.log($(this).index());
});
// console.log(columnA);
// console.log(columnB);
// console.log(columnC);

}
$('.half-hero').find("h2").each(function( index ) {
  console.log($(this).text())
  if ($(this).text() == "Networking") {
    $(this).find("div").css("background-color", "red");

  }
});
myfunc();