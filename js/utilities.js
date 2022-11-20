function ajaxGetJson(Url,callback) {
//creation d'un objet de type XMLHttpRequest(une classe predefinie en l'utilise pour recuperer )
   const xhr=new XMLHttpRequest () 
//recuperer /ouvrir l'Url
xhr.open('get',Url)//open -->lecture de la valeur del'url
xhr.send()//lire ce qui se trouve dans l'url
xhr.addEventListener("load",function(){
const response = JSON.parse(xhr.response) //JSON.parse-->pour convertir; response:retourne tableau ili fih les paragraphes

console.log(response);
callback(response)

})

}
/* en AJAX sans Jquery:
function ajax(url,test){  //fct parametrée
 let objet=new XMLHttpRequest () 
 objet.open('type forme(get/post)',Url=API)
 objet.send()
 object.addEventListener("load",function(){
const resultat = JSON.parse(object.response)
}
*/