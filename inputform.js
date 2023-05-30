// // STRUCTURE --------------------------------------------------------------------------------------
const body = document.getElementById("bodyy");

const bodyText =
    `<section class="sectionn">
<form action="" id="resumeinputs">
    <section class="sectionforms">
        <div class="perinfo">
            <h1>Personal Information</h1>
    
            <div class="inpp">
                <div>
                    <p>Firstname:</p>
                    <input type="text" required name="firstname" placeholder="Enter Firstname" id="">
                </div>

                <div>
                    <p>Lastname:</p>
                    <input type="text" required name="lastname" placeholder="Enter Lastname" id="">
                </div>
            </div>

            <div class="inpp">
                <div>
                    <p>E-mail id:</p>
                    <input type="text" required name="email" id="" placeholder="Enter your mail id">
                </div>

                <div>
                    <p>Password:</p>
                    <input type="password" required name="password" id="" placeholder="Create a password">
                </div>
            </div>

            <div class="inpp">
                <div>
                    <p>Phone number:</p>
                    <input type="text" required name="phone" id="" placeholder="Enter your contact number">
                </div>

                <div>
                    <p>GitHub:</p>
                    <input type="text" name="links" id="" placeholder="github link">
                </div>
            </div>

            <div>
                <p>Photo:</p>
                <input type="file" id="pphoto" name="photo">
            </div>

            <div>
                <p>Address:</p>
                <textarea required name="address" id="" cols="65" rows="5" placeholder="write your address here"></textarea>
            </div>

            <div>
                <p>Objective:</p>
                <textarea required name="objective" id="" cols="65" rows="8" placeholder="Your summary shows employers you're right for their job."></textarea>
            </div>
        </div>

        <div class="profinfo">
            <h1>Professional Information</h1>

            <p>Education:</p>

            <div class="inpp">
                <div>
                    <h5>College:</h5>
                    <input type="text" name="grad" placeholder="Name of College">
                    <input type="text" name="college" id="" placeholder="Enter your Stream">
                    <input type="date" name="startdt" id="">
                    <input type="date" name="enddt" id="">
                
                    <h5>Intermediate:</h5>
                    <input type="text" name="inter" placeholder="Name of +2 College">
                    <input type="text" name="clgname" id="" placeholder="Enter your Stream">
                    <input type="date" name="instartdt" id="">
                    <input type="date" name="inenddt" id="">
                
                    <h5>School:</h5>
                    <input type="text" name="school" placeholder="Name of School">
                    <input type="text" name="schlnm" id="" placeholder="Enter your Stream">
                    <input type="date" name="scstartdt" id="">
                    <input type="date" name="scenddt" id="">
                </div>
            </div>

            <p>Skills:</p>
            <div class="skills">
                <div>
                    <h5>Professional Skills:</h5>
                    <input type="text" name="pskill1" id="" placeholder="Skill 1">
                    <input type="text" name="pskill2" id="" placeholder="Skill 2">
                    <input type="text" name="pskill3" id="" placeholder="Skill 3">
                    <input type="text" name="pskill4" id="" placeholder="Skill 4">
                </div>

                <div>
                        <h5>Interpersonal Skills:</h5>
                        <input type="text" name="iskill1" id="" placeholder="Skill 1">
                        <input type="text" name="iskill2" id="" placeholder="Skill 2">
                        <input type="text" name="iskill3" id="" placeholder="Skill 3">
                        <input type="text" name="iskill4" id="" placeholder="Skill 4">
                    </div>
            </div>

            <p>Projects:</p>
            <div class="proj">
                <div>
                    <h5>Projects:</h5>
                    <input type="text" name="proj1" id="" placeholder="Project 1">
                    <input type="text" name="proj2" id="" placeholder="Project 2">
                    <input type="text" name="proj3" id="" placeholder="Project 3">
                    <input type="text" name="proj4" id="" placeholder="Project 4">
                </div>
            </div>

        </div>
    </section>
        <div>
            <button type="submit">Create my resume now</button>
        </div>
</form>
</section>`

body.innerHTML = bodyText;

// RESUME INPUTS ----------------------------------------------------------------------------------
const registerURL = "https://students.codex.today/createAccount";

const resumeData = document.getElementById("resumeinputs");

resumeData.addEventListener("submit", (event) => {
    event.preventDefault()

    const upload_preset = "ar2pkz7c";
    const cloud_name = "dgunrh6qk";


    const url = "https://api.cloudinary.com/v1_1/dgunrh6qk/image/upload";
    const formData = new FormData();

    formData.append("upload_preset",upload_preset);
    formData.append("file",resumeData.photo.files[0]);

    fetch(url, {
        method:"POST", 
        body: formData
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        const resumeFormData = {
            firstname: resumeData.firstname.value,
            lastname: resumeData.lastname.value,
            email: resumeData.email.value,
            password: resumeData.password.value,
            phone: resumeData.phone.value,
            address: resumeData.address.value,
            links: resumeData.links.value,
            photo: data.url,
            objective: resumeData.objective.value,
    
            grad: resumeData.grad.value,
            college: resumeData.college.value,
            startdt: resumeData.startdt.value,
            enddt: resumeData.enddt.value,
    
            inter: resumeData.inter.value,
            clgname: resumeData.clgname.value,
            instartdt: resumeData.instartdt.value,
            inenddt: resumeData.inenddt.value,
    
            school: resumeData.school.value,
            schlnm: resumeData.schlnm.value,
            scstartdt: resumeData.scstartdt.value,
            scenddt: resumeData.scenddt.value,
    
            pskill1: resumeData.pskill1.value,
            pskill2: resumeData.pskill2.value,
            pskill3: resumeData.pskill3.value,
            pskill4: resumeData.pskill4.value,
    
            iskill1: resumeData.iskill1.value,
            iskill2: resumeData.iskill2.value,
            iskill3: resumeData.iskill3.value,
            iskill4: resumeData.iskill4.value,
    
            proj1: resumeData.proj1.value,
            proj2: resumeData.proj2.value,
            proj3: resumeData.proj3.value,
            proj4: resumeData.proj4.value,
        };
    
        console.log(resumeData);
        fetch(registerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resumeFormData)
        })
    
            .then(res => res.json())
            .then(data => {
                const keys = Object.keys(data);
                keys.forEach((e) => localStorage.setItem(e, data[e]));
                window.location.assign("/signup.html");
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
   
})