function abrirAdicionarRefeicao() {
    let comida = prompt("Digite a refeição:");

    if (!comida || comida.trim() === "") {
        alert("Digite algo válido.");
        return;
    }

    // Seleciona o grid onde ficam as refeições
    const grid = document.querySelector(".meals-grid");

    // Cria a nova refeição
    const card = document.createElement("div");
    card.classList.add("meal-card");

    card.innerHTML = `
        <h2 class="meal-time">Refeição adicionada</h2>
        <p class="meal-description">${comida}</p>
        <span class="meal-calories">(0 kcal)</span>
    `;

    // Adiciona dentro do grid
    grid.appendChild(card);
}
