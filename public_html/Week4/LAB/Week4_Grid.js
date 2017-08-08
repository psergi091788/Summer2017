

let input = window.document.querySelector('#num');

let button = window.document.querySelector('#btnGenerate');

let div = window.document.querySelector('#wrapper');




function randomGrid() {

    // take div and get the inner html to equal the input value, poutside function have event listener 
    var result = input.value;
    div.innerHTML = result;
    result = parseInt(result);

    var items = [];
    var str = " ";
  

    str += '<table border="1">';

    for (let rows = 0; rows < result; rows++)
    {
        items[rows] = [];
        str += '<tr>';


        for (let col = 0; col < result; col++)
        {
            items[rows][col] = randomNumber(1, 100);
            
            
          
            if(items[rows][col] % 2 === 0  )
            {
                
                 str += '<td class="red">' + items[rows][col] + '</td>';
            }
            else if(items[rows][col] % 3 === 0 )
            {
                
                 str += '<td class="blue">' + items[rows][col] + '</td>';
            }
            
            else
            {
                 str += '<td>' + items[rows][col] + '</td>';
            }
            
        }

        str += '</tr>'; 

        

    } /* END OUTTER FOR LOOP  */
    str += '</table>';
    div.innerHTML = str;
    
     

}

button.addEventListener('click', randomGrid);

function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}