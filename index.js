// resForm(this)!!!!
// function resForm(form){
// 	const client = {
// 	name: form.fname.value,
// 	sname: form.sname.value,
// 	age: form.age.value,
// };
// return client
// };



document.querySelector('#button').addEventListener('click', function(){
	const client = {
			name: document.querySelector('#id-fname').value,
			sname: document.querySelector('#id-sname').value,
			age: document.querySelector('#id-age').value,
		};
		const str = JSON.stringify(client);
	localStorage.setItem('freak', str);
	
});


const result = localStorage.getItem('freak');
const final =  JSON.parse(result);


document.querySelector('#client-name').textContent = final.name;
document.querySelector('#client-sName').textContent = final.sname;
document.querySelector('#client-age').textContent = final.age;
