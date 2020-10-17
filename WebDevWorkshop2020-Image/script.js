let category = "Mountain";

function clicker(headingText) {
    // document.querySelectorAll("aside > a").forEach(function(el)
    // {
    //     el.classList.remove("selected");
    // });

    // document.querySelector(`aside > a.${headingText.toLowerCase()}`).classList.add("selected")

    // let heading = document.querySelector('#newsList > h2');
    // heading.innerText = headingText + " Stories";

    category = headingText.toLowerCase();
    fetcher();
}

async function fetcher()
{
    document.querySelector("#topStoriesContainer").innerHTML = "";
    
    const resp = await fetch(`https://api.unsplash.com/search/photos/?client_id=yBXLRxruNrugDZ803AeGq_FT-8gacoH6n7oSoGtLnkA&query=${category}`);
    const ids = await resp.json();
    //JSON = JavaScript Object Notation
    //const itemsArray = [];

    let items = ids.results.slice(0, 10);
    console.log(items);

    for(let i = 0 ; i < items.length ; i++)
    {
        // const itemData = await fetch(`https://api.unsplash.com/photos/${items[i].id}?client_id=yBXLRxruNrugDZ803AeGq_FT-8gacoH6n7oSoGtLnkA`);
        // //const itemData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${items[i]}.json`);
        // const resp = await itemData.json();
        //itemsArray.push(resp);

        const inserter = 
        `<img class="news-item" src="${items[i].urls.full}" alt="${items[i].alt_description}">` +
            `<h3 class="news-title">${items[i].user.name}</h3>` +
            `<p class="news-byline">${items[i].user.location}</p>`;

        console.log(inserter)

        document.querySelector("#topStoriesContainer").insertAdjacentHTML("beforeend", inserter);
    }
}

function main()
{
    console.log("Hey");
}

fetcher();
main();

function mountainClicked(){
    clicker("Moutain");
}

function musicClicked(){
    clicker("Music");
}

function sportsClicked(){
    clicker("Sports");
}


// useTimeout and useInterval
// blocking and non-blocking