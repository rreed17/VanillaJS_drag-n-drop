const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
//Loop through empties and call drag events
for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
//Drag Functions
function dragStart(){
  console.log('start');//just a log to see in the console when the user is grabing picture
  this.className += ' hold';//appends class name to object
  setTimeout(() => this.className = 'invisible', 0);//appends class name to function within a time
}
function dragEnd(){
  console.log('end');
  this.className = 'fill';
}

function dragOver(e){
  console.log('over');
  e.preventDefault();
}
function dragEnter(e){
  e.preventDefault();
  this.className += 'hovered';
  console.log('enter');
}
function dragLeave(){
  this.className = 'empty';
  console.log('leave');
}
function dragDrop(){
  this.className = 'empty';
  this.append(fill);
  console.log('drop');
}
