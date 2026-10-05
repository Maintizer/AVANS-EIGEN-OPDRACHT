const cardsContainer = document.getElementById("cards");

const cardElements = [
    {title: "Bart",
    description: "Studying to become a software engineer.",
    extra: "Loves to drive and play games"},
    {title: "Rutger",
    description: "Quick learner and eager to study",
    extra: "Has a cool 3d printer"},
    {title: "Denise",
    description: "Loving baker with a lot of creativity.",
    extra: "Has a cute cat named Ebony"},
    {title: "Michelle",
    description: "Hard working caregiver with a golden heart.",
    extra: "Has 2 furry children"},
];

function addElement(card){
    // Create elements  
    let articleElement = document.createElement("div");
    let titleElement = document.createElement("h2");
    let descriptionElement = document.createElement("p");
    let extraElement = document.createElement("p");

    // Add text content
    titleElement.textContent = (card.title);
    descriptionElement.textContent = (card.description);
    extraElement.textContent = (card.extra);

    // Add classes
    articleElement.classList.add("articleElement")
    titleElement.classList.add("titleElement");
    descriptionElement.classList.add("descriptionElement");
    extraElement.classList.add("extraElement");

    // Add elements to article
    articleElement.append(titleElement, descriptionElement, extraElement);
    
    // Return result
    cardsContainer.append(articleElement);

};

cardElements.forEach(addElement);