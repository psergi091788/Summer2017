
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        let d 	= new Date();
        let mth = d.getMonth()+1;
        let yr 	= d.getFullYear();

        $('#month').val(mth);
        $('#year').val(yr);
        showCalendar(mth, yr);

        $('#month,#year').change(function(e) {
            showCalendar($('#month').val(), $('#year').val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
				
    let firstDayOfMonth = `${mth}/1/${yr}`;
    let d = new Date( firstDayOfMonth );
    let numberOfDaysInMonth = daysInMonth(d);
    let firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
   
    let str = '<ul>';
    str += `<li>Number of days in the month: ${numberOfDaysInMonth} </li>`;
    str += `<li>First day of the week: ${firstDayOfWeek} (${daysOfTheWeek[firstDayOfWeek]})</li>`;
    str += '</ul>';
    
   

    
   
        
            
    
    
    
 
    $('#results').html(str);
     
    
    
}


