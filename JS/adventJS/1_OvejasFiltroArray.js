/*Considera una lista/array de ovejas.
 Cada oveja tiene un nombre y un color. 
 Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
 y que además su nombre contenga tanto las letras n Y a,
 sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
 */

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  
  function contarOvejas(ovejas) {
    // aquí tu magia
    let approved = ovejas.filter(ovejas => ovejas.color === 'rojo'
     && ovejas.name.includes("N") && ovejas.name.includes("a"));
  
    return approved;
  }
  
  
  
  const ovejasFiltradas = contarOvejas(ovejas)
  
  
  
  console.log(ovejasFiltradas)
  
  
  
  const ovejas2 = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  
  function contarOvejas2(ovejas2) {
    return ovejas.filter(oveja =>{
      if(/na/i.test(oveja.name)&& /rojo/.test(oveja.color)
      ){
        return oveja
      }
    })
  }
  
  
  
  const ovejasFiltradas2 = contarOvejas2(ovejas2)
  
  
  
  console.log(ovejasFiltradas2)