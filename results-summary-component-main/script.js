// select html elements to be update
const items = document.querySelectorAll(".summary_items");

// get data from json file
fetch("./data.json")
.then(response => response.json())
.then(data =>{
    items.forEach((item,index)=>{
        const img = item.querySelector("img");
        const category = item.querySelector("p");
        const score = item.querySelector(".actual_score");
        img.src = data[index].icon;
        category.innerHTML = data[index].category;
        score.innerHTML = data[index].score;
    });
})
.catch(error=> console.error(error));
