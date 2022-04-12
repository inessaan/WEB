
let message2 = document.querySelector('.count_img_text');


let n = 0;
let k = 0;

let all_children=document.body.children;  //дети body

let all_div = []  //все div

for(let i=0; i < all_children.length; i++)  //собираем все DIV - дети body
  { 
    if (all_children[i].tagName == "DIV")
    {
    all_div[n] = all_children[i];
    n++;
    }

    if (all_children[i].tagName == "IMG")
    {
    k++;
  }
}

/*all_div[i].children[0].tagName*/

for(let i=0; i < all_div.length; i++)   //смотрим каждого ребенка DIV, если IMG - +к счетчику
{
  for (let j=0; j < all_div[i].children.length; j++)
  {
    if (all_div[i].children[j].tagName == "IMG"){
      k++;
    }
  }

}

message2.textContent = " Всего img = " + k;