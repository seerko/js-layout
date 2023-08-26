import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const tab = createElement('div', 'tab')

page.append(tab)

const TAB_LIST = [
  {
    title: 'База знань',
    actived: false,
  },
  {
    title: 'Інформація',
    actived: true,
  },
]

export const createTabTitle = () => {
  const tabHeader = createElement('div', 'tab__header')

  TAB_LIST.forEach((params) => {
    const tab = createElement(
      'div',
      params.actived
        ? 'tab__title tab--actived'
        : 'tab__title',
      params.title,
    )

    tabHeader.append(tab)
  })

  return tabHeader
}

const tabTitle = createTabTitle()

tab.append(tabTitle)

const imgTab = createElement('img', 'tab__img')

imgTab['src'] = '/img/community.png'
imgTab['alt'] = "Наше ком'юніті у телеграм!"

tab.append(imgTab)

const titleTab = createElement(
  'h2',
  'tab__text-title',
  'Що таке база знань?',
)

tab.append(titleTab)

const textTab = createElement(
  'p',
  'tab__text',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
)

tab.append(textTab)

const buttonTab = createElement(
  'button',
  'tab__button',
  "Перейти до ком'юніті у Телеграм",
)

tab.append(buttonTab)
