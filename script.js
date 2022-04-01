// Hackathon problem-Nationalize API 
//I am unable to get the things what are asked  in the question but i tried 


    let getfirstname = async()=>{
   
    let first_name=document.getElementById("text").value

    await fetch(`https://api.nationalize.io/?name=${first_name}`)
    .then(response=>response.json())
    .then(response=>{console.log(response.country)})

};

getfirstname();



