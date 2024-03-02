class Tree {
    constructor(name, species, age, height, location, imageFileName) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.height = height;
        this.location = location;
        this.imageFileName = imageFileName;
    }

    getSection() {
        return `
            <section class="tree-summary" onclick="showTreeInfo('${this.name}')">
                <h2>${this.name}</h2>
                <img src="images/${this.imageFileName}" alt="${this.name}">
            </section>
        `;
    }

    getExpandedSection() {
        return `
            <div class="tree-info">
                <h2>${this.name}</h2>
                <img src="images/${this.imageFileName}" alt="${this.name}">
                <p>Species: ${this.species}</p>
                <p>Age: ${this.age}</p>
                <p>Height: ${this.height}</p>
                <p>Location: ${this.location}</p>
            </div>
        `;
    }
}

const trees = [
    new Tree("Oak", "oak.jpg", "Deciduous", "Broadleaf", "Tall", "Acorns", "Shade tree"),
    new Tree("Pine", "pine.jpg", "Evergreen", "Needleleaf", "Conical", "Pine cones", "Christmas tree"),
    new Tree("Maple", "maple.jpg", "Deciduous", "Broadleaf", "Medium", "Maple seeds", "Fall foliage"),
    new Tree("Birch", "birch.jpg", "Deciduous", "Broadleaf", "Medium", "Catkins", "Paper"),
];

function generateTreeBoxes() {
    const treeContainer = document.querySelector('.tree-container');

    trees.forEach(tree => {
        const treeBox = document.createElement('div');
        treeBox.classList.add('tree-box');
        treeBox.innerHTML = `
            <img src="images/${tree.image}" alt="${tree.name}" onclick="openModal(${trees.indexOf(tree)})">
            <p>${tree.name}</p>
        `;
        treeContainer.appendChild(treeBox);
    });
}

function openModal(index) {
    const tree = trees[index];
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h3>${tree.name}</h3>
        <img src="images/${tree.image}" alt="${tree.name}">
        <p><strong>Type:</strong> ${tree.type}</p>
        <p><strong>Leaf Type:</strong> ${tree.leafType}</p>
        <p><strong>Height:</strong> ${tree.height}</p>
        <p><strong>Special Feature:</strong> ${tree.specialFeature}</p>
        <p><strong>Use:</strong> ${tree.use}</p>
    `;
    document.getElementById('treeModal').style.display='block';
}

generateTreeBoxes();

