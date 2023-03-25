// select form and its elements
const form = document.getElementById("details_form");
const namein = document.getElementById("holder_name");
const nameerr = document.getElementById("name_error");
const cardnum = document.getElementById("card_no");
const numbererr = document.getElementById("number_error");
const el_month = document.getElementById("month");
const montherr = document.getElementById("montherr");
const el_year = document.getElementById("year");
const yearerr = document.getElementById("yearerr");
const el_cvc = document.getElementById("cvc");
const cvcerr = document.getElementById("cvcerr");

// add and remove error message

const add_err = (input_el,errmsg_el,txt)=>{
    input_el.classList.add("error_el");
    errmsg_el.textContent = txt;
    errmsg_el.classList.add("msgerr");
}

const remove_err = (input_el,errmsg_el)=>{
    input_el.classList.remove("error_el");
    errmsg_el.textContent="";
    errmsg_el.classList.remove("msgerr");
}


const validateCardNo = (event)=>{
    const cardNumber = event.target.value;
    // validate card number
    if(isNaN(cardNumber)){
        add_err(cardnum,numbererr,"Wrong format, numbers only");
    }
    else if(cardNumber.length < 16 || cardNumber.length > 16){
        add_err(cardnum,numbererr,"Invalid card number");
    }
    else{
        remove_err(cardnum,numbererr)
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // get form data
    const data = new FormData(form);
    const name = data.get("name");
    const cardno = data.get("cardno");
    const month = data.get("month");
    const year = data.get("year");
    const cvc = data.get("cvc");
    let isvalid = true;

    // check card holder name is empty.
    if(!name){ 
        add_err(namein,nameerr,"Please fill your name");
        isvalid=false;
    }

    // check cardnumber is empty
    if(!cardno){ 
        add_err(cardnum,numbererr,"Card number can't be empty");
        isvalid=false;
    }
    else if(isNaN(cardNumber)){
        add_err(cardnum,numbererr,"Wrong format, numbers only");
        isvalid=false;
    }
    else if(cardNumber.length < 16 || cardNumber.length > 16){
        add_err(cardnum,numbererr,"Invalid card number");
        isvalid=false;
    }

    // check month is empty and valid
    if(!month){
        add_err(el_month,montherr,"Can't be blank");
        isvalid=false;
    }
    else if(isNaN(month)){
        add_err(el_month,montherr,"Invalid");
        isvalid=false;
    }

    // check year is empty and valid
    if(!year){
        add_err(el_year,yearerr,"Can't be blank");
        isvalid=false;
    }
    else if(isNaN(year)){
        add_err(el_year,yearerr,"Invalid");
        isvalid=false;
    }

    // chech cvc is empty and valid
    if(!cvc){
        add_err(el_cvc,cvcerr,"Can't be blank");
        isvalid=false;
    }
    else if(cvc.length < 3 || cvc.length > 3){
        add_err(el_cvc,cvcerr,"Invalid cvc")
        isvalid=false;
    }

    // send data to db if form is valid
    if(isvalid){
        console.log("form is valid");
        console.log(data);
    }


})