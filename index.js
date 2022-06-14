//JQUERY JQUERY JQUERY

//grabbing the body elememnt
console.log($('body'));

//Grabbing elements from the DOM using jquery Dolla dolla bill yaaa! $
let p = $('#test')
let div= $('.my-class');
let ul =$('ul');

console.log(p);
console.log(div);
console.log(ul);

//the p elementfrom html logs to console
console.log(p.text());
//jquery sets new text of p variable
p.text('New Text');
//jquery grabs input from html and assigns it a value using jquery method (uncomment following line)
//$("input").val('New Value');

//grabbing the HTML input and setting an attribute
$('input').attr('placeholder', 'Placeholder Text');

//add methods to the DOM
div.prepend('<p>prepended paragraph</p>');
div.append('<p>appended paragraph</p>');
div.before('<p>paragraph that was added before the div</p>');
div.after('<p>Paragraph that was added after the div</p>');

/*to remove elements REMOVE AND EMPTY
div.empty();
ul.remove(); */

//hide elements without removing them and adding a timer to show
$('input').hide();
setTimeout(() => $('input').show(), 2000);

// AJAX AJAX AJAX

//allows us to send a request and get back data behind the scenes - using jquereys methods get and post
//2 parameters the url your requesting from and second a method or function to envoke once a response is returned
$.get('https://reqres.in/api/users/2', (data) => console.log(data));
//2 parametes where you want to send the payload and second the payloadwhat you want to send,  then what do you do wth the responsse that is returnes
$.post('https://reqres.in/api/users' , {
    name: 'Tommy',
    job: 'Front End Software Developer'
}, (data) => console.log(data));