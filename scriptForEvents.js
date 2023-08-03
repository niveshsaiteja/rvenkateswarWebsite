let data = [
    {
      "img":"assets/images/featured-1.png",
      "heading":"The meet among the students for a placement",
      "date":"02-05-2023",
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit!  Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde."
    },
    {
      "img":"assets/images/featured-1.png",
      "heading":"The meet among the students for a placement",
      "date":"02-05-2023",
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit!  Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde."
    },
    {
      "img":"assets/images/featured-1.png",
      "heading":"The meet among the students for a placement",
      "date":"02-05-2023",
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit!  Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde."
    },
    {
      "img":"assets/images/featured-1.png",
      "heading":"The meet among the students for a placement",
      "date":"02-05-2023",
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit!  Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde."
    },
    {
      "img":"assets/images/featured-1.png",
      "heading":"The meet among the students for a placement",
      "date":"02-05-2023",
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit!  Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde."
    },
    {
      "img":"assets/images/featured-1.png",
      "heading":"The meet among the students for a placement",
      "date":"02-05-2023",
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit! Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, in? In quia nulla fuga rerum natus similique praesentium deserunt sit!  Officia maiores ullam cupiditate laborum vel. Adipisci odit ab unde."
    }
  ];

let cardContainer = document.getElementById("cardContainer");


for (let responce of data){
  let CardDiv = document.createElement("div");
  CardDiv.setAttribute("class","eve-card");
  cardContainer.appendChild(CardDiv);

  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("class","event-img-div");
  CardDiv.appendChild(imgDiv);

  let Img = document.createElement("img");
  Img.src = responce.img;
  Img.setAttribute("class","eve-img");
  imgDiv.appendChild(Img);

  let contentDiv = document.createElement("div");
  contentDiv.setAttribute("class","eve-content");
  CardDiv.appendChild(contentDiv);

  let Heading = document.createElement("h1");
  Heading.setAttribute("class","eve-heading");
  Heading.textContent = responce.heading;
  contentDiv.appendChild(Heading);

  let span1 = document.createElement("span");
  span1.setAttribute("class","eve-span");
  contentDiv.appendChild(span1);

  let icon = document.createElement("i");
  icon.setAttribute("class","fa-solid fa-calendar-days eve-icon");
  span1.appendChild(icon);

  let innerspan = document.createElement("span");
  innerspan.textContent = responce.date;
  span1.appendChild(innerspan);

  let DescriptionPara = document.createElement("para");
  DescriptionPara.setAttribute("class","eve-description");
  DescriptionPara.textContent = responce.description;
  contentDiv.appendChild(DescriptionPara);
}