function ticketNumberControl(type,isIncrease){
    const  ticketInput = document.getElementById(type+"-input").value;
    const  ticketCount = parseInt(ticketInput);
    if(isIncrease == true ){
        var numberOfTicket = ticketCount +1;  
        console.log(numberOfTicket); 
        document.getElementById(type+'-input').value = numberOfTicket;  
       return numberOfTicket;
    }
    if(isIncrease == false ){
        if (ticketCount >= 0) {
        var numberOfTickets = ticketCount -1;
        document.getElementById(type+'-input').value = numberOfTickets;
        console.log(numberOfTickets);
        return numberOfTickets;
        }else{
            console.log("error");
            return 0;
        }    
    }
    const number = parseInt(numberOfTicket)+parseInt(numberOfTickets);
    console.log("total ticket",+number);
    
    var totalPrice =ticketPerClass(numberOfTicket,numberOfTickets);
    //console.log(totalPrice);
    totalCalculation(totalPrice);
    document.getElementById('sub-total').innerText ='$'+totalPrice;
}
    function totalCalculation(sumOfTicket){
        const  vatCalculation= sumOfTicket*0.1;
        document.getElementById('vat').innerText ='$'+vatCalculation;
        const  grandTotal = vatCalculation + sumOfTicket;
        document.getElementById('grand-total').innerText ='$'+grandTotal;
    }
    function ticketPerClass(ticketsBusiness,ticketEconomy){
        var businessTicketPrice = ticketsBusiness *150;
        var economyTicketPrice = ticketEconomy *100;
        var totalPrice = businessTicketPrice + economyTicketPrice;
         console.log(totalPrice);
    }