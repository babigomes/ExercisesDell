01. Exercise
What's the final width of a container that is 100px wide and has 5px of padding?
A: 110px.

02. Exercise
How to apply a click event to all paragraphs except for the last?
A: 
$("body p:not(:last)").click(function(){
  alert("You Clicked Me!");
});

03. Exercise
Why does the alert show Jack first and then undefined?
A: Because the return and name is in separate lines, so it's return nothing, to alert the name twice the function should be like this:
function identity() {
    var name = 'Jack';
    alert(name);
    return name
};

var who = identity();
alert(who)