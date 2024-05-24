document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {
            id: 1,
            name: "Harley Quinn",
            description: "Harleen Quinzel was a psychologist at Arkham Asylum, and after meeting the Joker, she became his frequent accomplice, took on the name Harley Quinn.",
            image: "Harley Quinn.jpg",
            powers: ['Expert Gymnast', 'Hand to Hand Combat', 'Immunity to Toxins', 'Quick'],
            origin: "Gotham City",
            weakness: "Mental Illness",
            firstAppearance: 'Batman: The Animated Series',
            alt: "Harley, fully armed, blowing a kiss."
        },
        {
            id: 2,
            name: "Thanos",
            description: "He is described as the Mad Titan and weighs 985 lbs with red eyes, a bald head, and purple skin.",
            image: "Thanos.jpg",
            powers: ['Superhuman Strength', 'Highly Intelligent', 'Immortality'],
            origin: "Titan",
            weakness: "Infinity Stones",
            firstAppearance: 'The Invincible Iron Man #55',
            alt: "Thanos with one hand clenched next to him and the other hand above his head conjuring some energy."
        },
        {
            id: 3,
            name: "The Joker",
            description: "The Joker is known for his clown-like appearance, sick humor, and unpredictable, homicidal nature.",
            image: "Joker.jpg",
            powers: ['Master Tactician', 'Highly Intelligent', 'Chemical Engineering'],
            origin: "Gotham City",
            weakness: 'Batman',
            firstAppearance: 'Batman #1',
            alt: "Three Jokers smiling and posing."
        },
        {
            id: 4,
            name: "Dr. Octopus",
            description: "A multi-armed maniacal menace with a clinically mad mind who stops at nothing to gain more power and defeat Spider-Man.",
            image: "Dr. Octopus.jpg",
            powers: ['4 prehensile titanium-steel tentacles'],
            origin: "Schenectady, New York",
            weakness: 'His armored tentacles.',
            firstAppearance: 'Amazing Fantasy #15',
            alt: "Superman floating mid air."
        },
        {
            id: 5,
            name: "Magneto",
            description: "Holocaust survivor who can control magnetic fields and fight for mutants to replace humans as the world's dominant species.",
            image: "Magneto.jpg",
            powers: ['Magnetism', 'Force Fields', 'High IQ'],
            origin: "Germany",
            weakness: 'Powers being cut off.',
            firstAppearance: 'The X-Men #1',
            alt: "Magneto floating mid air."
        },
        {
            id: 6,
            name: "Dr. Doom",
            description: "His most notable feature is the vibranium armor he wears to cover his face and his whole body except his eyes. He's also known for being egotistical and maniacal, and for his constant pursuit of world domination.",
            image: "Doctor Doom.jpg",
            powers: ['High IQ', 'Superhuman Strength', 'Dark Magic', 'His Armor'],
            origin: "Riga, Latvia",
            weakness: 'Magnetism',
            firstAppearance: 'The Fantastic Four #5',
            alt: "Dr. Doom with one arm extended cojuring green energy."
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
        img.alt = item.name;
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
