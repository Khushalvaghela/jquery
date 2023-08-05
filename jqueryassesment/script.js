function storedata(v){
    var userinput = document.getElementById("get_value");
    var oldvalue = userinput.value;
    var Lvalue = oldvalue.length;
    var lastchar = oldvalue[Lvalue-1];
    var oprsymbol = ["+","-","*","/","."];
    if(oprsymbol.includes(v)){
        if(oprsymbol.includes(lastchar)){
            var removelast = oldvalue.slice(0,-1);
            userinput.value = removelast + v;
        }else{
            userinput.value = oldvalue + v;
        }
    }else{
        userinput.value = oldvalue + v;
    }
}

function calculatedata(){
    var userinput = document.getElementById("get_value");
    var oldvalue = eval(userinput.value);
    userinput.value = oldvalue;
}

function clean(){
    document.getElementById("get_value").value = "";
}
function del(){
    var userinput = document.getElementById("get_value");
    userinput.value = userinput.value.slice(0, -1);
}