const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const TeamContainer = document.getElementById('teamContainer');
//genero html
/*const generateTeamCards = (members) => {
  let teamCard = "";
  for (let i = 0; i < members.length; i++) {
    const { name, role, email, img } = members[i];
    teamCard += `
      <div class="team-card">
        <img src="${img}" alt="${name}">
        <h3>${name}</h3>
        <p>${role}</p>
        <a href="mailto:${email}">${email}</a>
      </div>
    `;
  }
  return teamCard;
};
*/

//genero html
//For of
const generateTeamCards = (members) => {
  let teamCard = "";
  for (let member of members) {
    const { name, role, email, img } = member;
    teamCard += `
      <div class="team-card">
        <img src="${img}" alt="${name}">
        <h3>${name}</h3>
        <p>${role}</p>
        <a href="mailto:${email}">${email}</a>
      </div>
    `;
  }
  return teamCard;
};

// aggiungo card stampando
document.getElementById("team-container").innerHTML = generateTeamCards(teamMembers);