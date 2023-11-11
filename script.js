const handleProfileMouseover = () => {
  const targetList = document.getElementsByClassName("profile-img-wrapper");
  for (const target of targetList) {
    target.addEventListener("mouseenter", () => {
      target.classList.add("animated");
    });
    target.addEventListener("mouseleave", () => {
      target.classList.remove("animated");
    });
  }
};

handleProfileMouseover();
