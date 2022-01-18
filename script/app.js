document.addEventListener('DOMContentLoaded', function () {

    const lists = document.querySelector('#list ul');

    //delete list

    lists.addEventListener('click', function (e) {

        if (e.target.className == 'delete') {

            const li = e.target.parentElement;
            lists.removeChild(li);

        }
    });

    //add to list

    const addForm = document.forms['add'];

    addForm.addEventListener('submit', function (e) {

        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;

        var x = document.getElementById('addtask').value;

         if(x.length ==0){
             alert("Please enter valid text");
         }else{


        // create Element
        const li = document.createElement('li');
        const name = document.createElement('span');
        const del = document.createElement('span');

        //add list
        del.textContent = 'Delete';
        name.textContent = value;

        //add class
        //using class.add
        name.classList.add('task');
        //can also use set attribite to set any attribute to a tag
        del.setAttribute('class', 'delete');

        // append
        li.appendChild(name);
        li.appendChild(del);
        lists.appendChild(li);

        //clear text
        document.getElementById('addtask').value = "";
    }

    });

    //hide todo
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function (h) {
        if (hideBox.checked) {
            lists.style.display = "none";
        }
        else
            lists.style.display = "initial";

    });


    //search
    const searchBar = document.forms['search'].querySelector('input');
    searchBar.addEventListener('keyup', function (s) {

        const term = s.target.value.toLowerCase();

        const tsk = lists.getElementsByTagName('li');

        Array.from(tsk).forEach(function (b) {
            const tit = b.firstElementChild.textContent;

            if (tit.toLowerCase().indexOf(term) != -1) {
                b.style.display = 'block';
            } else {
                b.style.display = 'none';
            }

        })

    });



})
