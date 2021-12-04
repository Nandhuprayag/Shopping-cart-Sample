console.log("Hello ScreenCart");
let myDiv=document.createElement('div');
myDiv.style.border="2px solid #689f38";myDiv.style.backgroundColor="#b3e5fc";
myDiv.style.width="700px";myDiv.style.height="2900px";myDiv.style.display="flex";myDiv.style.flexWrap="wrap"

async function getData()
{
    try {
       let mystore =await  fetch('https://fakestoreapi.com/products');
       let mydata=await mystore.json();
       console.log(mydata);
        for(let i=0;i<mydata.length;i++)
        {
            var mycard=document.createElement('div');
            // mycard.innerHTML=("ID :"+ mydata[i].id);
            mycard.style.width="35%";
            mycard.style.height="250px";mycard.style.backgroundColor="pink";mycard.style.border="2px solid white";
            mycard.setAttribute("id",i);
            
            //Displaying Image inside the Card
            var myImg=document.createElement('img');myImg.style.alignItems="center";
            myImg.setAttribute("src",mydata[i].image);myImg.setAttribute("width","80px");
            mycard.appendChild(myImg);
            //Displaying title in the Card
            var myTitle=document.createElement('div');myTitle.innerText=("Title :"+ mydata[i].title);
            mycard.appendChild(myTitle);
            //Displaying the Price inside the card
            var myPrice=document.createElement('div');myPrice.innerText=("Price :"+mydata[i].price)
            mycard.appendChild(myPrice)

            //Add a button in the cart
            let myButton=document.createElement('button');myButton.style.backgroundColor="#f1f8e9";
            myButton.innerText="Add To CART";myButton.style.border='1px solid black';myButton.style.textShadow=""
            myButton.addEventListener('click',function()
            {
                alert(myf)
            })
            mycard.appendChild(myButton);
            myDiv.appendChild(mycard);
        }
    } catch (error) {
        console.log(error);
    }
}
let myf=document.createElement('div');myf.style.width="300px";myf.style.height="250px";
myf.style.border="2px solid greenyellow";myf.style.backgroundColor="#f1f8e9";
myf.innerHTML="CART";myf.style.textAlign="center";
myDiv.appendChild(myf);


getData()



document.body.appendChild(myDiv)
