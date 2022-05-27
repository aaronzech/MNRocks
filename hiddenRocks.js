//Rock Array
let rock = [];

// Rock Class
class Rock {

    img1 = null;
    img2 = null;
    rockLoaction ='';

}

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
    "rocks/rock12_pic1.jpg",
    "rocks/rock13_pic1.jpg",
    "rocks/rock14_pic1.jpg",
    "rocks/rock14_pic2.jpg",
    "rocks/rock15_pic1.jpg",
    "rocks/rock15_pic2.jpg",
    "rocks/rock16_pic1.jpg",
    "rocks/rock17_pic1.jpg",
    "rocks/rock17_pic2.jpg",

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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8348138729316!2d-93.2083756844517!3d45.19043997909865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0cf39fd016e1e52!2zNDXCsDExJzI1LjYiTiA5M8KwMTInMjIuMyJX!5e0!3m2!1sen!2sus!4v1652900913670!5m2!1sen!2sus",
    //Rock 13
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.7631784756545!2d-93.20961068445165!3d45.19188997909861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdcf282868d299f18!2zNDXCsDExJzMwLjgiTiA5M8KwMTInMjYuNyJX!5e0!3m2!1sen!2sus!4v1653656811981!5m2!1sen!2sus",
    //Rock 14
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.703843241708!2d-93.21020468445163!3d45.19309097909872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87e10fa2fa0cf06!2zNDXCsDExJzM1LjEiTiA5M8KwMTInMjguOSJX!5e0!3m2!1sen!2sus!4v1653656743045!5m2!1sen!2sus",
    //Rock 15
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.7373398870036!2d-93.1967326844516!3d45.19241297909856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a1c1a4eabea86bd!2zNDXCsDExJzMyLjciTiA5M8KwMTEnNDAuNCJX!5e0!3m2!1sen!2sus!4v1653657029702!5m2!1sen!2sus",
    //Rock 16
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8388155213274!2d-93.1997116844517!3d45.19035897909861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x346dccac58e5e7c3!2zNDXCsDExJzI1LjMiTiA5M8KwMTEnNTEuMSJX!5e0!3m2!1sen!2sus!4v1653657420910!5m2!1sen!2sus",
    //Rock 17
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8975057187877!2d-93.20053068445173!3d45.18917097909862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97c5d5337c9b2847!2zNDXCsDExJzIxLjAiTiA5M8KwMTEnNTQuMCJX!5e0!3m2!1sen!2sus!4v1653657954240!5m2!1sen!2sus",
]


// Grab wrapper
const wrapper = document.querySelector(".wrapper");


// Create webpage layout with Rock data
function CreateTableRow(rock){

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
    img1.src=rock.img1;
    if(rock.img2==null){
        img2.src=null;
    }else{
        img2.src=rock.img2;
    }
    iFrameMap.src=rock.rockLoaction;
    // Add HTLM Elements to the page
    wrapper.appendChild(divMap);
    divMap.appendChild(iFrameMap);
    wrapper.appendChild(divImgSpot1); 
    divImgSpot1.appendChild(img1);
    wrapper.appendChild(divImgSpot2);
    divImgSpot2.appendChild(img2);

    // Remove 2nd image if none was provided
    if(rock.img2==null){
        divImgSpot2.removeChild(img2);
    }
}



// Create inital Rock Objects and populate fields
function createRockObjects(){
    // Populate Rocks
    rock1 = new Rock();
    rock1.img1 = rockPhotos[0];
    rock1.img2 = rockPhotos[1];
    rock1.rockLoaction = rockLocations[0];
    rock.push(rock1);

    //rock 2
    rock2 = new Rock();
    rock2.img1 = rockPhotos[2];
    rock2.img2 = rockPhotos[3];
    rock2.rockLoaction = rockLocations[1];
    rock.push(rock2);
    //rock 3
    rock3 = new Rock();
    rock3.img1 = rockPhotos[4];
    rock3.rockLoaction = rockLocations[2];
    rock.push(rock3);

    //rock 4
    rock4 = new Rock();
    rock4.img1 = rockPhotos[5];
    rock4.img2 = rockPhotos[6];
    rock4.rockLoaction = rockLocations[3];
    rock.push(rock4);
    //rock 5
    rock5 = new Rock();
    rock5.img1 = rockPhotos[7];
    rock5.rockLoaction = rockLocations[4];
    rock.push(rock5);
    //rock 6
    rock6 = new Rock();
    rock6.img1 = rockPhotos[8];
    rock6.rockLoaction = rockLocations[5];
    rock.push(rock6);
    //rock 8
    rock8 = new Rock();
    rock8.img1 = rockPhotos[9];
    rock8.rockLoaction = rockLocations[6];
    rock.push(rock8);
    //rock 9
    rock9 = new Rock();
    rock9.img1 = rockPhotos[10];
    rock9.img2 = rockPhotos[11];
    rock9.rockLoaction = rockLocations[7];
    rock.push(rock9);
    //rock 10
    rock10 = new Rock();
    rock10.img1 = rockPhotos[12];
    rock10.img2 = rockPhotos[13];
    rock10.rockLoaction = rockLocations[8];
    rock.push(rock10);
    //rock 11
    rock11 = new Rock();
    rock11.img1 = rockPhotos[14];
    rock11.img2 = rockPhotos[15];
    rock11.rockLoaction = rockLocations[9];
    rock.push(rock11);
    //rock 12
    rock12 = new Rock();
    rock12.img1 = rockPhotos[16];
    rock12.rockLoaction = rockLocations[10];
    rock.push(rock12);
    //rock 13
    rock13 = new Rock();
    rock13.img1 = rockPhotos[17];
    rock13.rockLoaction = rockLocations[11];
    rock.push(rock13);
    //rock 14
    rock14 = new Rock();
    rock14.img1 = rockPhotos[18];
    rock14.img2 = rockPhotos[19];
    rock14.rockLoaction = rockLocations[12];
    rock.push(rock14);
    //rock 15
    rock15 = new Rock();
    rock15.img1 = rockPhotos[20];
    rock15.img2 = rockPhotos[21];
    rock15.rockLoaction = rockLocations[13];
    rock.push(rock15);
    //rock 16
    rock16 = new Rock();
    rock16.img1 = rockPhotos[22];
    rock16.rockLoaction = rockLocations[14];
    rock.push(rock16);
    //rock 17
    rock17 = new Rock();
    rock17.img1 = rockPhotos[23];
    rock17.img2 = rockPhotos[24];
    rock17.rockLoaction = rockLocations[15];
    rock.push(rock17);
}



function zoom(){
    var NAME = document.getElementById("imgs");


        $("#imgs").animate(
            {'width': '150px','height':'250px'},150
        );

    
}


//Main

createRockObjects()

// Populate webpage
rock.forEach(element => {
    CreateTableRow(element);
});







