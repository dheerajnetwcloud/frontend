var elements = document.getElementsByClassName('hot');

document.write('<h3>' + elements.length + ' elements found </h3>');

if (elements.length > 1) {
    document.write('<h3> setting cold class </h3>');
    var el = elements[2];
    el.className = 'cold';
}

var elements2 = document.querySelectorAll('li.hot');

document.write('<h3>' + elements2.length + ' elements found </h3>');

if (elements2.length > 1) {
    document.write('<h3> setting cold class </h3>');
    var el = elements2[2];
    el.className = 'cold';
}

var elemenets3 = document.getElementById('first');
if(elemenets3 != null){
    document.write('<h3> setting cool class </h3>');
    elemenets3.className = 'cold';
}

var elements4 = document.getElementsByTagName('li');

document.write('<h3>' + elements4.length + ' elements found </h3>');

if (elements4.length > 1) { 
    document.write('<h3> setting cool class </h3>');
    var el = elements4[1];
     el.className = 'cold';
}

var newElement = document.createElement('li');
newElement.className = 'hot';
var newText = document.createTextNode('Raccon');
newElement.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];
position.appendChild(newElement);