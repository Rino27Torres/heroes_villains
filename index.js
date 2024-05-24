document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {
            id: 1,
            name: "Superman",
            description: "Superman is a superhero who is a symbol of truth, justice, hope, heroism, compassion, and responsibility. He is the last survivor of the planet Krypton, who was sent to Earth as a baby and raised by the Kent family as Clark Kent.",
            image: "Supermanflying.jpg",
            powers: ['Flight', 'Superhuman Strength', 'X-Ray Vision', 'Superhuman Speed', 'Heat Vision'],
            origin: "Krypton",
            weakness: 'Kryptonite',
            firstAppearance: 'Action Comics #1',
            alt: "Superman floating mid air."
        },
        {
            id: 2,
            name: "Wolverine",
            description: "He is a mutant with animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, a skeleton reinforced with the unbreakable fictional metal adamantium, and three retractable claws in each hand",
            image: "Wolverine.jpg",
            powers: ['Retractable adamantium claws', 'Healing Factor', 'Adamantium Bones'],
            origin: "Alberta, Canada",
            weakness: 'Magnetism',
            firstAppearance: 'The Incredible Hulk #180',
            alt: "Wolverine with teeth clenched and both claws out."
        },
        {
            id: 3,
            name: "Batman",
            description: "He is a vigilante who fights crime in Gotham City as a bat-themed figure, and his real identity is Bruce Wayne, a billionaire and playboy",
            image: "Batman.jpg",
            powers: ['Money', 'Ninja Training', 'Gadgets'],
            origin: "Gotham City",
            weakness: 'Super Powers',
            firstAppearance: 'Detective Comics #27',
            alt: "Batman perched on a stone gargoyle."
        },
        {
            id: 4,
            name: "Spiderman",
            description: "Spider-Man, also known as Peter Parker, is a Marvel Comics character with spider-like abilities that he uses to help others.",
            image: "Spider-Man.jpg",
            powers: ['Spider Senses', 'Superhuman Strength', 'Gadgets'],
            origin: "Queens, New York City",
            weakness: 'Empathy',
            firstAppearance: 'Amazing Fantasy #15',
            alt: "Spiderman posing on a traffic light."
        },
        {
            id: 5,
            name: "Iron Man",
            description: "Iron Man, also known as Tony Stark, is a Marvel Comics character and the alter ego of billionaire industrialist Anthony Edward Stark.",
            image: "Iron Man.jpg",
            powers: ['Money', 'Iron Man Armor', 'High IQ'],
            origin: "Long Island, New York",
            weakness: 'Electric heart',
            firstAppearance: 'Tales of Suspense #39',
            alt: "Iron man standing with a light in his chest."
        },
        {
            id: 6,
            name: "Wonder Woman",
            description: "Wonder Woman is a powerful Amazon warrior and founder of the Justice League.",
            image: "Wonder_Woman.jpg",
            powers: ['Flight', 'Superhuman Strength', 'Lasso of Truth', 'Superhuman Speed', 'Bracers'],
            origin: "Themyscira",
            weakness: 'Shackled by a man',
            firstAppearance: 'All Star Comics #8',
            alt: "Wonder Woman standing and looking to the sky."
        }
    ];

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("modal-caption");
    const descriptionText = document.getElementById("modal-description");
    const span = document.getElementsByClassName("close")[0];
    const heroGallery = document.getElementById("hero-gallery");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    data.forEach((item) => {
        const img = document.createElement('img');
        img.src = `./Pictures/${item.image}`;
        img.alt = item.alt;
        img.className = 'gallery-image';
        img.dataset.index = item.id - 1;

        img.onclick = function() {
            const imageData = data[this.dataset.index];
            modal.style.display = "block";
            modalImg.src = `./Pictures/${imageData.image}`;

            captionText.innerHTML = `
                  <strong>Name:</strong> ${imageData.name} <br>
                  <strong>Origin:</strong> ${imageData.origin} <br>
                  <strong>First Appearance:</strong> ${imageData.firstAppearance} <br>
                  <strong>Weakness:</strong> ${imageData.weakness}
            `;

            descriptionText.innerHTML = `
                <p>${imageData.description}</p>
                <p><strong>Powers:</strong> ${imageData.powers.join(', ')}</p>
            `;
        }

        heroGallery.appendChild(img);
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    heroGallery.addEventListener('wheel', (event) => {
        event.preventDefault();
        heroGallery.scrollLeft += event.deltaY;
    });

    leftArrow.onclick = () => {
        heroGallery.scrollLeft -= 950;
    }

    rightArrow.onclick = () => {
        heroGallery.scrollLeft += 950;
    }
});
