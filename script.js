let inp = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let str = "";
let arr = Array.from(buttons);

function simulateButtonPress(button) {
    if (!button) return;
    const activeClass = 'key-active';

    // 1. Apply the class
    button.classList.add(activeClass);

    // 2. Remove the class after a short delay (100ms)
    setTimeout(() => {
        button.classList.remove(activeClass);
    }, 100);
}

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        inp.blur(); 
        // ... (Your existing button click logic is fine) ...
        if (e.target.innerHTML == "=") {
            let expr = str.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
            try { // Added try/catch for safer evaluation
                 str = eval(expr);
            } catch (error) {
                 str = 'Error';
            }
            inp.value = str;
        }
        else if (e.target.innerHTML == "AC") {
            str = "";
            inp.value = str;
        }
        else if (
            button.querySelector(".fa-delete-left") ||
            e.target.classList.contains("fa-delete-left")
        ) {
            str = str.slice(0, str.length - 1);
            inp.value = str;
        }
        else if (e.target.innerHTML == "( )") {
            const open = (str.match(/\(/g) || []).length;
            const close = (str.match(/\)/g) || []).length;
            if (open <= close) {
                str += "(";
            } else {
                str += ")";
            }
            inp.value = str;
        }
        else {
            str += e.target.innerHTML;
            inp.value = str;
        }
    });
});

// Helper function to find the HTML button element for a pressed key
// Helper function to find the HTML button element for a pressed key
function findButtonByKey(key) {
    // 1. Check for exact match (numbers, operators, equals)
    let button = arr.find(btn => btn.innerHTML === key);
    if (button) return button;

    // 2. Check for special key mappings
    switch (key) {
        case 'Enter':
            return arr.find(btn => btn.innerHTML === "="); // Map Enter to "="
        case 'Escape':
            return arr.find(btn => btn.innerHTML === "AC"); // Map Escape to "AC"
        case 'Backspace':
            // Find the delete button (based on icon or class)
            return arr.find(btn => 
                btn.querySelector(".fa-delete-left") || 
                btn.classList.contains("fa-delete-left")
            );
        case '(': // <--- NEW MAPPING FOR BRACKET KEY
        case ')': // <--- NEW MAPPING FOR BRACKET KEY
            // Map either '(' or ')' keyboard key to the physical '( )' button.
            return arr.find(btn => btn.innerHTML === "( )");
        default:
            return null;
    }
}

document.addEventListener("keydown", (e) => {
    if (document.activeElement === inp) return; 

    const key = e.key;
    // FIND the corresponding button FIRST
    const targetButton = findButtonByKey(key); 

    // Handle key logic
    if ((/\d/).test(key) || "+-*/.".includes(key) || key === "%" || key === "(" || key === ")") {
        str += key;
        inp.value = str;
        e.preventDefault();
        
    } else if (key === "Enter" || key === "=") {
        // Use the button's click handler for robust calculation logic
        if (targetButton) {
            targetButton.click();
        }
        e.preventDefault();
        
    } else if (key === "Backspace") {
        str = str.slice(0, str.length - 1);
        inp.value = str;
        e.preventDefault();
        
    } else if (key === "Escape") {
        str = "";
        inp.value = str;
        e.preventDefault();
        
    } else {
        // Key is not a calculator key, stop processing
        return; 
    }
    
    // Apply the active style ONLY if a matching button was found
    if (targetButton) {
        simulateButtonPress(targetButton);
    }
});