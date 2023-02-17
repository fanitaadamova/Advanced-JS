window.addEventListener("load", solve);
function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const titleElement = document.getElementById('story-title');
  const genreElement = document.getElementById('genre');
  const storyElement = document.getElementById('story');
  const publishButton = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');

  //const addWorkerButton = document.getElementById('')
  publishButton.addEventListener('click', (e) => {
    e.preventDefault();

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const title = titleElement.value;
    const genre = genreElement.value;
    const story = storyElement.value;

    if (firstName && lastName && age && title && genre && story) {
      let liElement = document.createElement("li");
      liElement.className = 'story-info';
      let article = document.createElement("article");
      let h4Name = document.createElement("h4");
      h4Name.textContent = `Name: ${firstName} ${lastName}`;
      let p1 = document.createElement("p");
      p1.textContent = `Age: ${age}`
      let p2 = document.createElement("p");
      p2.textContent = `Title: ${title}`
      let p3 = document.createElement("p");
      p3.textContent = `Genre: ${genre}`
      let p4 = document.createElement("p");
      p4.textContent = story;

      let saveStoryButtonElement = document.createElement("button");
      let editButtonElement = document.createElement("button");
      let deleteButtonElement = document.createElement("button");
      saveStoryButtonElement.textContent = "Save Story"
      editButtonElement.textContent = "Edit Story"
      deleteButtonElement.textContent = "Delete Story"
      saveStoryButtonElement.className = 'save-btn';
      editButtonElement.className = 'edit-btn';
      deleteButtonElement.className = 'delete-btn';

      previewList.appendChild(liElement);
      liElement.appendChild(article);
      article.appendChild(h4Name);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(p4);
      liElement.appendChild(saveStoryButtonElement);
      liElement.appendChild(editButtonElement);
      liElement.appendChild(deleteButtonElement);

      //delete all input fields info
      firstNameElement.value = '';
      lastNameElement.value = '';
      ageElement.value = '';
      titleElement.value = '';
      genreElement.value = '';
      storyElement.value = '';

      //disabled publish button and enabled edit save delete buttons
      publishButton.disabled = true;

      editButtonElement.addEventListener('click', (e) => {
        publishButton.disabled = false;

        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        ageElement.value = age;
        titleElement.value = title;
        genreElement.value = genre;
        storyElement.value = story;

        editButtonElement.parentElement.remove();
      })

      saveStoryButtonElement.addEventListener('click', (e) => {
        const mainDivElement = document.getElementById('main')

        mainDivElement.innerHTML = '';
        let h1Element = document.createElement("h1");
        h1Element.textContent = 'Your scary story is saved!'
        mainDivElement.appendChild(h1Element)
      })

      deleteButtonElement.addEventListener('click', (e) => {
        publishButton.disabled = false;
        deleteButtonElement.parentElement.remove();



      })

    }

  })
}
