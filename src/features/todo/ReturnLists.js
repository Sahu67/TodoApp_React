export const activeList = () => ((localStorage.getItem('active_todo')) ? (JSON.parse(localStorage.getItem('active_todo'))) : false);


export const completedList = () => ((localStorage.getItem('completed_todo')) ? (JSON.parse(localStorage.getItem('completed_todo'))) : false);
