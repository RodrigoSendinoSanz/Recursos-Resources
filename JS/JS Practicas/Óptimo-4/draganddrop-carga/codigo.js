const zona = document.querySelector('.zona-arrastre');

zona.addEventListener('dragover', e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#444");
});

zona.addEventListener('dragleave', e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
});

zona.addEventListener('drop', e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");;
    cargarArchivo(e.dataTransfer.files[0]);
});

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar =>{
    let barracarga = document.querySelector('.loading');
    console.log(ar);
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener ('progress', e=>{
        let carga = Math.round((e.loaded /ar.size)*100);
        console.log(carga);
        document.querySelector('.textocarga').textContent = `${carga}%`;
        barracarga.style.width = `calc(${carga }% - 10px)`;
    });
    reader.addEventListener ('loadend', e=>{
        barracarga.style.background = "#888";
        document.querySelector('.textocarga').textContent = `Carga Completa`;
    });
    reader.addEventListener ('load', e=>{
        let video = new Blob ([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'});
       let url = URL.createObjectURL(video);
       let videohtml =  document.createElement('video');
       videohtml.src = url;
        document.querySelector('#resultado').appendChild(videohtml);
        videohtml.play();
    })
}