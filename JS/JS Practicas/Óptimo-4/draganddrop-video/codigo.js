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
    console.log(ar);
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener ('load', e=>{
        let video = new Blob ([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'});
       let url = URL.createObjectURL(video);
       let videohtml =  document.createElement('video');
       videohtml.src = url;
        document.querySelector('#resultado').appendChild(videohtml);
        videohtml.play();
    })
}