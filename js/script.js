window.onload = function(){
    const project_title = document.querySelectorAll('.project-title');
    const project_content = document.querySelectorAll('.project-content');
    const arr = document.querySelectorAll('.icon-link');

    for (let index = 0; index < project_title.length; index++) {
        project_title[index].addEventListener('click', () => {
        project_content[index].classList.toggle('project-opened');
        arr[index].classList.toggle('icon-rotated');  
        });
    }
}