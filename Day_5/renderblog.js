let dataproject =[];

function inputblog(event) {
event.preventDefault();

let projectname = document.getElementById("projectname").value;
let startdate = new Date(document.getElementById("startdate").value);
let enddate = new Date(document.getElementById("enddate").value);
let description = document.getElementById("description").value;
let nodejs = document.getElementById("nodejs").checked;
let reactjs = document.getElementById("reactjs").checked;
let nextjs = document.getElementById("nextjs").checked;
let typescript = document.getElementById("typescript").checked;
let uploadimage =document.getElementById("uploadimage").files;


if (projectname == "") {
    alert("nama project tidak boleh kosong")
} else if (startdate =""){
    alert("start date harus diisi")
} else if (enddate ==""){
        alert("end date tidak boleh kosong")
} else if (description == ""){
    alert("description tidak boleh kosong")
} else if (nodejs == "" && reactjs == "" && nextjs == "" && typescript == ""){ 
    alert("silahkan pilih salah satu technologies")
} else if (uploadimage == "") {
    alert("silahkan masukkan gambar")
}else{
    alert("postingan anda sudah dibuat")
}

inputimage = URL.createObjectURL(uploadimage[0]);

const renderblog = {
    title: projectname,
    body: description,
    nodejs,
    reactjs,
    image: inputimage,
    typescript,
    postAt: new Date(),
    startdate,
    enddate,
};
dataproject.push(renderblog);
console.log("dataArray:", dataproject);
renderProject();
}


function timeinfo(time) {
    const thistime = new Date().getTime();
    const timeposted= time
  
    const distance = thistime - timeposted;
  
    const distanceSeconds = Math.floor(distance / 1000);
    const distanceMinutes = Math.floor(distance / 1000 / 60); 
    const distanceHours = Math.floor(distance / 1000 / 60 / 60);
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24);
    const distanceMounth = Math.floor(distance / 1000 / 60 / 60 / 24 / 30);
  
    console.log(distanceSeconds);
    console.log(distanceMinutes);
    console.log(distanceHours);
    console.log(distanceDay);
    console.log(distanceMounth);
  
    if (distanceMounth>0) {
      return `${distanceMounth} Mounth Ago`;
      }else if (distanceDay > 0) {
        return `${distanceDay} Day Ago`;
      } else if (distanceHours > 0) {
        return `${distanceHours} Hours Ago`;
      } else if (distanceMinutes > 0) {
        return `${distanceMinutes} Minutes Ago`;
      } else if (distanceSeconds > 0) {
        return `${distanceSeconds} Seconds Ago`;
      }
  }

  function duration(tanggal) {
  
    const date = tanggal.getDate(startdate);
    const date2 = tanggal.getDate(enddate);
    const month = tanggal.getMonth(startdate);
    const month2 = tanggal.getMonth(enddate);
    const year = tanggal.getFullYear(startdate);
    const year2 = tanggal.getFullYear(enddate);

    let dateDuration = date2-date  
    let monthDuration = month2-month  
    let yearDuration = year2-year 
    
    
    return `${dateDuration} ${monthDuration} ${yearDuration}`;
  }
  
function renderProject() {
    document.getElementById("content").innerHTML = "";
    for (let index = 0; index < dataproject.length; index++) {
      document.getElementById("content").innerHTML += `
              <div class="borderpost">
                  <div class="blog-image">
                      <img src="${dataproject[index].image}" alt="image upload" class ="jack" />
                  </div>
                  <div class="blog-content">
                          <a href="blog-detail.html" target="_black" class="gambarblog">${
                            dataproject[index].title}</a>
                          <div class="infopost">
                      <div class = "indeksblog">
                            <p>
                                Durasi: ${duration(dataproject[index].enddate)}
                            </p>
                      </div>
                      <div class = "infotime">
                            <p>
                                Dipost : ${timeinfo(dataproject[index].postAt)}
                            </p>
                      </div>
                          <div>
                      <div class ="isi">
                      <p>
                          ${dataproject[index].body}
                      </p>
                      </div>
                      <div class="detail-blog">
                      ${dataproject[index].nodejs == "true"? '<i class="fa-brands fa-google-play" style= "font-size: 1.2em;"></i>': ""}
                      ${dataproject[index].reactjs == "true"? '<i class="fa-brands fa-android" style= "font-size: 1.2em;"></i>' : ""}
                      ${dataproject[index].nextjs == "true"?   '<i class="fa-brands fa-js" style= "font-size: 1.2em;"></i>' : ""}
                      ${dataproject[index].typescript == "true" ?  '<i class="fa-brands fa-apple" style= "font-size: 1.2em;"></i>' : ""}
                      </div>
                      <div class="btn-group">
                          <button class="btnedit"> Edit Blog </button>
                          <button class="btnpost"> Post Blog </button>
                      </div>
                  </div>
              </div>
          `;
    }
  }
  setInterval(function () {
    renderProject();
  }, 1000);


