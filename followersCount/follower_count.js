let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
  }

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
    }

    function checkCountValue() {
        if (count % 10 === 0 && count !== 0) {
            alert("Your Instagram post gained " + count + " followers! Congratulations!");
        }
    }
    
    function reset(){
        if (count>0){
        count = 0;}
        document.getElementById(countDisplay).innerHTML=count;
        alert("The Followers count has been reset")
    }