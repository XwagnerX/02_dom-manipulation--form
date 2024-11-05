document.addEventListener("DOMContentLoaded", function() {
  const $form = document.getElementById("note-form");
  const $notesList = document.getElementById("notes-list");

  $form.addEventListener("submit", function(event) {
      event.preventDefault();

      handleFormSubmit(event);
  });
});

function handleFormSubmit(event) {
  const $title = sanitize(event.target.title.value.trim());
  const $content = sanitize(event.target.content.value.trim());
  const $priority = sanitize(event.target.priority.value);

  if (!$priority) {
      console.log("No priority");
      alert("Please select a priority.");
      return;
  }

  console.log("title:", $title);
  console.log("content:", $content);
  console.log("priority:", $priority);

  const noteItem = document.createElement("li");
  noteItem.className = `note-item priority-${$priority}`;
  noteItem.innerHTML = `
      <h3>${$title}</h3>
      <p>${$content}</p>
      <span class="priority">Priority: ${$priority}</span>
  `;

  const $notesList = document.getElementById("notes-list");
  $notesList.appendChild(noteItem);

  event.target.reset();
}

function sanitize(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}
