//Allow for selection of image to trigger modal view
const items = document.querySelectorAll('.item');

for(const item of items) {
    item.title="Click to Enlarge";
    item.addEventListener('click',() => {
        const imgSrc = item.querySelector('img').src;

        //Create the modal div
        const modal = document.createElement('div');
        modal.classList.add('modal');

        //Create the img element
        const imgElement = document.createElement('img')
        imgElement.src = imgSrc
        imgElement.alt = 'Enlarged Abstract Image';

        //Append the img  element to the modal div
        modal.appendChild(imgElement);

        //Add the modal element to the body
        document.body.appendChild(modal);
        setTimeout(()=> {
            imgElement.classList.add('reveal');
        }, 10);

        //Remove the modal when is clicked 
        modal.addEventListener('click', () => {
            imgElement.classList.remove('reveal');
            setTimeout(() => {
                modal.remove();
        }, 300);
            });
            
    })
}


//Function to check if page is scrolled and adjust the logo size
const checkScroll = () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    //Add/remove 'scrolled class based on scroll position 
    if(scrollPosition>20) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }

    //Calculate new font size based on scroll position
    let newSize = 4.8 - (scrollPosition * 0.03); //Decrease by 0.03 for every pixel scrolled

    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(1.4, newSize);
    newSize = Math.min(4.8, newSize);

    logo.style.fontSize = newSize + "rem";

    
}

//Event Listener for scroll event
    window.addEventListener('scroll', checkScroll);