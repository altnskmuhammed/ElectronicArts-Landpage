
fetch('./data/EANews.json')
.then(response => response.json())
.then(parsed => {
    console.log(parsed.data);
/*     console.log(parsed.data[card].image);
 */
    for(const card in parsed.data) {
    `<div class="section-three__card">
        <div class="section-three__card-image">
            <img src=${parsed.data[card].image} alt=${parsed.data[card].alt} />
        </div>

        <div class="section-three__card-description">
            <div class="section-three__card-header">
                <p>
                    ${parsed.data[card].title}
                    <span>${parsed.data[card].date}</span>
                </p>
            </div>
            <div class="section-three__card-body">
                <h2>${parsed.data[card].header}</h2>
                <p>${parsed.data[card].description}</p>
            </div>
        </div>
    </div>`
    }
});


let sectionThreeCards = document.getElementById('section-three-cards');

let eaNewsButton = document.getElementById('EA-News');
let eaPlayButton = document.getElementById('EA-Play');
let fifaButton = document.getElementById('FIFA');
let f1Button = document.getElementById('F1');
let maddenNFLButton = document.getElementById('Madden-NFL');
let apexLegendsButton = document.getElementById('Apex-Legends');
let theSimsButton = document.getElementById('The-Sims-4');
let battlefieldButton = document.getElementById('Battlefield');
let insideEAButton = document.getElementById('Inside-EA');

const generateDiv = () => {
    let sectionThreeCard =  document.createElement("div");
    sectionThreeCard.className = "section-three__card";

    /* Image */ 
    let sectionThreeImageDiv = document.createElement("div");
    sectionThreeImageDiv.className = "section-three__card-image";
    let sectionThreeImage = document.createElement("img");
    sectionThreeImage.src = "images/Section Three/EA News 1.png";
    sectionThreeImageDiv.append(sectionThreeImage);

    /* Description */
    let sectionThreeDescription = document.createElement("div");
    sectionThreeDescription.className = "section-three__card-description";

    let sectionThreeHeader = document.createElement("div");
    sectionThreeHeader.className = "section-three__card-header";
    sectionThreeHeaderP = document.createElement("p");
    sectionThreeHeaderP.innerText = "Electronic Arts Inc.";
    sectionThreeHeaderSpan = document.createElement("span");
    sectionThreeHeaderSpan.innerText = "Aug 2, 2022";

    sectionThreeHeader.appendChild(sectionThreeHeaderP);
    sectionThreeHeaderP.appendChild(sectionThreeHeaderSpan);

    let sectionThreeBody = document.createElement("div");
    sectionThreeBody.className = "section-three__card-body";
    let sectionThreeBodyh2 = document.createElement("h2");
    sectionThreeBodyh2.innerText = "Electronic Arts Reports Q1 FY23 Financial Results";
    let sectionThreeBodyP = document.createElement("p");
    sectionThreeBodyP.innerText = "Electronic Arts Inc. (NASDAQ: EA) today announced preliminary financial results for its first fiscal quarter ended June 30, 2022.";

    sectionThreeBody.appendChild(sectionThreeBodyh2);
    sectionThreeBody.appendChild(sectionThreeBodyP);

    sectionThreeDescription.appendChild(sectionThreeHeader);
    sectionThreeDescription.appendChild(sectionThreeBody);

    sectionThreeCard.appendChild(sectionThreeImageDiv);
    sectionThreeCard.appendChild(sectionThreeDescription);
    sectionThreeCards.appendChild(sectionThreeCard);
}

eaNewsButton.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        generateDiv();
    }
} );


