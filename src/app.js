window.onload = function () {
  
    // Arrays con las opciones
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    // Seleccionar elementos al azar
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    // Concatenar la excusa
    let excuse = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;

    // Mostrar la excusa en el elemento con id "excuse"
    document.getElementById("excuse").innerText = excuse;
  }

  