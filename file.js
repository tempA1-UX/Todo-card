let todo = {
  title:"Finish Frontend Task",
  description:"Build a fully interactive, accessible todo card with editing, status sync, and dynamic time handling.",
  priority:"High",
  status:"Pending",
  dueDate:new Date(Date.now()+86400000),
  completed:false
};

const el = (id)=>document.getElementById(id);

function render(){
  el("card").classList.toggle("done", todo.status==="Done");

  document.querySelector("[data-testid='test-todo-title']").textContent = todo.title;
  document.querySelector("[data-testid='test-todo-description']").textContent = todo.description;

  el("priority").textContent = todo.priority;
  el("priority").className = "badge "+todo.priority.toLowerCase();

  el("priorityIndicator").className = "indicator "+todo.priority.toLowerCase();

  el("status").textContent = todo.status;
  el("statusControl").value = todo.status;

  el("check").checked = todo.status==="Done";

  el("dueDate").textContent = "Due "+todo.dueDate.toDateString();

  updateTime();
}

function updateTime(){
  if(todo.status==="Done"){
    el("timeRemaining").textContent="Completed";
    el("overdue").textContent="";
    return;
  }

  const diff = todo.dueDate - new Date();

  if(diff<0){
    el("overdue").textContent="Overdue";
    el("overdue").classList.add("overdue");
  } else {
    el("overdue").textContent="";
  }

  const mins=Math.floor(diff/60000);
  const hrs=Math.floor(mins/60);
  const days=Math.floor(hrs/24);

  if(days>0) el("timeRemaining").textContent=`Due in ${days} day(s)`;
  else if(hrs>0) el("timeRemaining").textContent=`Due in ${hrs} hour(s)`;
  else el("timeRemaining").textContent=`Due in ${mins} min(s)`;
}

setInterval(updateTime,60000);

/* EVENTS */
el("check").onchange=()=>{
  todo.status = el("check").checked ? "Done":"Pending";
  render();
};

el("statusControl").onchange=(e)=>{
  todo.status=e.target.value;
  render();
};

let expanded=false;
el("expandBtn").onclick=()=>{
  expanded=!expanded;
  el("descSection").classList.toggle("collapsed",!expanded);
  el("expandBtn").textContent=expanded?"Collapse":"Expand";
  el("expandBtn").setAttribute("aria-expanded",expanded);
};

/* EDIT */
el("editBtn").onclick=()=>{
  el("editForm").style.display="block";
  editTitle.value=todo.title;
  editDesc.value=todo.description;
  editPriority.value=todo.priority;
};

el("saveBtn").onclick=()=>{
  todo.title=editTitle.value;
  todo.description=editDesc.value;
  todo.priority=editPriority.value;
  todo.dueDate=new Date(editDate.value);
  el("editForm").style.display="none";
  render();
};

el("cancelBtn").onclick=()=>{
  el("editForm").style.display="none";
};

render();