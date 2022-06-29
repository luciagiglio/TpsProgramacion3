const $answer = document.querySelectorAll(".answer");

let el;
let touchLocation;
let textChoose = "";
cargarEventos();

const cargarEventos = () => {
  console.log("cargarEventos");
  fill.forEach(function (item) {
    item.addEventListener("touchstart", function (e) {
      console.log("touchstart");
      e.preventDefault();
      [...e.changedTouches].forEach((touch) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.textContent = this.textContent;
        textChoose = this.textContent;
        this.style.color = "#7471715b";
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
        dot.id = touch.identifier;
        document.body.append(dot);
      });
    });

    item.addEventListener("touchmove", function (e) {
      e.preventDefault();
      touchLocation = e.targetTouches[0];

      [...e.changedTouches].forEach((touch) => {
        const dot = document.querySelector(`[id="${touch.identifier}"]`);
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
      });
    });

    item.addEventListener("touchend", function (e) {
      [...e.changedTouches].forEach((touch) => {
        const dot = document.getElementById(touch.identifier);
        // console.log("este esl el " + dot);
        dot.remove();
        console.log(touchLocation.pageX + " " + touchLocation.pageY);
        el = document.elementFromPoint(
          touchLocation.pageX,
          touchLocation.pageY
        );

        //console.log((el.textContent = textChoose));
        if (el.classList.value === "emptys") {
          console.log("entro");
          this.style.color = "#ffffffb4";
          el.textContent = textChoose;
        }
      });
    });
  });
};
