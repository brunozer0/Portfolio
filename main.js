window.addEventListener ('scroll', onScroll)

onScroll() 

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(inicio)
    activateMenuAtCurrentSection(sobremim)
    activateMenuAtCurrentSection(conhecimentos)
    activateMenuAtCurrentSection(projetos)
    activateMenuAtCurrentSection(qualificacoes)
    activateMenuAtCurrentSection(contato)
    
  }

function activateMenuAtCurrentSection(section) {

  //linha alvo
  const targetLine = scrollY + innerHeight / 2
  
   // verificar se a seção passou da linha // quais dados vou precisar para isso? //

   //O topo da seção
   const sectionTop = section.offsetTop

       // a altura da seção
   const sectionHeight = section.offsetHeight
   
   //O topo da seção chegou ou ultrapassou a linha alvo//
   const SectionTopReachOrPassedTargetLine = targetLine >=sectionTop

   //informações dos dados lógicos //
   console.log('O topo da seção chegou ou passou da linha ?', SectionTopReachOrPassedTargetLine)
   
   //verificar se a base está abaixo da linha alvo// quais dados irei precisar para isso?

   //a seção termina onde ?//
   const sectionEndsAt = sectionTop + sectionHeight

   /// O final da seção passou da linha alvo///
   const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline)

    //limites da seção//
    const sectionBoundaries = SectionTopReachOrPassedTargetLine &&
    !sectionEndPassedTargetline

      const sectionId =  section.getAttribute('id')

   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
   
}

//navegação//
  function showNavOnScroll() {
    if (scrollY > 0) {
        navegacao.classList.add('scroll')
      } else {
        navegacao.classList.remove('scroll')
      }
  }
// cursos //
const progresso1 = document.querySelector('.barraProgresso1')
progresso1.setAttribute("style", "width: 100%")

const progresso2 = document.querySelector('.barraProgresso2')
progresso2.setAttribute("style", "width: 100%")

const progresso3 = document.querySelector('.barraProgresso3')
progresso3.setAttribute("style", "width: 59%")

const progresso4 = document.querySelector('.barraProgresso4')
progresso4.setAttribute("style", "width: 15%")
  //botao voltar ao topo//
  function showBackToTopButtonOnScroll() {
    if (scrollY > 1000) {
        backToTopButton.classList.add('show')
      } else {
        backToTopButton.classList.remove('show')
      }
  }

  // expansão do menu//
function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }


