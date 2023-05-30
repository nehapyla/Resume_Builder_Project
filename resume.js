// print
function printResume(){
    window.print();
}

// OUTPUT
const body=document.getElementById("bodyy");

const resumeURL="https://students.codex.today/getUsers"
const token=localStorage.getItem("token");

window.onload= () =>{
    const token=localStorage.getItem("token");
    if(!token)
    {
        window.location.assign("/resume.html")
    }
    fetchData()
}

const fetchData = async()=> {
    const res = await fetch(resumeURL,{
        method : "GET",
        headers : {
            "Content-type" : "application/json",
            Authorization: "Bearer " + token
        }
    })
    const data=await res.json();
    const useremail = localStorage.getItem("email");
    const dt=data.forEach((e)=>{
        if(e.email == useremail){
           renderHtml(e)
        }
    })
    console.log(data)
}

const renderHtml = (data) => {
    bodyText=
`<section>
        <div class="left">
            <div class="profileImg"><img class="imgg" src="${data.photo}"></div>
    
            <div class="box">
                <div class="heading">
                    <p>CONTACT</p>
                </div>
                <p class="p1"><span>Phone: +91 </span>${data.phone}</p>
                <p class="p1"><span>Email: </span>${data.email}</p>
                <p class="p1"><span>GitHub: </span>${data.links}</p>
                <p class="p1"><span>Address: </span>${data.address}</p>
            </div>
    
            <div class="box">
                <div class="heading">
                    <p>PROFESSIONAL SKILLS</p>
                </div>
    
                <p class="p1">${data.pskill1} </p>
    
                <p class="p1">${data.pskill2} </p>
    
                <p class="p1">${data.pskill3} </p>

                <p class="p1">${data.pskill4} </p>
            </div>
            <br>
    
            <div class="box">
                <div class="heading">
                    <p>INTERPERSONAL SKILLS</p>
                </div>
    
                <p class="p1">${data.iskill1}</p>
    
                <p class="p1">${data.iskill2}</p>

                <p class="p1">${data.iskill3}</p>

                <p class="p1">${data.iskill4}</p>
    
            </div>
    
        </div>
    
    
        <div class="right">
            <div class="nameDiv">
                <h1>${data.firstname}</h1>
                <h1>${data.lastname}</h1>
            </div>
    
            <div class="box2">
                <h2>OBJECTIVE </h2>
                <p class="p2">${data.objective}</p>
            </div>
    
    
    
            <div class="box2">
                <h2>EDUCATION </h2>
                <p class="p3"> ${data.startdt} - ${data.enddt} <span>${data.grad}</span></p>
                <p class="p2">
                ${data.college}  
                </p>
    
                <p class="p3"> ${data.instartdt} - ${data.inenddt} <span>${data.inter}</span></p>
                <p class="p2">
                ${data.clgname}  
                </p>
    
                <p class="p3"> ${data.scstartdt} - ${data.scenddt} <span>${data.school}</span></p>
                <p class="p2">
                ${data.schlnm}  
                </p>
            </div>
    
    
            <div class="box2">
                <h2>PROJECTS</h2>
                <p class="p2">${data.proj1} </p>
                <p class="p2">${data.proj2}</p>
                <p class="p2">${data.proj3}</p>
                <p class="p2">${data.proj4}</p>
            </div>
    
        </div>
    </section>


    <div>
        <button type="button" onclick="printResume()">Print Resume</button>
    </div>`
    body.innerHTML=bodyText;
}