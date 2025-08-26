/* by chat GPT, 17 de junho de 2025 */
const textos = ["Alanzoka", "Nextstage", "Edge"];
    let index = 0;
    let charIndex = 0;
    let escrevendo = true;
    
    const elemento = document.getElementById("typing-text");
    
    function digitar () {
        if (escrevendo) {
            if (charIndex < textos[index].length) {
                elemento.textContent += textos[index].charAt(charIndex);
                charIndex++;
                setTimeout(digitar, 100);
            } else {
                escrevendo = false;
                setTimeout(digitar, 1500); //tempo até começar apagar
            }
        } else {
            if (charIndex > 0) {
                elemento.textContent = textos[index].substring(0, charIndex - 1);
                
                charIndex--;
                setTimeout(digitar, 50);
            } else {
                escrevendo = true;
                index = (index + 1) % textos.lenght;
                setTimeout(digitar, 300);
            }
        }
    }
    
    digitar();