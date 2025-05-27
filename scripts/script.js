// script.js


//Make sure the JavaScript code is reusable! You should be able to 
// create multiple drop-downs on a page using HTML and reuse the JavaScript 
// logic to hide/reveal them.

// can children under a element be treated as an array?
const container = document.querySelector("#container");

const menuNav = document.querySelector("nav");

const button = document.querySelector("button");

//console.log("i should the sibling plus all children of button?: ", button.nextSibling); // works


//const menuContainer = button.nextSibling;

//console.log(menuContainer.childNodes); doesn't work to show children of the sibling

//console.log("Should i see the names of the menu selections: ", menuNav.children); // prints html elements but has names inside

//console.log("Home, About, Blog, Contact?: ", menuNav.childNodes); // node list, has extra stuff


const msg = document.createElement("div");
msg.textContent = "Hover over me";
msg.classList.add("msg");

container.insertBefore(msg, button);



button.addEventListener("pointerenter", (e) => {

    console.log(e.target);

    msg.classList.add("hide2"); // just hide prevents the others from hiding


    // run toggle function here

    toggleOnDropdown(menuNav);

});

// a non specific factory function to pass a menu item to and toggle it's visibility upon element 
// hover or click

function toggleOnDropdown(menu) {

   // menu.children doesn't work. maybe just menu

   // menu responds. however it needs the .hide class on it already

  

  // this is only a function for class toggle, then add it to a button click.



    const visibleElement = document.querySelector(".hide"); // the button





    if (visibleElement) {


     
   // remove class to just the menu


   menu.classList.remove("hide");
       

      // menuChildren.style.display = "none"; // not working


    console.log("visibility added if button element hovered over");

        }


    else {

        // remove visibility
// add hide class

 menu.classList.add("hide");

     


        console.log("visibility taken away");


 }

   

    

}


