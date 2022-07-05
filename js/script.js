const todoEle = document.getElementById('todo');
const addEle = document.getElementById('add');
const listEle = document.getElementById('list');
let items = [];

const addItem = () => {
    if(todoEle.value != ''){
        items.push(todoEle.value);
        console.log(items);
        todoEle.value='';
        createList();
    }
}

function createList() {
    if(listEle.childElementCount > 0){
        while(listEle.firstChild){
            listEle.removeChild(listEle.firstChild);
        }

        if(items.length==0){
            return;
        }
    }

    const tr1 = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    th1.innerText = 'No.';
    th2.innerText = 'Todo';
    th3.innerText = 'Ok';
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    listEle.appendChild(tr1);
    
    items.forEach((item,index) => {
        const tr2 = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const chk = document.createElement('input');
        td1.innerText = index+1;
        td2.innerText = item;
        chk.type = 'checkbox';
        chk.id = index;
        chk.name = 
        chk.addEventListener('change',() =>{
            if(chk.checked){
                items.splice(chk.id,1);
                createList();
            }
        });
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(chk);
        listEle.appendChild(tr2);
    });
    
}

addEle.addEventListener('click',addItem);