const selectsList = document.getElementsByClassName('finder__select-list')[0]

const onClickSelect = event => {
  event.path.some(element => {
    if (element.classList.contains('finder__select-list')) {
      event.stopPropagation()
      return true
    }

    if (element.classList.contains('select__label')) {
      const currSelectContainer = element.parentNode.parentNode

      const currSelectOptions = currSelectContainer.querySelector(
        '.select__options'
      )

      if (currSelectOptions.classList.contains('select__options_opened')) {
        currSelectOptions.classList.remove('select__options_opened')
      } else {
        currSelectOptions.classList.add('select__options_opened')
      }

      event.stopPropagation()
      return true
    }

    if (element.classList.contains('select__option-item')) {
      const currSelectContainer = element.parentNode.parentNode

      currSelectContainer.dataset.value = element.dataset.value
      currSelectContainer.querySelector('.select__value').innerHTML =
        element.dataset.value

      const currSelectOptions = currSelectContainer.querySelector(
        '.select__options'
      )

      currSelectOptions.classList.remove('select__options_opened')

      event.stopPropagation()
      return true
    }
  })
}

const onClickSelectOptionsOutside = event => {
  const openedSelectOptionsContainers = document.querySelectorAll(
    '.select__options_opened'
  )

  for (let element of openedSelectOptionsContainers) {
    element.classList.remove('select__options_opened')
  }
}

selectsList.addEventListener('click', onClickSelect)
document.addEventListener('click', onClickSelectOptionsOutside)
