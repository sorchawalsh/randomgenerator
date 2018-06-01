function ttt(){
//generate the tic tac toe table
        for (i=1 ; i<10 ; i++){
            document.getElementById("message")
            let div=document.createElement("div");
            div.id=`b${i}`;
            message.appendChild(div);
         //   div.innerHTML="";
    
            if (i%3==0){
                let br=document.createElement("br");
                message.appendChild(br);
        }
        
        }
        count=0;
        xwincount=0;
        owincount=0;
        console.log(count);
        //function to change a blank square into an X or an O depending on whose turn it is
        function enter(){
            document.getElementById("this")
            if (count%2!==0){
                this.innerHTML="O";
                show.innerHTML="X plays";
                count++;
                this.obj=this.innerHTML
                
            }
            else{
                this.innerHTML="X";
                show.innerHTML="O plays"
                count++;
                this.obj=this.innerHTML;
            }
            if (b1.obj!=="" && b2.obj!=="" && b3.obj!==""){
        if (b1.obj===b2.obj && b2.obj===b3.obj){
            if (b1.obj==="X"){
            xwin();
            }
            if (b1.obj==="O"){
                owin();
            }    
            }   
            } 
            if (b4.obj!=="" && b5.obj!=="" && b6.obj!==""){
        if (b4.obj===b5.obj && b5.obj===b6.obj){
            if (b4.obj==="X"){
            xwin();
            }
            if (b4.obj==="O"){
                owin();
            }    
            }   
            } 
            if (b7.obj!=="" && b8.obj!=="" && b9.obj!==""){
        if (b7.obj===b8.obj && b8.obj===b9.obj){
            if (b7.obj==="X"){
            xwin();
            }
            if (b7.obj==="O"){
                owin();
            }    
            }   
            } 
            if (b1.obj!=="" && b4.obj!=="" && b7.obj!==""){
        if (b1.obj===b4.obj && b4.obj===b7.obj){
            if (b7.obj==="X"){
            xwin();
            }
            if (b7.obj==="O"){
                owin();
            }    
            }   
            }
            if (b2.obj!=="" && b5.obj!=="" && b8.obj!==""){
        if (b2.obj===b5.obj && b8.obj===b5.obj){
            if (b2.obj==="X"){
            xwin();
            }
            if (b2.obj==="O"){
                owin();
            }    
            }   
            } 
            if (b3.obj!=="" && b6.obj!=="" && b9.obj!==""){
        if (b3.obj===b6.obj && b6.obj===b9.obj){
            if (b3.obj==="X"){
            xwin();
            }
            if (b3.obj==="O"){
                owin();
            }    
            }   
            } 
            if (b1.obj!=="" && b5.obj!=="" && b9.obj!==""){
        if (b1.obj===b5.obj && b5.obj===b9.obj){
            if (b1.obj==="X"){
            xwin();
            }
            if (b1.obj==="O"){
                owin();
            }    
            }   
            } 
            if (b7.obj!=="" && b5.obj!=="" && b3.obj!==""){
        if (b7.obj===b5.obj && b5.obj===b3.obj){
            if (b3.obj==="X"){
            xwin();
            }
            if (b3.obj==="O"){
                owin();
            }    
            }   
            } 
            }
    
        
        function clearPart(){
            b1.innerHTML="";
            b1.obj="";
            b2.innerHTML="";
            b2.obj="";
            b3.innerHTML="";
            b3.obj="";
            b4.innerHTML="";
            b4.obj="";
            b5.innerHTML="";
            b5.obj="";
            b6.innerHTML="";
            b6.obj="";
            b7.innerHTML="";
            b7.obj="";
            b8.innerHTML="";
            b8.obj="";
            b9.innerHTML="";
            b9.obj="";
            count=0;
        }
        function clear(){
            b1.innerHTML="";
            b1.obj="";
            b2.innerHTML="";
            b2.obj="";
            b3.innerHTML="";
            b3.obj="";
            b4.innerHTML="";
            b4.obj="";
            b5.innerHTML="";
            b5.obj="";
            b6.innerHTML="";
            b6.obj="";
            b7.innerHTML="";
            b7.obj="";
            b8.innerHTML="";
            b8.obj="";
            b9.innerHTML="";
            b9.obj="";
            show.innerHTMl="";
            count=0;
        }
        function xwin(){
document.getElementById("win");
win.innerHTML="X wins!"
xwincount++;
victories.innerHTML=`X has won ${xwincount} times and O has won ${owincount} times`;
if (xwincount%3==0){
     alert("Good going, X!")
}
clearPart();
     
        }
        function owin(){
document.getElementById("win");
win.innerHTML="O wins!";
owincount++;
if (owincount%3==0){
    alert("Good going, O!")
}
victories.innerHTML=`X has won ${xwincount} times and O has won ${owincount} times`;
clearPart();
        }

        
        b1.addEventListener("click",enter);
        b2.addEventListener("click",enter);
        b3.addEventListener("click",enter);
        b4.addEventListener("click",enter);
        b5.addEventListener("click",enter);
        b6.addEventListener("click",enter);
        b7.addEventListener("click",enter);
        b8.addEventListener("click",enter);
        b9.addEventListener("click",enter);
        clearMe.addEventListener("click",clear);
        }
        tictactoe.addEventListener("click",ttt);
