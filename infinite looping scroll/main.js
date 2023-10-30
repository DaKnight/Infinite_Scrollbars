const scrollbars = document.querySelectorAll(".scrollbar");

// Checks if animation is turned off by user or not
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();;
}
// If not turned off then the function will run to add the animation

function addAnimation(){
    scrollbars.forEach((scrollbar) => {
        scrollbar.setAttribute("data-animated", true);

        const scrollbarInner = scrollbar.querySelector('.scrollbar_inner');
        // const scrollbarContent = scrollbarInner.children;
        // This may cause problem cuz, HTML collection will be updated if the DOM is updated which will cause infinte loop of duplicates.

        // so 

        // we gave Array.from() method that will make a copy of initial data that will won't get changed later on.

        const scrollbarContent = Array.from(scrollbarInner.children);

        scrollbarContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollbarInner.appendChild(duplicatedItem);
            
        })
    });
}

