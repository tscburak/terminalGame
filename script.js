function addFields(){
    let container = document.getElementById("container");
    container.appendChild(document.createElement("br"));
        // Append a node with a random text
        container.appendChild(document.createTextNode("> "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.onkeydown = addTrigger;
        input.autofocus = true;
        input.autocomplete ="off"
        input.id = "input";
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        // Append a line break 
       
        input.focus()
    
}

function addTrigger(){
    if (event.keyCode == 13) getResponse()
}

function getResponse(){
    const inputs = document.getElementsByTagName("input");
    const input = inputs.item(inputs.length-1)
    input.disabled = true;
    console.log(inputs);
    console.log(input);
    switch (input.value) {
        case "1":
            impossibleGame();
            break;
        case "2":
            container.appendChild(document.createTextNode("Word Game"));
            addFields();
            break;
        case "3":
            container.appendChild(document.createTextNode("Crypto Text"));
            addFields();
            break;
        case "4":
            container.appendChild(document.createTextNode("About"));
            addFields();
            break;
        case "5":
            container.appendChild(document.createTextNode("Help"));
            addFields();
            break;
        default:
            container.appendChild(document.createTextNode("Response cannot resolved: ("+ input.value +")"));
            addFields();
    }
}
function impossibleGame(){
    container.appendChild(document.createTextNode("Welcome to the Impossible Game!"));
    const board = container.appendChild(document.createElement("pre"));
    let moves = {
        "e":
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n",

        "o":
        "      /  /      \n" +
        "   /        /   \n"+
        "  /          /  \n"+
        "  /          /  \n"+
        "   /        /   \n"+
        "      /  /      \n",

        "x": 
        "     \\    /     \n"+
        "      \\  /      \n"+
        "       \\/       \n"+
        "       /\\       \n"+
        "      /  \\      \n"+
        "     /    \\     \n"
    };

    board.appendChild(document.createTextNode(
        "         A                 B               C       \n"+
        "   __________________________________________________\n" +
        "  |      /  /      |                |     \\    /     |\n"+
        "  |   /        /   |                |      \\  /      |\n"+
        "  |  /          /  |                |       \\/       |\n"+
        "1 |  /          /  |                |       /\\       |\n"+
        "  |   /        /   |                |      /  \\      |\n"+
        "  |      /  /      |                |     /    \\     |\n"+
        "  |________________|________________|________________|\n"+
        "  |      /  /      |                |     \\    /     |\n"+
        "  |   /        /   |                |      \\  /      |\n"+
        "  |  /          /  |                |       \\/       |\n"+
        "2 |  /          /  |                |       /\\       |\n"+
        "  |   /        /   |                |      /  \\      |\n"+
        "  |      /  /      |                |     /    \\     |\n"+
        "  |________________|________________|________________|\n"+
        "  |      /  /      |                |     \\    /     |\n"+
        "  |   /        /   |                |      \\  /      |\n"+
        "  |  /          /  |                |       \\/       |\n"+
        "3 |  /          /  |                |       /\\       |\n"+
        "  |   /        /   |                |      /  \\      |\n"+
        "  |      /  /      |                |     /    \\     |\n"+
        "  |________________|________________|________________|\n"));

    // board.appendChild(document.createTextNode(moves.x + moves.e + moves.o));
    console.log(board.value);
}