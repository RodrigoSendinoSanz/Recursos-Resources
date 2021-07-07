const post = [{
    id: 1,
    title: 'Articulo 1',
    image: 'http://img.com/1',
    tags: ['web','hub'],
},{
    id: 2,
    title: 'Articulo 2',
    tags: ['rice','web'],
},{
    id: 3,
    title: 'Articulo 3',
    image: 'http://img.com/3',
    tags: ['seo','web'],
}]

// Buscar elementos

//Busca un elemento segun su titulo
post.find(post => post.title == 'Articulo 3');
// busca id con el valor 1
post.find(post => post.id == 1);
// Comprueba si hay algun dato en el array se muestra como true o false
post.some(post => post.id === 4);
post.some(post => post.id === 1);
// inculde nos permite compribar si existe dentro de un array cierta palabra
post.some(post => post.tags.includes("seo"))
post.some(post => post.tags.includes("nice"))
// every comprueba si la busqueda se cumple en todas las partes del array
post.every(post => post.tags.includes("web"))
//metodo map lista un array con la busqueda que elijas en este caso title
post.map(post => post.title)
// filtrar arrays filtro de busqueda
post.filter(post => post.tags.includes("seo"))
post.filter(post => post?.image !== undefined)
post.filter(post => post?.image == undefined)

// crear un array que incluya todas las etiquetas que estamos utilizando
post.reduce((allTags, post)=>{
  return [...allTags,...post.tags];
},[])
// para no duplicar objetos de busqueda
post.reduce((allTags, post)=>{
  return Array.from(new Set([...allTags,...post.tags]));
},[])
// o tambien podemos hacer
post.reduce((allTags, post)=>{
  return [...allTags,...post.tags];
},[]).filter((post, index, self)=> index === self.indexOf(post))