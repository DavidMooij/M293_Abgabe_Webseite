if (!window.matchMedia("(max-width: 850px)").matches) {
    window.addEventListener("scroll", function () {
        var header = document.getElementById("mainHeader");
        var scrollPosition = window.scrollY;
        var shrinkPosition = 5;

        if (scrollPosition > shrinkPosition) {
            header.classList.add("smaller-header");
        } else {
            header.classList.remove("smaller-header");
        }
    });
    console.log("smaller");
}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll(".image-chessX img");
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add("active");
                item.classList.remove("previous");
            } else {
                item.classList.remove("active");
                if (i === (currentIndex - 1 + totalItems) % totalItems) {
                    item.classList.add("previous");
                } else {
                    item.classList.remove("previous");
                }
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    document.getElementById("next").addEventListener("click", nextItem);
    document.getElementById("previous").addEventListener("click", prevItem);

    let hover = false;
    const container = document.querySelector(".image-chessX");

    container.addEventListener("mouseenter", () => {
        hover = true;
    });

    container.addEventListener("mouseleave", () => {
        hover = false;
    });

    setInterval(() => {
        if (!hover) {
            nextItem();
        }
    }, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    const popupButton = document.querySelector(".popup-button");
    const videoPopup = document.getElementById("videoPopup");
    const closePopup = document.getElementById("closePopup");
    const video = document.getElementById("popupVideo");

    popupButton.addEventListener("click", function () {
        videoPopup.style.display = "block";
        video.play();
    });

    closePopup.addEventListener("click", function () {
        video.pause();
        video.currentTime = 0;
        videoPopup.style.display = "none";
    });
});