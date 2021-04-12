const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  
  {
    id: 1,
    text: 'Are you ready to begin the game?',
    options: [
      {
        text: 'Yes',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Gramps is strolling through the Grocery store and finds himself lost. He looks to his right and sees the milk aisle. He looks to the left and sees cleaning products section. Does he go left or right?',
    options: [
      {
        text: 'Left',
        nextText: 3
      },
      {
        text: 'Right',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: 'You walk down the cleaning aisle and see the sunshine through the window right above the exit sign for the store. The sun shines down making the metal surfaces glisten and the floors glisten. Does he Keep Walking or Stop?',
    options: [
      {
        text: 'Keep Walking',
        nextText: 6
      },
      {
        text: 'Stop',
        nextText: 7
      },
    ]
  },
  {
    id: 4,
    text: 'Gramps decides to investigate the milk aisle to figure out how to get out of the Grocery store. \n He reasons that since milk aisles are usually in the back of stores, if he walks in the opposition direction he should be out in no time. However, before then he decides to grab a gallon of milk.',
    options: [
      {
        text: 'Continue',
        nextText: 5
      },
    ]
  },
  {
    id: 5,
    text: 'The freshest are always in the back he points out in his head as he reaches in. He suddenly feels a tug on his arm and is jolted through the fridge. He discovers he was pulled by a milk carton who points out The freshest humans are always in the back. The absurdity of this instantly gives him the realization that he is dreaming. But, he is not able to wake up. The Milk Ending...',
    options: [
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 6,
    text: "The floor wasn't glistening because of the sun, but because of spilled cleaning product. \n When Gramps awakens, he finds himself in the same spot except the exit isn't in front of him anymore. He scours the whole store and there is no exit at all. \n So Close Yet So Far Ending",
    options: [
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 7,
    text: 'Gramps stops because he realizes that the floor was glistening because of the cleaning product. He carefully steps around it and walks out the door. As soon as he steps out of the building, he wakes up. \n Escaped the Dream Ending.',
    options: [
      {
        text: 'Phase 2',
        nextText: 8
      },
      {
        text: 'Restart',
        nextText: 2
      },
    ]
  },
  {
    id: 8,
    text: 'Placeholder'
  }
]

startGame()
