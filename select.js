let poll = document.querySelector('.poll').addEventListener('click', select);
let listItems = document.querySelectorAll('.list_item');


function select() {
  updataDispaly('block');
  
  for (let item of listItems) {
    let poll = document.querySelector('.poll'); // Почему без это строчки не работает???
    let valueItem = item.textContent;
    
    item.addEventListener('mouseenter', () => {
      poll.textContent = valueItem;
    });
    
    item.addEventListener('click', () => {
      poll.textContent = valueItem;
      updataDispaly('none');
    });
  }
}

function updataDispaly (type) {
 let count = listItems.length
  for (let i = 0; i < count; i++) {
    listItems[i].style.display = type;
  }
}
