console.log(" ");
let submit=document.querySelector('.sub-btn')
let email=document.querySelector('#exampleInputEmail1')


submit.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(email.value);
    Email.send({
Host: "smtp.elasticemail.com",
Username : "nitish0589.be23@chitkara.edu.in",
Password : "51AB6F27F17BDECFF17689FEB4203D79DCBA",
To : `${email.value}`,
From : "nitish0589.be23@chitkara.edu.in",
Subject : "Student Survey Form",
Body : `<h1>Thanks for contacting us!!! We will reach out to you soon!!!</h1>`,
}

).then(
        
        window.location.href="Home-Page.html",
 

);

})