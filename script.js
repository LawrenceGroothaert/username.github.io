function searchWord() {
    const searchInput = document.getElementById("search").value;

    // Perform the search logic here (you can use AJAX for backend queries)
    // For this demonstration, let's assume the word "pantacunta" is always searched.
    if (searchInput.toLowerCase() === "pantacunta") {
        const definitionDiv = document.querySelector(".definition");
        definitionDiv.innerHTML = `
            <h2>pantacunta</h2>
            <p><strong>Descriptive noun:</strong> A vibrant warm colour</p>
            <p><strong>Synonyms:</strong> vibrante</p>
        `;
    } else {
        alert("Word not found!");
    }
}
