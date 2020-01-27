console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
let hauteur = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
hauteur = Number(hauteur);
if (hauteur <= 25)
{
console.log(hauteur);
console.log("Voici la pyramide :");
let line="";
for(let i = 0 ; i<hauteur; i++)
{
  let space ="";
  for(let j = 1 ; j<hauteur-i; j++)
    {
    space+= " ";
    }
  for (let k =0 ; k<= 2*i ; k++)
      {
        line += "#";
       }
  console.log(space + line);
  line="";
  }
}
else if (hauteur > 25  )
{
  console.log("le nombre est superieur a 25! ");
}
