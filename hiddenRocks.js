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
    "rocks/rock1_pic1.jpg",
    "rocks/rock1_pic2.jpg",
    "rocks/rock2_pic1.jpg",
    "rocks/rock2_pic2.jpg",
    "rocks/rock3_pic1.jpg",
    "rocks/rock4_pic1.jpg",
    "rocks/rock4_pic2.jpg",
    "rocks/rock5_pic1.jpg",
    "rocks/rock6_pic1.jpg",
    "rocks/rock8_pic1.jpg",
    "rocks/rock9_pic1.jpg", 
    "rocks/rock9_pic2.jpg",
    "rocks/rock10_pic1.jpg", 
    "rocks/rock10_pic2.jpg",
    "rocks/rock11_pic1.jpg", 
    "rocks/rock11_pic2.jpg",
    "rocks/rock12_pic1.jpg"  
]

// Map array
rockLocations = [
    //Rock 1
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.0280722509005!2d-93.20455868445183!3d45.18652797909864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x265590a712eb0ce9!2zNDXCsDExJzExLjUiTiA5M8KwMTInMDguNSJX!5e0!3m2!1sen!2sus!4v1652899547601!5m2!1sen!2sus", 
    //Rock 2
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.967655715545!2d-93.20889968445178!3d45.18775097909865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc53d3891f2e5259e!2zNDXCsDExJzE1LjkiTiA5M8KwMTInMjQuMiJX!5e0!3m2!1sen!2sus!4v1652899914288!5m2!1sen!2sus",
    //Rock 3
    "https://www.openstreetmap.org/export/embed.html?bbox=-93.20763498544694%2C45.185052220817404%2C-93.20315569639207%2C45.18671959331282&amp;layer=mapnik&amp;marker=45.1858859131699%2C-93.2053953409195",
    //Rock 4
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.0501044543835!2d-93.20713468445184!3d45.18608197909868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x700eafd3989f37bb!2zNDXCsDExJzA5LjkiTiA5M8KwMTInMTcuOCJX!5e0!3m2!1sen!2sus!4v1652899797899!5m2!1sen!2sus",
    //Rock 5
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8409398509057!2d-93.20594068445169!3d45.19031597909864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95f6d861bc27719a!2zNDXCsDExJzI1LjEiTiA5M8KwMTInMTMuNSJX!5e0!3m2!1sen!2sus!4v1653576558389!5m2!1sen!2sus",
    //Rock 6
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.841433880813!2d-93.2059986844517!3d45.19030597909866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68dfd58b0a4d1eb!2zNDXCsDExJzI1LjEiTiA5M8KwMTInMTMuNyJX!5e0!3m2!1sen!2sus!4v1653576376950!5m2!1sen!2sus",
    //Rock 8
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.787979348029!2d-93.20911568445166!3d45.191387979098785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee3c449ce038b408!2zNDXCsDExJzI5LjAiTiA5M8KwMTInMjQuOSJX!5e0!3m2!1sen!2sus!4v1652900484781!5m2!1sen!2sus",
    //Rock 9
    "https://www.openstreetmap.org/export/embed.html?bbox=-93.20471405982973%2C45.189144947063426%2C-93.18679690361023%2C45.19581366449229&amp;layer=mapnik&amp;marker=45.19247940345435%2C-93.19575548171997",
    //Rock 10
    "https://www.openstreetmap.org/export/embed.html?bbox=-93.19742918014528%2C45.19113732715031%2C-93.19541752338411%2C45.19227903914262&amp;layer=mapnik&amp;marker=45.19170815722522%2C-93.19642322009946",
    //Rock 11
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.948488141443!2d-93.18941368445178!3d45.188138979098646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6b990e560499276!2zNDXCsDExJzE3LjMiTiA5M8KwMTEnMTQuMCJX!5e0!3m2!1sen!2sus!4v1652899400380!5m2!1sen!2sus",
    //Rock 12
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8348138729316!2d-93.2083756844517!3d45.19043997909865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0cf39fd016e1e52!2zNDXCsDExJzI1LjYiTiA5M8KwMTInMjIuMyJX!5e0!3m2!1sen!2sus!4v1652900913670!5m2!1sen!2sus"
    
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
CreateTableRow(0,1,0) // Rock 1
CreateTableRow(2,3,1) // Rock 2
CreateTableRow(4,null,2) // Rock 3
CreateTableRow(5,6,3) // Rock 4
CreateTableRow(7,null,4) // Rock 5
CreateTableRow(8,null,5);// Rock 6
CreateTableRow(9,null,6);// Rock 8
CreateTableRow(10,11,7);// Rock 9
CreateTableRow(12,13,8); // Rock 10
CreateTableRow(14,15,9); // Rock 11
CreateTableRow(16,null,10); // Rock 12









