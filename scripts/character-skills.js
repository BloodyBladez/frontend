import {assertThatFound} from "./lib.js";

const SKILLS = new Map()
  .set("ab_lunge", {
    name: "ВЫПАД",
    desc: `Совершает выпад вперёд, ударяя мечом
Расход стамины: 1
Урон: 10
Тип урона: <span class="physical">физический</span>`
  })
  .set("ab_fencing", {
      name: "ФЕХТОВАНИЕ",
      desc: `Совершает два быстрых удара мечом. Если до этого действия был применён "Выпад", урон от "Фехтования" увеличивается.
Расход стамины: 1
Урон: 15
Увеличенный урон: 20
Тип урона: <span class="physical">физический</span>`
  })
  .set("ab_circularStrike", {
      name: "КРУГОВОЙ УДАР",
      desc: `Делает шаг вперёд, совершая круговой удар мечом. Поражает также миньонов.
Расход стамины: 1
Урон: 15
Тип урона: <span class="physical">физический</span>`
  })
  .set("ab_piercing", {
      name: "ПРОНЗАНИЕ",
      desc: `Совершает пронзающий удар мечом. После применения этой способности, в течение данного хода магический урон увеличивается.
Расход стамины: 1
Урон: 10
Увеличение урона: 20%
Тип урона: <span class="physical">физический</span>`
  })
  .set("ab_rage", {
      name: "ЯРОСТЬ",
      desc: `Если все действия за ход являлись атакой уроном физического типа, в следующем ходу физический урон увеличивается.
Увеличение урона: 20%`
  })
  .set("ab_shadowStrike", {
      name: "ТЕНЕВОЙ УДАР",
      desc: `Окружает себя тьмой, сливаясь с ней, и, неожиданно выйдя из маскировки, совершает сокрушительный удар. Если до этого действия было применено "Пронзание", урон от "Теневого удара" увеличивается.
Расход стамины: 1
Урон: 20
Увеличенный урон: 25
Тип урона: <span class="physical">физический</span>`
  })
  .set("ab_fireStrike", {
      name: "ОГНЕННЫЙ УДАР",
      desc: `Меч Кровы окаймляет огонь, после чего Крова наносит удар. Если до этого было применено "Пронзание", вместо одного эффекта накладывается два.
Расход стамины: 1
Урон: 10
Накладываемый эффект: огонь
Тип урона: <span class="physical">физический</span>`
  })
  .set("ab_bless", {
    name: "БЛАГОСЛАВЕНИЕ",
    desc: `Взывает к кровавой луне, получая щит, блокирующий весь физический урон следующей вражеской атаки. Не блокирует накладываемые эффекты
Расход стамины: 1
Прочность щита: 1 ход`
  })
  .set("ab_bloodMoon", {
    name: "КРОВАВАЯ ЛУНА",
    desc: `Взывает к кровавой луне, которая ударяет во врага испепеляющим лучом
Расход стамины: 2
Урон: 40
Тип урона: <span class="magic">магический</span>`
  });



const closeButton = document.querySelector(".close");
if (!closeButton)
  throw new Error("Element with class 'close' not found.");
closeButton.onclick = closeSkillsPopup;

const containerBackground = document.getElementById("skillsDescriptionContainerBackground");
assertThatFound(containerBackground, "skillsDescriptionContainerBackground");
containerBackground.onclick = function(event) {
  if (event.target == containerBackground)
    closeSkillsPopup();
}

const allAbilityButtons = document.getElementsByClassName("abilitiesButton");
for (const abilityButton of allAbilityButtons)
  abilityButton.onclick = function() {
    const ID = abilityButton.id;
    const skill = SKILLS.get(ID);
    setSkillData(skill.name, skill.desc.replaceAll("\n", "<br>"));
  };



function closeSkillsPopup() {
  const container = document.getElementById("skillsDescriptionContainer");
  container.style.display = "none";
  containerBackground.style.display = "none";
}

/**
 * Sets the title and content of the character skill pop-up.
 * @param {string} name skill name (HTML)
 * @param {string} desc skill description (HTML)
 */
function setSkillData(name, desc) {
  const nameContainer = document.getElementById("skillsDescriptionTitle");
  assertThatFound(nameContainer, "skillsDescriptionTitle");
  nameContainer.innerHTML = name;

  const descContainer = document.getElementById("skillsDescription");
  assertThatFound(descContainer, "skillsDescription");
  descContainer.innerHTML = desc;

  const allContainer = document.getElementById("skillsDescriptionContainer");
  assertThatFound(allAbilityButtons, "skillsDescriptionContainer");
  allContainer.style.display = "block";

  containerBackground.style.display = "block";
}