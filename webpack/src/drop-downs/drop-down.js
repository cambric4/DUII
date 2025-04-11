export function initDropdowns() {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      const trigger = dropdown.dataset.trigger || "click";
  
      if (trigger === "click") {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("visible");
        });
  
        document.addEventListener("click", e => {
          if (!dropdown.contains(e.target)) {
            menu.classList.remove("visible");
          }
        });
      }
  
      if (trigger === "hover") {
        dropdown.addEventListener("mouseenter", () => {
          menu.classList.add("visible");
        });
  
        dropdown.addEventListener("mouseleave", () => {
          menu.classList.remove("visible");
        });
      }
    });
  }
  