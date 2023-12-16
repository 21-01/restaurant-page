import "./style.css";

function pageLoad(){
    const content = document.querySelector("#content")
    const tabName = ["Pellentesque","nec","ipsum"]
    const tabTitles = ["Pellentesque", "nec", "ipsum"]
    const tabImages = ["https://placehold.co/256x256.png", "https://placehold.co/256x256.png", "https://placehold.co/256x256.png"]
    const tabRecipes = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue mauris ac urna commodo dapibus. In sit amet leo eleifend, tempor nisl ac, scelerisque neque. Fusce id lorem sed nisi tempus condimentum ac in leo. Aenean eget mauris vitae velit blandit lobortis eu nec tortor.", "Curabitur faucibus magna quis neque interdum sagittis. Sed a dui dignissim, finibus sem quis, dapibus ligula. Etiam sit amet neque bibendum, rhoncus metus eget, consequat mi. Integer ullamcorper dolor sit amet felis efficitur interdum. Ut in massa consectetur, bibendum mi sit amet, convallis nulla. Proin ut massa consequat, bibendum sem a, aliquam turpis.", "Mauris consectetur lacus vel tincidunt porta. Fusce tincidunt est non magna ornare porttitor. Aliquam ut sem et massa convallis feugiat et quis elit. Maecenas aliquam mauris quis eros egestas pellentesque."]
    const pageButtons = document.createElement("div")
    pageButtons.id = "pageButtons"
    const tabPages = document.createElement("div")
    tabPages.id = "tabPages"


    for (let index = 0; index < tabName.length; index++) {
        var tabBtn = document.createElement("button")
        tabBtn.innerHTML = tabName[index]
        tabBtn.classList.add(tabName[index])
        tabBtn.addEventListener("click", (e)=>{
            console.log(e)
            var pages = document.querySelectorAll("#tabPages>*")
            pages.forEach(page => {
                if (e.target.className == page.classList[0]){
                    page.classList.remove("hidden")
                }else{
                    page.classList.add("hidden")
                }
            });
            
        })

        var tabTitle = document.createElement("p")
        tabTitle.innerHTML = tabTitles[index]
        tabTitle.classList.add(tabName[index])
        
        var tabImage = document.createElement("img")
        tabImage.innerHTML = tabTitles[index]
        tabImage.classList.add(tabName[index])
        tabImage.src = tabImages[index]
        
        var tabRecipe = document.createElement("p")
        tabRecipe.innerHTML = tabRecipes[index]
        tabRecipe.classList.add(tabName[index])
        
        if (index > 0){
            tabTitle.classList.add("hidden")
            tabImage.classList.add("hidden")
            tabRecipe.classList.add("hidden")
        }
        
        pageButtons.append(tabBtn)
        tabPages.append(tabTitle)
        tabPages.append(tabImage)
        tabPages.append(tabRecipe)
        console.log(tabImage)
    }
    content.append(pageButtons)
    content.append(tabPages)
}
pageLoad()