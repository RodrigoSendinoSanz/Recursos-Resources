const datos = [
  {
    "_id": "61b8c273caf653f6c3f8ca88",
    "name": "Betty Deleon",
    "age": 28,
    "gender": "female",
    "company": "PANZENT",
    "email": "bettydeleon@panzent.com",
    "phone": "+1 (831) 551-2324",
    "address": "722 Halleck Street, Romeville, Puerto Rico, 3348",
    "registered": "2017-08-21T06:57:55 -02:00",
    "tags": [
      "anim",
      "proident",
      "duis",
      "exercitation",
      "esse",
      "excepteur",
      "occaecat"
    ]
  },
  {
    "_id": "3",
    "name": "Meadows Vinson",
    "age": 24,
    "gender": "male",
    "company": "HATOLOGY",
    "email": "meadowsvinson@hatology.com",
    "phone": "+1 (974) 431-3568",
    "address": "341 Johnson Street, Levant, Arizona, 7446",
    "registered": "2015-08-29T04:24:13 -02:00",
    "tags": [
      "minim",
      "quis",
      "occaecat",
      "nulla",
      "ullamco",
      "aliqua",
      "dolore"
    ]
  },
  {
    "_id": "61b8c27337aa13b5cab1ea51",
    "name": "Delia Diaz",
    "age": 22,
    "gender": "female",
    "company": "GEEKKO",
    "email": "deliadiaz@geekko.com",
    "phone": "+1 (826) 590-2200",
    "address": "107 Huron Street, Smeltertown, Marshall Islands, 9131",
    "registered": "2020-04-30T10:10:33 -02:00",
    "tags": [
      "aute",
      "cillum",
      "Lorem",
      "ad",
      "dolor",
      "velit",
      "aliquip"
    ]
  },
  {
    "_id": "2",
    "name": "Fleming Lane",
    "age": 28,
    "gender": "male",
    "company": "ENTROFLEX",
    "email": "fleminglane@entroflex.com",
    "phone": "+1 (994) 526-3119",
    "address": "169 Pleasant Place, Mathews, West Virginia, 3828",
    "registered": "2015-03-26T02:22:24 -01:00",
    "tags": [
      "sint",
      "sunt",
      "commodo",
      "non",
      "pariatur",
      "ex",
      "do"
    ]
  },
  {
    "_id": "61b8c273c2389fc39496ce87",
    "name": "Hendrix Jimenez",
    "age": 25,
    "gender": "male",
    "company": "KAGE",
    "email": "hendrixjimenez@kage.com",
    "phone": "+1 (835) 508-3269",
    "address": "156 Bayview Place, Roosevelt, Maryland, 9288",
    "registered": "2017-09-30T08:35:37 -02:00",
    "tags": [
      "anim",
      "do",
      "velit",
      "eu",
      "ea",
      "voluptate",
      "laboris"
    ]
  },
  {
    "_id": "12",
    "name": "Hewitt Cooke",
    "age": 20,
    "gender": "male",
    "company": "TALAE",
    "email": "hewittcooke@talae.com",
    "phone": "+1 (916) 574-2782",
    "address": "806 Burnett Street, Wyoming, Northern Mariana Islands, 4839",
    "registered": "2017-08-07T03:42:03 -02:00",
    "tags": [
      "qui",
      "magna",
      "amet",
      "sit",
      "anim",
      "quis",
      "sint"
    ]
  },
  {
    "_id": "32",
    "name": "Love Barry",
    "age": 30,
    "gender": "male",
    "company": "CAPSCREEN",
    "email": "lovebarry@capscreen.com",
    "phone": "+1 (866) 542-2074",
    "address": "590 Dover Street, Sanders, Virgin Islands, 1857",
    "registered": "2018-08-30T09:01:13 -02:00",
    "tags": [
      "do",
      "eu",
      "elit",
      "et",
      "ad",
      "irure",
      "laboris"
    ]
  }
];

//const getDatos = () => {
//  return datos;
//}

//console.log(getDatos());

//Simulacion de asincronia con setTimeOut

const getDatos = () => {
  return new Promise((resolve,reject) =>{
    if(datos.lenght === 0){
      reject (new Error("No existen datos"));
    }
    setTimeout(() => {
          resolve (datos);
    }, 1500);
  });
}


//getDatos()
        //.then((datos) => console.log(datos));

        //.catch(err => console.log("error");



async function fechingData(){
  try{
  const datosawait = await getDatos();
  console.log(datosawait);
  }catch(err){
    console.log(err);
  }
}

fechingData();