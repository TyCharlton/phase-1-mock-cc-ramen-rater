// fetch("http://localhost:3000/ramens")
//     .then((resp) => resp.json())
//     .then((data) => renderRamens(data))

// function renderRamens(ramenArr) {
//     // console.log(ramenArr)

//     const ramenMenu = document.querySelector('#ramen-menu')

//     // console.log(ramenMenu)

//     ramenArr.forEach((ramenObj) => {
//         // console.log(ramenObj)

//         const img = document.createElement('img')
//         img.src = ramenObj.image

//         ramenMenu.appendChild(img)

//         img.addEventListener('click', (e) => handleClick(e))

//         function handleClick(e) {
//             console.log(ramenObj)

//             const nameLocation = document.querySelector('.name')
//             const imgLocation = document.querySelector('.detail-image')
//             const restLocation = document.querySelector('.restaurant')
//             const ratingLocation = document.querySelector('#rating-display')
//             const commentLocation = document.querySelector('#comment-display')

//             nameLocation.innerText = ramenObj.name
//             imgLocation.src = ramenObj.image
//             restLocation.textContent = ramenObj.restaurant
//             ratingLocation.innerText = ramenObj.rating
//             commentLocation.textContent = ramenObj.comment
//         }
//     })
// }

// const form = document.querySelector('#new-ramen')

// form.addEventListener('submit', (e) => handleAddNewRamen(e))

// function handleAddNewRamen(e) {
//     e.preventDefault()

//     const newRamenObj = {
//         name : e.target.name.value,
//         restaurant : e.target.restaurant.value,
//         image : e.target.image.value,
//         rating : e.target.rating.value,
//         comment : e.target['new-comment'].value
//     }

//     // console.log(newRamenObj)

//     renderRamens([newRamenObj])

//     e.target.reset() // clears form after submission
// }


fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((data) => renderRamens(data))


function renderRamens(ramenArr) {
    // console.log(ramenArr)

    const div = document.querySelector("#ramen-menu")
    // console.log(div)
    const imgTag = document.querySelector(".detail-image")
    const imgName = document.querySelector(".name")
    const imgRest = document.querySelector(".restaurant")
    const imgRating = document.querySelector("#rating-display")
    const imgComment = document.querySelector("#comment-display")

    // console.log(imgTag, imgName, imgRest, imgRating, imgComment)



    ramenArr.forEach((ramObj) => {
        const img = document.createElement("img")
        // console.log(img)
        const imgURL = ramObj.image
        // console.log(imgURL)
        img.src = imgURL
        // console.log(img)
        div.appendChild(img)

        img.addEventListener('click', function (e) {

            const ramName = ramObj.name
            const ramRest = ramObj.restaurant
            const ramRate = ramObj.rating
            const ramCom = ramObj.comment
            // console.log(ramName, ramRest, ramRate, ramCom)

            imgTag.src = imgURL
            imgName.textContent = ramName
            imgRest.textContent = ramRest
            imgRating.textContent = ramRate
            imgComment.textContent = ramCom
            // console.log(imgName, )


        })

    });
        const newRamenForm = document.querySelector("#new-ramen")

        newRamenForm.addEventListener('submit', (e) => {
            e.preventDefault()
        const newRamenName = document.querySelector("#new-name")
        const newRamenRestaurant = document.querySelector("#new-restaurant")
        const newRamenImg = document.querySelector("#new-image")
        const newRamenRating = document.querySelector("#new-rating")
        const newRamenComment = document.querySelector("#new-comment")

       

        const newRamenObj = { 
            name: e.target[0].value, 
            restaurant: e.target[1].value,
            image: e.target[2].value,
            rating: e.target[3].value,
            comment: e.target[4].value,
            }

        // console.log(newRamenObj)
            
        fetch("http://localhost:3000/ramens" , {
            method : 'POST' ,
            headers : {
               "content-type" : "application/json" ,
            } ,
            body : JSON.stringify(newRamenObj)
         })
            .then((resp) => resp.json())
            .then((data) => renderRamens([data]))

            
     })




        


















}





