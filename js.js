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
    text: 'Gramps stops because he realizes that the floor was glistening because of the cleaning product. He carefully steps around it and walks out the door. As soon as he steps out of the building, he wakes up. \n Escaped the Dream.',
    options: [
      {
        text: 'Continue',
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: "Gramps wakes up from the dream and realizes today is the day. It is the day to go to Myrtle Beach. Once they are done packing, they set off to the open road. \n Does he turn the Radio on or leave it off?",
    options: [
      {
        text: 'Turn it on',
        nextText: 9
      },
      {
        text: 'Leave it off',
        nextText: 10
      },
    ]
  },
  {
    id: 9,
    text: 'He turns on the radio to have a relaxing car ride. They follow the GPS to what seems like a strange detour.',
    options:[
      {
        text: 'Take the Detour',
        nextText: 11
      },
      {
        text: 'Take your own Path',
        nextText: 12
      },
    ]
  },
  {
    id: 10,
    text: 'Gramps decides to leave the radio off and focuses on the road ahead. 5 Hours into the drive, he realizes that he needs gas quick. Unforunately, there is only one gas station nearby and it looks pretty run-down.... \n Does he go to the creepy gas station or keep driving on E?',
    options:[
      {
        text: 'Creepy Gas Station',
        nextText: 15
      },
      {
        text: 'Keep Driving',
        nextText: 16
      }
    ]
  },
  {
    id: 11,
    text: '3 hours into the detour, he realizes something is not right. His GPS says they are in Myrtle Beach but they are in rural farmland. Someone passes by and informs him that they are in Arkansas. Then it hits him, the radio caused the GPS to malfunction. Gramps Sighs. \n The Arkansas Ending.',
    options:[
      {
        text: 'Restart',
        nextText: 2
      },
    ]
  },
  {
    id: 12,
    text: "Gramps decides that they will not heed the GPS's instructions and takes a path that feels more natural and ended up at South of the Border. Does he enter the souvenir shop or the firework shop?",
    options:[
      {
        text: 'Souvenir',
        nextText: 13
      },
      {
        text: 'Firework',
        nextText: 14
      },
    ]
  },
  {
    id: 13,
    text: 'When you enter the Souvenir shop, two items pop out immediately. Do you choose sombreros or matching T-Shirts for the family?',
    options:[
      {
        text: 'T-Shirts',
        nextText: 23
      },
      {
        text: 'Sombreros',
        nextText: 24
      }
    ]
  },
  {
    id: 14,
    text: 'Gramps purchases fireworks for a later event like a forth of july party. He leaves South of the Border and continues his journey onwards into Myrtle Beach.',
    options:[
      {
        text: 'Continue',
        nextText: 19
      },
    ]
  },
   {
    id: 15,
    text: 'Once you finish pumping gas, you walk into the mart. Immediately, Gramps stomach rumbles as he sees a lone hot dog staring at him, and calling. The more he looks at it, the more suspicious it seems but all reward comes from risk. What does he do?',
    options:[
      {
        text: 'Buy a Lottery Ticket',
        nextText: 25
      },
      {
        text: 'Eat the Hot Dog',
        nextText: 22
      }
    ]
  },
   {
    id: 16,
    text: 'What did you think was going to happen? The car runs out of gas and he has a decision to make. Do they hitch-hike or call it a night?',
    options:[
      {
        text: 'Hitch-hike',
        nextText: 17
      },
      {
        text: 'Sleep',
        nextText: 18
      }
    ]
  },
  {
    id: 17,
    text: 'Placeholder',
    options:[
      {
        text: 'Back',
        nextText: 16
      },
    ]
  },
  {
    id: 18,
    text: 'When they wake up, it is 500 years later. They marvel at the surroundings as they finish their drive. They find out, much to their disappointment, that Myrtle Beach no longer exists. \n The Future Ending',
    options:[
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 19,
    text: 'When he arrives, he passes by a Grocery store and remembers he needs to stock the pantry in the condo. \n Does he go or not?',
    options:[
      {
        text: 'Continue Onward',
        nextText: 20
      },
      {
        text: 'Go to the Grocery Store',
        nextText: 21
      }
    ]
  },
  {
    id: 20,
    text: '"It can be done later", he thinks to himself as he passes the Food Lion. All that matters right now is that they are at Myrtle Beach about to meet the family there. \n The Good Ending.',
    options:[
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 21,
    text: 'As he walks through the aisles, he finds himself in a familar situation. He loses track of where Grams is and his only point of reference is a cleaning aisle to the left..... and the milk aisle to the right. \n All a Dream Ending.',
    options:[
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 22,
    text: 'Suspicious hot-dogs should probably stay uneaten. After being rushed to the ER, doctors find an undiscovered bacteria within the food... and you got the honor of naming it. \n The Chuckitis Ending.',
    options:[
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 23,
    text: 'You get matching T-Shirts for the family and they all put it on for the final stretch of the journey. You notice another family with the same exact outfit as you as you hop into the car. When you arive at Myrtle Beach, you find that half the family is missing and was replaced by random people. \n The Doppelganger ending.',
    options:[
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 24,
    text: 'You get Sombreros for the entire family as you prepare for the final stretch of the journey. As you arrive at Myrtle Beach, everybody instantly realizes that their heads are itchy... \n The Lice Ending.',
    options:[
      {
        text: 'Restart',
        nextText: 2
      }
    ]
  },
  {
    id: 25,
    text: 'Placeholder',
    options:[
      {
        text: 'Back',
        nextText: 15
      }
    ]
  },
]

startGame()
