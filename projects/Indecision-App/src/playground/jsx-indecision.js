console.log("App is running!!!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hand of a compter",
  options: [],
};

function onFormSubmit(e) {
  e.preventDefault();
  const option = e.target.elements.option.value;
  app.options.push(option);
  e.target.elements.option.value = "";
  render();
}

function remove() {
  app.options = app.options.slice(0, 0);
  render();
}

function removeItem(e) {
  let itemToRemove = e.target.parentElement.innerText.slice(0, -5);
  e.target.parentElement.remove();
  app.options = app.options.filter((opt) => opt !== itemToRemove);
  if (document.querySelector("ul").childNodes.length == 0) {
    render();
  }
}

function pickOption() {
  const rand = Math.floor(Math.random() * app.options.length);
  const ulNodeList = Array.from(document.querySelector("ul").childNodes);

  ulNodeList.map((child) => {
    if (child.style.length > 0) {
      child.style = null;
    }
  });

  const styleChild = ulNodeList[rand];
  console.log(styleChild.innerHTML);
  styleChild.style.color = "red";
  styleChild.style.textDecoration = "underline";
}

function showButtonLogic() {
  let button = null;

  if (app.options.length > 0) {
    button = (
      <p>
        <button onClick={pickOption}>What should I do?</button>
      </p>
    );
    return button;
  } else {
    return "";
  }
}

function showUlList() {
  if (app.options.length) {
    return (
      <div>
        <ul>
          {app.options.map((opt, idx) => (
            <li key={idx}>
              {opt} <button onClick={removeItem}>Done</button>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  } else return null;
}

function render() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0 ? "Here are your options: " : "No options: "}
        {app.options.length}
      </p>
      {showButtonLogic()}
      {showUlList()}
      <p>
        <button onClick={remove}>Remove all</button>
      </p>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("root");

render();
