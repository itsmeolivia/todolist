
// User clicks add button
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if (value) addItemToDo(value)
});

function addItemToDo(item) {
    console.log(item)
}
