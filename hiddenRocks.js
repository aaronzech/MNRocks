// Create HTML element 

/*
		<div class="mapSpot">
			<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.948488141443!2d-93.18941368445178!3d45.188138979098646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6b990e560499276!2zNDXCsDExJzE3LjMiTiA5M8KwMTEnMTQuMCJX!5e0!3m2!1sen!2sus!4v1652899400380!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.948488141443!2d-93.18941368445178!3d45.188138979098646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6b990e560499276!2zNDXCsDExJzE3LjMiTiA5M8KwMTEnMTQuMCJX!5e0!3m2!1sen!2sus!4v1652899400380!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
		<div class="imgSpot1">
			<img src="rocks/rock11_pic1.jpg" width="625" height ="550">
		</div>
		<div class="imgSpot2">
			<img src="rocks/rock11_pic2.jpg" width="625" height ="550">
		</div>
*/

//Photo Array
rockPhotos = [

    "rocks/rock10_pic1.jpg",
    "rocks/rock10_pic2.jpg",
    "rocks/rock11_pic1.jpg",
    "rocks/rock11_pic2.jpg",
    "rocks/rock12_pic1.jpg"
]

// Map array
rockLocations = [

    //Rock 10
    "https://www.openstreetmap.org/export/embed.html?bbox=-93.19742918014528%2C45.19113732715031%2C-93.19541752338411%2C45.19227903914262&amp;layer=mapnik&amp;marker=45.19170815722522%2C-93.19642322009946",
    //Rock 11
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.948488141443!2d-93.18941368445178!3d45.188138979098646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6b990e560499276!2zNDXCsDExJzE3LjMiTiA5M8KwMTEnMTQuMCJX!5e0!3m2!1sen!2sus!4v1652899400380!5m2!1sen!2sus",
    //Rock 12
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8348138729316!2d-93.2083756844517!3d45.19043997909865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0cf39fd016e1e52!2zNDXCsDExJzI1LjYiTiA5M8KwMTInMjIuMyJX!5e0!3m2!1sen!2sus!4v1652900913670!5m2!1sen!2sus",
    ""
]


// Grab wrapper
const wrapper = document.querySelector(".wrapper");

function CreateTableRow(img1Src,img2Src,rockLoactionIndex){

    //Create HTML Elements
    const divMap = document.createElement('div');
    const iFrameMap = document.createElement('iframe');
    const divImgSpot1 = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const divImgSpot2 = document.createElement('div');
    // Add Class names to elements
    divImgSpot1.classList.add("imgSpot1");
    img1.className="imgSpot";
    img2.className="imgSpot";
    divMap.classList.add("mapSpot");
    iFrameMap.classList.add("map");
    divImgSpot2.classList.add("imgSpot2");
    // Set Sources
    img1.src=rockPhotos[img1Src];
    if(img2Src==null){
        img2.src=null;
    }else{
        img2.src=rockPhotos[img2Src]
    }
    iFrameMap.src=rockLocations[rockLoactionIndex];
    // Add HTLM Elements to the page
    wrapper.appendChild(divMap);
    divMap.appendChild(iFrameMap);
    wrapper.appendChild(divImgSpot1); 
    divImgSpot1.appendChild(img1);
    wrapper.appendChild(divImgSpot2);
    divImgSpot2.appendChild(img2);

    // Remove 2nd image if none was provided
    if(img2Src==null){
        divImgSpot2.removeChild(img2);
    }
}

// Populate webpage
CreateTableRow(0,1,0);
CreateTableRow(2,3,1);
CreateTableRow(4,null,2);




