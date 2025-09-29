//your JS code here. If required.
 
const panels = document.querySelectorAll('.panel');
panels.forEach(panel=>{
	panel.addEventListener('click',()=>{
		panels.forEach(p=>p.classList.remove('active'));
		panel.classList.add('active');
	});
}); 

// panels.forEach(panel => {
    //   panel.addEventListener('click', () => {
    //     // Remove active class from all
    //     panels.forEach(p => p.classList.remove('active'));
    //     // Add active class to clicked
    //     panel.classList.add('active');
    //   });
    // });