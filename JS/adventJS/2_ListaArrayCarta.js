/*Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
*/
const carta = 'bici coche balón _playstation bici coche peluche'
function listGifts(letter) {
    let objContainer = {}
    let newLetter = letter.replace(/_\w+/g, "");
    const defobj = (obj,count,str) => {
        let object ={
        ...obj,
        [str]: count

    }
    return object
    }
    for (let i = 0; newLetter.length > 0; i++) {
        try {
            newLetter.match(/(\S+)/)[0];
            let str = newLetter.match(/(\S+)/)[0];
            let re = new RegExp(str, 'g');
            let count = newLetter.match(re).length;
            objContainer = defobj(objContainer,count,str)
            newLetter = newLetter.replace(re, "");
            console.log(objContainer);
            
        } catch {
            break;
        }
        
    }
    return objContainer;
}



    const regalos = listGifts(carta)

console.log(regalos)