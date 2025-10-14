function tambahMateri() {
    const input = document.getElementById("materiInput");
    const list = document.getElementById("materiList");
    const value = input.value.trim();

    if (value !== "") {
        const li = document.createElement("li");
        li.textContent = value;
        li.style.animationDelay = "0.1s";
        list.appendChild(li);
        input.value = "";
    }
}

// Fungsi untuk ganti foto profil
document.getElementById("uploadImage").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById("profileImage").src = event.target.result;
    };
    reader.readAsDataURL(file);
});
