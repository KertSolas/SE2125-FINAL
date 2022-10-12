const logButton = document.querySelector('#pplBtn');
const addButton = document.querySelector('#addBtn');
    logButton.onclick = () => {
        var peopleName= document.querySelector("#listPeople")
        var addName= document.querySelector("#addUsers")
        var getPeople= peopleName.style.display
        var addPeople= addName.style.display

        if(getPeople === 'none'){
            addName.style.display = 'block'
        }
        if(addPeople === 'block'){
            peopleName.style.display = 'none'
        }
    }

    addButton.onclick = () => {

        var first = document.querySelector("#firstName").value
        var last = document.querySelector("#lastName").value
        var final = `${first} ${last}`
        var list = document.createElement('li');
        list.appendChild(document.createTextNode(final));
        document.querySelector('div').appendChild(list);
        console.log("hello")
    }

    function test() {
        console.log('buli')
    }

