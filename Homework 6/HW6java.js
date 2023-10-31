function changeTitleText() {
    const title = document.getElementById('title');
    title.textContent = 'DOM Manipulation';
  }
  
  function changeBackgroundColor() {
    const container = document.getElementById('container');
    container.style.backgroundColor = 'lightblue';
  }
  
  function addListItem() {
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(newItem);
    newLi.appendChild(newLiText);
    const ul = document.querySelector('#container ul');
  ul.appendChild(newLi);
}

addListItem('Item 7')
addListItem('Sri')

function styleListItems() {
    const ul = document.querySelector('#container ul');
    if (ul) {
      const lis = ul.children;
      for (let li of lis) {
        if (li.textContent === 'Item 1') li.style.color = 'crimson';
        if (li.textContent === 'Item 3') li.style.backgroundColor = 'pink';
        if (li.textContent === 'Item 5') li.style.backgroundColor = 'yellow';
        if (li.textContent === 'Item 7') {
          li.style.backgroundColor = 'lightGray';
          li.style.color = 'royalBlue';
        }
      }
    }
  }

  function deleteItem4() {
    const ul = document.querySelector('#container ul');
    const item4 = ul.children[3]; 
    if (item4) {
      ul.removeChild(item4);
    }
  }

  function styleButton() {
    const btn = document.getElementById('btn');
    
    const italicText = document.createElement('i');
    italicText.innerText = btn.innerText;
    btn.innerText = '';
    btn.appendChild(italicText);

    btn.style.backgroundColor = 'rebeccapurple';
    btn.style.color = 'white';
    btn.style.border = '1px solid white';
  }