console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
    // Add event listener to the breed list to change font color on click
    document.getElementById('dog-breeds').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change font color to blue (you can choose any color)
    }
});
    
document.getElementById('breed-dropdown').addEventListener('change', function(event) {
    const selectedLetter = event.target.value;
    const breedList = document.getElementById('dog-breeds');
    const breeds = breedList.getElementsByTagName('li');
    for (const breed of breeds) {
        if (breed.textContent.charAt(0) === selectedLetter) {
            breed.style.display = 'list-item'; // Show the breed if its name starts with the selected letter
        } else {
            breed.style.display = 'none'; // Hide the breed otherwise
        }
    }
});

})
    function fetchImages() {
        
    
        fetch(imgUrl)
            .then(res=>res.json())
            .then(data => {
                const imageUrls= data.message

                const container = document.getElementById('dog-image-container')
                imageUrls.forEach(url => {
                   const img= document.createElement('img')
                    img.src=url
                    container.appendChild(img)
                });
            })
        .catch(error=>{
            console.error('error fetching images:', error)
        })
    }


   function fetchBreeds() {

    fetch(breedUrl)
   .then(res=>res.json())
   .then(data=> {
        
        const breedList= document.getElementById('dog-breeds')
        for (const breed in data.message) {
        
            const listItem= document.createElement('li')
            listItem.textContent=breed
            breedList.appendChild(listItem)
        }
   })
   .catch(error => {
    // Handle errors
    console.error('Error fetching dog breeds:', error);
})
}
