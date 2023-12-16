function pageLoad(){
    content = document.querySelector("#content")
    tabName = ["1","2","3"]
    tabTitles = ["Pellentesque", "nec", "ipsum"]
    tabImages = ["https://placehold.co/256x256.png", "https://placehold.co/256x256.png", "https://placehold.co/256x256.png"]
    tabRecipes = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue mauris ac urna commodo dapibus. In sit amet leo eleifend, tempor nisl ac, scelerisque neque. Fusce id lorem sed nisi tempus condimentum ac in leo. Aenean eget mauris vitae velit blandit lobortis eu nec tortor.", "Curabitur faucibus magna quis neque interdum sagittis. Sed a dui dignissim, finibus sem quis, dapibus ligula. Etiam sit amet neque bibendum, rhoncus metus eget, consequat mi. Integer ullamcorper dolor sit amet felis efficitur interdum. Ut in massa consectetur, bibendum mi sit amet, convallis nulla. Proin ut massa consequat, bibendum sem a, aliquam turpis.", "Mauris consectetur lacus vel tincidunt porta. Fusce tincidunt est non magna ornare porttitor. Aliquam ut sem et massa convallis feugiat et quis elit. Maecenas aliquam mauris quis eros egestas pellentesque."]
    pageButtons = document.createElement("div")
    pageButtons.id = "pageButtons"
    tabPages = document.createElement("div")
    tabPages.id = "tabPages"


    for (let index = 0; index < tabName.length; index++) {
        var tabBtn = document.createElement("button")
        tabBtn.innerHTML = tabName[index]
        pageButtons.append(tabBtn)

        var tabTitle = document.createElement("p")
        tabTitle.innerHTML = tabTitles[index]
        tabTitle.id = tabName[index]
        tabPages.append(tabTitle)

        var tabImage = document.createElement("img")
        tabImage.innerHTML = tabTitles[index]
        tabImage.id = tabName[index]
        tabImage.src = tabImages[index]
        tabPages.append(tabImage)

        var tabRecipe = document.createElement("p")
        tabRecipe.innerHTML = tabRecipes[index]
        tabRecipe.id = tabName[index]
        tabPages.append(tabRecipe)
        
        console.log(tabImage)
    }
    content.append(pageButtons)
    content.append(tabPages)
}
pageLoad()