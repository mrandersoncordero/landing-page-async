const API='https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLCq4fv0R7-squ8GoGThFr7Oenxj70nj4g&part=snippet&maxResults=50';

const content = null||document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3376822d32msh439b9b1e1e0444dp167508jsn780684675f5b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;
}

(async()=>{try{
    const videos=await fetchData(API);
    let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,8).join('')}
    `;
    content.innerHTML=view;
}catch(error){
    console.log(error);
}
})();

const URL = 'https://api.escuelajs.co/api/v1/categories';
const articulo = null||document.getElementById('articulo');

async function dataArticulo(URL){
    const response=await fetch(URL);
    const data=await response.json();
    return data;
}

(async() => {
    try{
        const articulos = await dataArticulo(URL);
    let vista = `
    ${articulos.map(articulo => `
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${articulo.image}" alt="${articulo.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${articulo.name}
          </h3>
        </div>
      </div>
    `).slice(0,8).join('')}
    
    `;
    articulo.innerHTML=vista;
    }catch(error){
        console.log(error);
    }
    
    
})();