// ai and me

// pdf.js - no import statement
const button = document.getElementById("download-pdf");
const element = document.getElementById("cv-container");

button.addEventListener("click", () => {
    if (typeof window.html2pdf === "undefined") {
        // Fallback: open browser print dialog
        window.print();
        return;
    }

    button.disabled = true;
    button.textContent = "Generating PDF...";
    button.style.cursor = "wait";
    // button.style.pointerEvents = "none";
    button.style.backgroundColor = "#ab8100"; //dark yellow

    const curdate = new Date();
    const yy = String(curdate.getFullYear()).slice(-2);
    const mm = String(curdate.getMonth() + 1).padStart(2, "0");
    const dd = String(curdate.getDate()).padStart(2, "0");
    const opt = {
        margin: 0,
        filename: `Sami_Regragui_CV(${yy}.${mm}.${dd}).pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            button.textContent = "Downloaded";
            button.style.backgroundColor = "#28a745"; //green
            setTimeout(() => {
                button.disabled = false;
                button.textContent = "Download PDF";
                button.style.cursor = "pointer";
                // button.style.pointerEvents = "auto";
                button.style.backgroundColor = "#2563eb"; //blue
            }, 1200);
        });
});
