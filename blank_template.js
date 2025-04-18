// Tile Expand/Collapse Logic
function attachTileClickAnimation(element) {
    element.addEventListener('click', function () {
        if (element.classList.contains('expanded')) {
            let currentHeight = element.scrollHeight;
            element.style.height = currentHeight + 'px';
            requestAnimationFrame(() => {
                element.style.height = '160px';
            });
            element.classList.remove('expanded');
        } else {
            let currentHeight = element.scrollHeight;
            element.style.height = '160px';
            requestAnimationFrame(() => {
                element.style.height = currentHeight + 'px';
            });
            element.classList.add('expanded');
        }
    });
    element.style.transition = 'height 0.5s ease-in-out';
}

// Attach to all existing tiles initially
document.querySelectorAll('.element').forEach(attachTileClickAnimation);

// Modal: Open Dialog
function openDialog() {
    document.getElementById("addDialog").style.display = "flex";
}

// Modal: Close Dialog
function closeDialog() {
    document.getElementById("addDialog").style.display = "none";
}

// Add New Tile Logic
function addTile() {
    const fileInput = document.getElementById("imageInput");
    const textInput = document.getElementById("textInput").value;
    const file = fileInput.files[0];

    if (file && textInput.trim() !== "") {
        const reader = new FileReader();
        reader.onload = function (e) {
            const listData = document.querySelector(".list-data");

            // Create the new tile element
            const element = document.createElement("div");
            element.className = "element";

            const img = document.createElement("img");
            img.className = "image";
            img.src = e.target.result;

            const textDiv = document.createElement("div");
            textDiv.className = "text";
            textDiv.textContent = textInput;

            const currentElements = listData.querySelectorAll(".element").length;
            if (currentElements % 2 === 0) {
                element.appendChild(img);
                element.appendChild(textDiv);
            } else {
                element.appendChild(textDiv);
                element.appendChild(img);
            }

            // Enable expand/collapse on click
            attachTileClickAnimation(element);
            element.style.height = '160px';

            // Insert new tile just before the "adding-element" box
            const addingBox = document.querySelector(".adding-element");
            listData.insertBefore(element, addingBox);

            // Reset form and close dialog
            fileInput.value = "";
            document.getElementById("textInput").value = "";
            closeDialog();
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image and enter text.");
    }
}