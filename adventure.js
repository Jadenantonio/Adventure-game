var title = document.getElementById("title");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var image = document.getElementById("image");
var description = document.getElementById("description");
var inventoryItem = document.getElementById("inventoryItem");
var zakMes = false;

function startGame() {
    title.innerHTML = "I am independent!";
    description.innerHTML = "Klik op 'Start Game' om verder te gaan";
    document.getElementById("image").src = "images/begin.jpg"
    button1.innerHTML = "Start Game";
    button1.setAttribute("onclick", "inleiding1()");
    button2.style.display = "none";
    button3.style.display = "none";
    inventoryItem.style.display = "none";
}

function inleiding1() {
    description.innerHTML = "Deze game gaat over een jongetje genaamd Timon.";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "inleiding2()");
    button2.style.display = "inline-block";
    button2.innerHTML = "Intro overslaan";
    button2.setAttribute("onclick", "slaapKamer1()");
}

function inleiding2() {
    description.innerHTML = "Er wordt altijd tegen Timon gezegd dat hij te jong is en nog niet volwassen.";
    button1.setAttribute("onclick", "inleiding3()");
}

function inleiding3() {
    description.innerHTML = "Op een dag ziet hij een kans om te laten zien dat hij wel volwassen is.";
    button1.setAttribute("onclick", "inleiding4()");
}

function inleiding4() {
    description.innerHTML = "Maar dat loopt helemaal uit de hand, en Timon gaat op een lang avontuur.";
    button1.setAttribute("onclick", "inleiding5()");
}

function inleiding5() {
    description.innerHTML = "Uiteindelijk komt Timon weer thuis, met veel meer levenservaring en is nu echt volwassen."
    button1.innerHTML = "Start Game";
    button1.setAttribute("onclick", "slaapKamer1()");
}

function slaapKamer1() {
    description.innerHTML = "Het is Zaterdag 10:00"
    document.getElementById("image").src = "images/levels/intro/slaapkamer1.jpg"
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "slaapKamer2()");
    button2.style.display = "none";
}

function slaapKamer2() {
    description.innerHTML = "Je wordt wakker omdat je ouders een hevig gesprek hebben. </br> Wil je ze afluisteren?"
    document.getElementById("image").src = "images/levels/intro/slaapkamer2.jpg"
    button1.innerHTML = "Ja";
    button1.setAttribute("onclick", "slaapKamer3()");
    button2.innerHTML = "Nee";
    button2.setAttribute("onclick", "gameOver()");
    button2.style.display = "inline-block";
}

function slaapKamer3() {
    description.innerHTML = "Moeder: Ik weet niet wat we met Timon moeten doen </br> Het lijkt wel dat we geen opties meer hebben."
    document.getElementById("image").src = "images/levels/intro/slaapkamer3.jpg"
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "slaapKamer4()");
    button2.style.display = "none";
}

function slaapKamer4() {
    description.innerHTML = "Vader: We kunnen hier ver weg vandaan, dan zal hij ons nooit meer vinden."
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "slaapKamer5()");
}

function slaapKamer5() {
    if(zakMes == true) {
        document.getElementById("image").src = "images/levels/intro/slaapkamer3.jpg"
        description.innerHTML = "Timon: Willen ze me weg hebben? Wat heb ik fout gedaan?";
        button1.innerHTML = "Loop zelf weg";
        button1.setAttribute("onclick", "slaapKamer6()")  
    }else {
        description.innerHTML = "Timon: Willen ze me weg hebben? Wat heb ik fout gedaan?";
        button1.innerHTML = "Loop zelf weg";
        button1.setAttribute("onclick", "slaapKamer6()")
        button2.style.display = "inline-block";
        button2.innerHTML = "Pak zakmes";
        button2.setAttribute("onclick", "slaapKamerZakMes()");
    }
}

function slaapKamerZakMes() {
    zakMes = true;
    inventoryItem.style.display = "inline-block";
    document.getElementById("image").src = "images/levels/intro/zakmes.jpg";
    button1.innerHTML = "Terug";
    button1.setAttribute("onclick", "slaapKamer5()");
    button2.style.display = "none";
    document.getElementById("inventoryItem").src = "images/inventory/zakmes_icon.png";
}

function slaapKamer6() {
    document.getElementById("image").src = "images/levels/intro/slaapkamertimonweg.jpg";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "slaapKamer7()");
    description.innerHTML = "Moeder: Ik ben zo bang dat hij Timon weghaalt.";
    button2.style.display = "none";
}

function slaapKamer7() {
    description.innerHTML = "Vader: Wel nee, zolang Timon bij ons blijft, zal zijn vader hem niet vinden."
    button1.setAttribute("onclick", "slaapKamer8()");
}

function slaapKamer8() {
    description.innerHTML = "Moeder: WAT!?! </br>Vader: WAAR IS TIMON?!";
    document.getElementById("image").src = "images/levels/intro/slaapkamerouders.jpg";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "timonBuiten()");
}

function timonBuiten() {
    document.getElementById("image").src = "images/levels/buiten/timonbuiten1.jpg";
    description.innerHTML = "Waar ga je heen?"
    button1.innerHTML = "Supermarkt";
    button1.setAttribute("onclick", "timonSupermarkt1()");
    button2.style.display = "inline-block";
    button2.innerHTML = "Schuilen";
    button2.setAttribute("onclick", "timonSchuilPlaats1()");
    button3.style.display = "inline-block";
    button3.innerHTML = "Een dorp";
    button3.setAttribute("onclick", "timonDorp1()");
}

// Timon bij de supermarkt

function timonSupermarkt1() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarkt1.jpg";
    description.innerHTML = "Je staat voor de supermarkt, in de hoop dat iemand je helpt.";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "timonSupermarkt2()");
    button2.style.display = "none";
    button3.style.display = "none";
}

function timonSupermarkt2() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarkt2.jpg";
    description.innerHTML = "Wacht! er stop een busje!";
    button1.setAttribute("onclick", "timonSupermarktHulp1()");
    button1.innerHTML = "Vraag om hulp";
    button2.style.display = "inline-block";
    button2.innerHTML = "Loop weg";
    button2.setAttribute("onclick","timonSupermarktLopen1()");
}

function timonSupermarktHulp1() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarkt3.jpg";
    description.innerHTML = "Timon: Dag meneer, kunt u mij helpen?";
    button1.setAttribute("onclick", "timonSupermarktHulp2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";
}

function timonSupermarktHulp2() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarkt4.jpg";
    description.innerHTML = "Man: Zeg maar papa... </br>Timon: Meneer?!";
    button1.setAttribute("onclick", "timonSupermarktHulp3()");
}

function timonSupermarktHulp3() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarkt5.jpg";
    description.innerHTML = "Je wordt vastgebonden en achterin het busje gegooid";
    button1.setAttribute("onclick", "timonOntvoerd()");
}

function timonSupermarktLopen1() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarktLopen1.jpg";
    description.innerHTML = "Je besluit weg te lopen.";
    button1.setAttribute("onclick", "timonSupermarktLopen2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";
}

function timonSupermarktLopen2() {
    document.getElementById("image").src = "images/levels/supermarkt/timonSupermarktLopen2.jpg";
    description.innerHTML = "Timon: Pardon? Meneer?</br>Man: Zeg maar papa...";
    button1.setAttribute("onclick", "timonSupermarktHulp3()");
}

// Timon in de schuilplaats

function timonSchuilPlaats1() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaats1.jpg";
    description.innerHTML = "Je bent aan het schuilen in een park, in de hoop dat iemand je helpt.";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "timonSchuilPlaats2()");
    button2.style.display = "none";
    button3.style.display = "none";
}

function timonSchuilPlaats2() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaats2.jpg";
    description.innerHTML = "Wacht! er stop een busje!";
    button1.setAttribute("onclick", "timonSchuilPlaatsHulp1()");
    button1.innerHTML = "Vraag om hulp";
    button2.style.display = "inline-block";
    button2.innerHTML = "Loop weg";
    button2.setAttribute("onclick","timonSchuilPlaatsLopen1()");
}

function timonSchuilPlaatsHulp1() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaats3.jpg";
    description.innerHTML = "Timon: Dag meneer, kunt u mij helpen?";
    button1.setAttribute("onclick", "timonSchuilPlaatsHulp2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";
}

function timonSchuilPlaatsHulp2() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaats4.jpg";
    description.innerHTML = "Man: Zeg maar papa... </br>Timon: Meneer?!";
    button1.setAttribute("onclick", "timonSchuilPlaatsHulp3()");
}

function timonSchuilPlaatsHulp3() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaats5.jpg";
    description.innerHTML = "Je wordt vastgebonden en achterin het busje gegooid";
    button1.setAttribute("onclick", "timonOntvoerd()");
}

function timonSchuilPlaatsLopen1() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaatsLopen1.jpg";
    description.innerHTML = "Je besluit weg te lopen.";
    button1.setAttribute("onclick", "timonSchuilPlaatsLopen2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";
}

function timonSchuilPlaatsLopen2() {
    document.getElementById("image").src = "images/levels/schuilplaats/timonSchuilplaatsLopen2.jpg";
    description.innerHTML = "Timon: Pardon? Meneer?</br>Man: Zeg maar papa...";
    button1.setAttribute("onclick", "timonSchuilPlaatsHulp3()");
}

// Timon bij een ander drop

function timonDorp1() {
    document.getElementById("image").src = "images/levels/dorp/timonDorp1.jpg";
    description.innerHTML = "Je bent aan het schuilen in een park, in de hoop dat iemand je helpt.";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "timonDorp2()");
    button2.style.display = "none";
    button3.style.display = "none";
}

function timonDorp2() {
    document.getElementById("image").src = "images/levels/dorp/timonDorp2.jpg";
    description.innerHTML = "Wacht! er stop een busje!";
    button1.setAttribute("onclick", "timonDorpHulp1()");
    button1.innerHTML = "Vraag om hulp";
    button2.style.display = "inline-block";
    button2.innerHTML = "Loop weg";
    button2.setAttribute("onclick","timonDorpLopen1()");
}

function timonDorpHulp1() {
    document.getElementById("image").src = "images/levels/dorp/timonDorp3.jpg";
    description.innerHTML = "Timon: Dag meneer, kunt u mij helpen?";
    button1.setAttribute("onclick", "timonDorpHulp2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";
}

function timonDorpHulp2() {
    document.getElementById("image").src = "images/levels/dorp/timonDorp4.jpg";
    description.innerHTML = "Man: Zeg maar papa... </br>Timon: Meneer?!";
    button1.setAttribute("onclick", "timonDorpHulp3()");
}

function timonDorpHulp3() {
    document.getElementById("image").src = "images/levels/dorp/timonDorp5.jpg";
    description.innerHTML = "Je wordt vastgebonden en achterin het busje gegooid";
    button1.setAttribute("onclick", "timonOntvoerd()");
}

function timonDorpLopen1() {
    document.getElementById("image").src = "images/levels/dorp/timonDorpLopen1.jpg";
    description.innerHTML = "Je besluit weg te lopen.";
    button1.setAttribute("onclick", "timonDorpLopen2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";
}

function timonDorpLopen2() {
    document.getElementById("image").src = "images/levels/dorp/timonDorpLopen2.jpg";
    description.innerHTML = "Timon: Pardon? Meneer?</br>Man: Zeg maar papa...";
    button1.setAttribute("onclick", "timonDorpHulp3()");
}

// Timon is ontvoerd

function timonOntvoerd() {
    description.innerHTML = "Je zit achterin en het is donker";
    document.getElementById("image").src = "images/levels/ontvoerd/timonOntvoerd1.jpg";
    button1.setAttribute("onclick", "timonOntvoerd2()");
}

function timonOntvoerd2() {
    if(zakMes == true) {
        description.innerHTML = "Hey! Je hebt nog een zakmes!";
        document.getElementById("image").src = "images/levels/ontvoerd/timonOntvoerdZakmes.jpg";
        button1.innerHTML = "Jezelf los snijden.";
        button1.setAttribute("onclick","timonOntvoerd3()");
        button2.style.display = "inline-block";
        button2.innerHTML = "Niks doen";
        button2.setAttribute("onclick", "timonOntvoerd4()");
    }else {
        description.innerHTML = "Je zit vast en kan niks doen...";
        document.getElementById("image").src = "images/levels/ontvoerd/timonOntvoerd2.jpg";
        button1.setAttribute("onclick", "gameOver()");
    }

}

function timonOntvoerd3() {
    document.getElementById("image").src = "images/levels/ontvoerd/timonOntvoerd3.jpg";
    description.innerHTML = "Je bent je zelf aan het los snijden.";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "timonOntsnapt1()");
    button2.style.display = "none";
}

function timonOntvoerd4() {
    description.innerHTML = "Je zit vast en kan niks doen...";
    document.getElementById("image").src = "images/levels/ontvoerd/timonOntvoerd2.jpg";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "gameOver()");
    button2.style.display = "none";
}

// Timon ontsnapt hier

function timonOntsnapt1() {
    description.innerHTML = "Je bent ontsnapt!"
    document.getElementById("image").src = "images/levels/ontsnapt/timonOntsnapt.jpg";
    button1.setAttribute("onclick", "timonOntsnapt2()");
}

function timonOntsnapt2() {
    description.innerHTML = "Wat ga je doen?";
    button1.innerHTML = "Naar huis";
    button1.setAttribute("onclick", "timonThuis1()");
    button2.style.display = "inline-block";
    button2.innerHTML = "Naar politie";
    button2.setAttribute("onclick", "timonBureau1()");
}

// Timon op het politiebureau

function timonBureau1() {
    document.getElementById("image").src = "images/levels/bureau/timonBureau1.jpg";
    description.innerHTML = "Timon: Dag meneer, kunt u mij helpen?</br>Agent: Maar natuurlijk...";
    button1.innerHTML = "Verder";
    button1.setAttribute("onclick", "timonBureau2()");
    button2.style.display = "none";
}

function timonBureau2() {
    document.getElementById("image").src = "images/levels/bureau/timonBureau2.jpg";
    description.innerHTML = "Timon: Nou.. en toen.. een zakmes..</br>Agent: Een zakmes?!";
    button1.setAttribute("onclick", "timonBureau3()");
}

function timonBureau3() {
    document.getElementById("image").src = "images/levels/bureau/timonBureau3.jpg";
    description.innerHTML = "Je zit nu in de cel omdat je een mes bij had.";
    button1.setAttribute("onclick", "gameOver()");
}

// Timon komt thuis

function timonThuis1() {
    document.getElementById("image").src = "images/levels/thuis/timonThuis1.jpg"
    description.innerHTML = "Ouders: Timon! Je bent thuis!</br>Timon: Ik dacht dat jullie me weg wilde hebben.";
    button1.setAttribute("onclick", "timonThuis2()");
    button1.innerHTML = "Verder";
    button2.style.display = "none";

}

function timonThuis2() {
    document.getElementById("image").src = "images/levels/thuis/timonThuis1.jpg"
    description.innerHTML = "Vader: Nee joh, Je vader is vrij uit de cel.</br>En die zit achter je aan.";
    button1.setAttribute("onclick", "timonThuis3()");
}

function timonThuis3() {
    document.getElementById("image").src = "images/levels/thuis/timonThuis1.jpg"
    description.innerHTML = "Timon: Mijn vader?</br>Moeder:Ik heb je nooit over je echte vader verteld.";
    button1.setAttribute("onclick", "timonThuis4()");
}

function timonThuis4() {
    document.getElementById("image").src = "images/levels/thuis/timonThuis1.jpg"
    description.innerHTML = "Moeder: Omdat je echte vader gevaarlijk is</br>en je misschien wat zou aan doen.";
    button1.setAttribute("onclick", "timonThuis5()");
}
function timonThuis5() {
    document.getElementById("image").src = "images/levels/thuis/timonThuis2.jpg"
    description.innerHTML = "Ouders: Maar gelukkig ben je thuis!";
    button1.setAttribute("onclick", "timonEinde()");
}

function timonEinde() {
    document.getElementById("image").src = "images/levels/thuis/einde.jpg"
    description.innerHTML = "Bedankt voor het spelen!";
    button1.setAttribute("onclick", "startGame()");
    button1.innerHTML = "Opnieuw spelen!";
}



function gameOver() {
    document.getElementById("image").src = "images/gameover.jpg";
    button1.innerHTML = "Probeer opnieuw";
    description.innerHTML = "Wat jammer!"
    button2.style.display = "none";
    button3.style.display = "none";
    button1.setAttribute("onclick", "slaapKamer1()");
}
startGame();