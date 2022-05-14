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
    let models = {
        "e":
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n"+
        "                \n"+
        "                ",

        "o":
        "      /  /      \n" +
        "   /        /   \n"+
        "  /          /  \n"+
        "  /          /  \n"+
        "   /        /   \n"+
        "      /  /      ",

        "x": 
        "     \\    /     \n"+
        "      \\  /      \n"+
        "       \\/       \n"+
        "       /\\       \n"+
        "      /  \\      \n"+
        "     /    \\     ",

        "wall":
        "|\n"+
        "|\n"+
        "|\n"+
        "|\n"+
        "|\n"+
        "|",

        "ground":
        "________________"
        
    };
    let table = document.getElementsByClassName("grid-container");
    console.log(table);
    //document.createTextNode("Welcome to the Impossible Game!");
    for(let i = 0; i<25; i++){
        window["item"+(i+1)] =  (table.item(0).appendChild(document.createElement("div")))
        window["item"+(i+1)].classList.add("grid-item");
        window["item"+(i+1)] = window["item"+(i+1)].appendChild(document.createElement("pre"));

        if((i>=5 && i<=9)|| (i>=15 && i<= 19)){
            if((i%5) % 2 == 1){
                window["item"+(i+1)].appendChild(document.createTextNode(""));
                continue;
            }
        window["item"+(i+1)].appendChild(document.createTextNode(models.ground));}
        else if((i%5) % 2 == 1)
            window["item"+(i+1)].appendChild(document.createTextNode(models.wall));
    }
    
    console.log(table);
    
     item1.appendChild(document.createTextNode(models.x));
    item3.appendChild(document.createTextNode(models.o));
    // item3.appendChild(document.createTextNode(models.o));
    // item4.appendChild(document.createTextNode(models.o));
    // item5.appendChild(document.createTextNode(models.o));
    // item6.appendChild(document.createTextNode(models.x));
    // item7.appendChild(document.createTextNode(models.o));
    // item8.appendChild(document.createTextNode(models.x));
    // item9.appendChild(document.createTextNode(models.o));

    
    // board.appendChild(document.createTextNode(
    //     "         A                 B               C       \n"+
    //     "                                                    \n" +
    //     "        /  /      |                |     \\    /     \n"+
    //     "     /        /   |                |      \\  /      \n"+
    //     "    /          /  |                |       \\/       \n"+
    //     "1   /          /  |                |       /\\       \n"+
    //     "     /        /   |                |      /  \\      \n"+
    //     "        /  /      |                |     /    \\     \n"+
    //     "  ----------------+----------------+----------------\n"+
    //     "        /  /      |                |     \\    /     \n"+
    //     "     /        /   |                |      \\  /      \n"+
    //     "    /          /  |                |       \\/       \n"+
    //     "2   /          /  |                |       /\\       \n"+
    //     "     /        /   |                |      /  \\      \n"+
    //     "        /  /      |                |     /    \\     \n"+
    //     "  ----------------+----------------+----------------\n"+
    //     "        /  /      |                |     \\    /     |\n"+
    //     "     /        /   |                |      \\  /      |\n"+
    //     "    /          /  |                |       \\/       |\n"+
    //     "3   /          /  |                |       /\\       |\n"+
    //     "     /        /   |                |      /  \\      |\n"+
    //     "        /  /      |                |     /    \\     |\n"+
    //     "                                                   \n"));

    // board.appendChild(document.createTextNode(models.x + models.e + models.o));
    
}