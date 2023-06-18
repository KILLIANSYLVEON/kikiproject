document.write("hello world !" + "<br>"); // commentaire
//console.log(document.head);

let someButton = document.querySelector("button");

console.log(someButton);

someButton.onclick = (event) =>
{
	//alert("tu as cliquer sur le bouton");
	console.log(event)
	document.body.style.color = "#a523F5"
};


window.addEventListener("keydown", (event) =>
{
	if(event.key == "k")
		alert("tu a gagner bg bravo !!!");
});

window.addEventListener("keydown", (event) =>
{
	console.log(event.key);
});



var nom = prompt("quele est ton nom");

const pi = 3.14;
document.write("tu t'appele: ")
document.write(nom + "<br>");

let name = "kiki";
if(name === "kikite"){
	document.write("oui" + "<br>");
}
else{
	document.write("non" + "<br>");
}

function somme(nb1, nb2)
{
	return nb1 + nb2
}

let res = somme(3, 5);
console.log(res);

document.write("<h2>les dates</h2>")

let d = Date();

document.write(d + "<br>");

let da = new Date("december 22, 1998 14:00:00");
document.write(da + "<br>");

let d2 = Date.now();
document.write("le timestamp: " + d2 + "<br>");

let da2 = new Date(2011, 05, 18, 17, 55, 20);
document.write("<p>" + da2 + "<p>")
document.write("<p>" + da2.getUTCHours() + "</p>");
document.write(da2.getDate() + "<br>");
document.write("<p>" + da2.getDay() + "</p>");
document.write("<p>" + da2.getFullYear() + "</p>");

const hoursDelay = 60 * 7;
const date = new Date();

date.setMinutes(date.getMinutes() + hoursDelay);

console.log("heure de tokyo : " + date.toLocaleTimeString());

document.write("<h2>les emsenble</h2>")

let someSet = new Set([1, 6, 9, 4, "bonjour", 6, new Date(), 1 ,"bye bye"]);

document.write("nombre element: " + someSet.size + "<br>");

if(someSet.has(6))
	document.write("on n'est content");



for(element of someSet)
	document.write("<p>" + element + "</p>");



document.write("<h2>les map</h2>")

let someMap = new Map();

someMap.set(1, "un");
someMap.set(2, "deux");
someMap.set(3, "troix");
someMap.set(4, "quatre");
someMap.set(5, "cinque");

document.write("<p>", "taille de la map: ", someMap.size, "</p>");

someMap.delete(3);

document.write("<p>", "taille de la map apres delete(2) element 2 en gros: ", someMap.size, "</p>");

document.write("<p>", "element numero 4: ", someMap.get(4), "</p>");


const allEntries = someMap.entries();

for(entries of allEntries)
	document.write("<p>" + entries[0] + " > " + entries[1] + "</p>");

function showMeTheTruth(value, key)
{
	document.write("<p>" + key + ", " + value + "</p>");
}

someMap.forEach(showMeTheTruth)

document.write("<h2>les tableaux</h2>")



let array2d = [
	[1, 2, 3],
	[4, 5, 6]
];

let someArray = Array.of("mary", "jean", "pierre", "julien", "laurent", "isabelle", "martine");

console.log(Array.isArray(someArray));
console.log(someArray);
document.write(someArray + "<br>");
console.log(someArray[0])
console.log(someArray.at(4))
console.log(someArray[someArray.length - 1]);

for(let i = 0 ; i < someArray.length ; ++i)
	console.log(someArray[i]);

for(index in someArray)
	console.log(index);

someArray.forEach(item => console.log(item));

someArray.forEach(function(value, index)
{
	console.log(index + ":" + value);
});

let someArray2 = ["juli", "mark", "bastien", "frederique"];
let someArray3 = ["frank", "alex", "george"];
let someArray4 = [1, 15, 21, -8, 14, -44, 5];
document.write(someArray2.concat(someArray3) + "<br>");

console.log(someArray2.sort( (a, b) => a.localeCompare(b) ));


console.log(someArray4.reverse());

document.write("<h2>les classe</h2>")

class humain
{
	constructor(nom, age)
	{
		this.nom = nom;
		//document.write(this.nom);
		this.age = age;
		//document.write(this.age);
	}

	mange()
	{
		console.log("humain mange")
	}

	dort()
	{
		console.log("humain dort")
	}

	static hello()
	{
		return "hello world";
	}
}

humain.prototype.coucou = function()
{
	return "coucou";
};

let h1 = new humain("julien", "33");
document.write(h1.nom + "<br>");
document.write(h1.age + "<br>");
let h2 = new humain("pierre", "33");
document.write(h2.nom + "<br>");
document.write(h2.age + "<br>");
let h3 = new humain("jean", "101");
document.write(h3.nom + "<br>");
document.write(h3.age + "<br>");
document.write(humain.hello() + "<br>");
document.write(h3.coucou() + "<br>");

let s3 = "bonjours a tous je suis une chaine de caracteres " +
"multi ligne sur plusieur ligne de code mais je suis une seul phrase" + "<br>"; // marche avec `` sans besoin de casser ou de plus

document.write(s3);


h1.mange();
h2.mange();
h3.dort();

let s2 = "bonjour, je suis entrain d'apprendre à programmer en javaScript.";
let s4 = "K";
let s5 = "entre";
let s6 = "M";
let s7 = "COMMENT VA TU";
let s8 = "oui je vais bien";
document.write(s4.padEnd(20, "."));
document.write(s5);
document.write(s6.padStart(10, ".") + "<br>");
document.write(s7.toLowerCase() + "<br>");
document.write(s8.toUpperCase() + "<br>");


let s = "Luc";
document.write(`bonjours ${s}, comment va tu ?`);

document.write("<h2>Ecriture litterale</h2>");

let naruto =
{
	attack: function() {return "rasengan";},
	name: "naruto Uzumaki",
	weapon: "kunai"
};

document.write(naruto.attack() + "<br>");
document.write(naruto.name + "<br>");
document.write(naruto.weapon + "<br>");



function Ninja(name, weapon)
{
	this.attack = function()
	{
		return "kamehameha";
	};




	this.name = name || "naruto Uzumaki";
	this.weapon = weapon || "shuriken";
}

document.write("<h2>Constructeur via fonction</h2>");
let hinata = new Ninja("hinata Hyuga");
document.write(hinata.name + "<br>");
document.write(hinata.weapon + "<br>");



document.write("<h2>Autre syntaxe</h2>")



class Genin
{
	constructor(name, weapon)
	{
		this.name = name;
		this.weapon = weapon;

	}

	attack()
	{
		return " rahhhhhh !";
	}
}

document.write("<h2>Constructeur via classe</h2>");

let sasuke = new Genin("sasuke Uchiha", "katakana");
document.write(sasuke.name + "<br>");
document.write(sasuke.weapon + "<br>");


/* des commantaire
sur plusieurs ligne 
pratique
n++ poste incre n = n et ensuite n + 1
++n pre incre n + 1 et ensuite n = n
*/

document.write("<h2>les nombres</h2>")

document.write(Number.MAX_VALUE + "<br>")
document.write(Number.MAX_SAFE_INTEGER + "<br>")
document.write(Number.MIN_VALUE + "<br>")
document.write(Number.MIN_SAFE_INTEGER + "<br>")
document.write("<h2>exception erreure</h2>");

//throw new Error("je leve une erreure"); le plus simple
/*
try
{
	//code qui peut produire uen erreure
	throw new Error("une erreure c'est produite");
}
catch(err)
{
	console.log(err);
	console.error(err.message);
	document.write(err);
	document.write(err.stack + "<br>");
	document.write(err.message + "<br>");

}
finally
{
	document.write("ok");
}

function assert(condition, message)
{
	if(!condition)
		throw message || "Erreure d'assertion"; // || = ou
}


assert(1 === 2);
*/

console.log("probleme !");
