var listaFilmes =  ["https://upload.wikimedia.org/wikipedia/pt/thumb/6/64/Harry_Potter_Deathly_Hallows_2010.jpg/250px-Harry_Potter_Deathly_Hallows_2010.jpg","https://images-na.ssl-images-amazon.com/images/I/A1ovt0jk62L.jpg","https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}