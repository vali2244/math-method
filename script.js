function Calc(){
    const baseprice = Number(document.getElementById(`bp1`).value);
    const   gst =Number(document.getElementById(`gs1`).value);
    const addvalue= (baseprice/100)*gst;
    const newvalue =baseprice+addvalue;
 document.getElementById("myspan").innerHTML = newvalue;
}