let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

let hedLine = document.querySelectorAll('h1, h2');
const navbar = document.querySelector('nav');

let col ;
buttons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    switch(e.target.id) {
      
      case "gray":
      case "white":
      case "blue":
      case "yellow":

        col = e.target.id; // store the colour
        body.style.backgroundColor = col;

        if (col === "gray" || col === "blue") 
        {
          hedLine.forEach(h => h.style.color = "#f2f2f2"); // White color
        }
        else 
        {
          hedLine.forEach(h => h.style.color = "black");
        }

        break;

      default:
        col = "#f2f2f2";
        body.style.backgroundColor = col;
        hedLine.forEach(h => h.style.color = "black");

    }
  });
});

// Nav Hovering always choose (mouseenter, mouseleave)
navbar.addEventListener('mouseenter', () => {
    body.style.backgroundColor = "#9adaff";
    hedLine.forEach(h => h.style.color = "black");
  });

  navbar.addEventListener('mouseleave', () => {
    body.style.backgroundColor = col;

    if (col === "gray" || col === "blue") {
      hedLine.forEach(h => h.style.color = "#f2f2f2");
    } else {
      hedLine.forEach(h => h.style.color = "black");
    }
  });

