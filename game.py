def startmenu ():
  answer = input("Do you want to play through the game or pick a phase? (Play/Pick)")
  if answer.lower().strip() == "play":
    phaseonelevelzero()
  elif answer.lower().strip() == "pick":
    print("Currently, only phase 1 is available completely but phase 2 is in beta testing. It is not complete so proceed with caution")
    choice = input("Do you want to play phase 1, Phase 2 or Exit (1/2/Exit)")
    if choice.lower().strip() == "1":
      phaseonelevelzero()
    elif choice.lower().strip() == "2":
      phasetwolevelzero()
    elif choice.lower().strip() == "exit":
      print("Oh well, come back when you are ready to play!")
  else:
    print("Make sure to type Play or Pick!")
    startmenu()

def phaseoneplayagain ():
    answer = input("Play again? (Yes/No)")
    if answer.lower().strip() == "yes":
        print ("Okay")
        phaseonelevelone()
    elif answer.lower().strip() == "no":
        print ("Oh well, come back when you are ready to give it another shot!")
    else:
        print ("Make sure to type Yes or No")
        phaseoneplayagain()

def phaseonelevelzero ():
    choice = input("Are you ready to play the game? (Yes/No)")
    if choice.lower().strip() == "yes":
        print("Alright, let's begin")
        phaseonelevelone()
    elif choice.lower().strip() == "no":
        print("Oh well, come back when you are ready to play!")
    else:
        print("Make sure to type Yes or No")
        phaseonelevelzero()

def phaseonelevelone():
    print("Gramps is strolling through the Grocery store and finds himself lost. ")
    print("He looks to his right and sees the milk aisle. He looks to the left and sees cleaning products section.")
    choice = input("Does he go left or right? (Left/Right)")
    if choice.lower().strip() == "left":
         print ("")
         phaseoneleveltwo()
    elif choice.lower().strip() == "right":
         print ("Gramps decides to investigate the milk aisle to figure out how to get out of the Grocery store. He reasons that since milk aisles are usually in the back of stores, if he walks in the opposition direction he should be out in no time. ")
         phaseonelevelthree()
    else:
        print("Make sure to type Left or Right")
        phaseonelevelone()

def phaseoneleveltwo():
    print("You walk down the cleaning aisle and see the sunshine through the window right above the exit sign for the store. The sun shines down making the metal surfaces glisten and the floors glisten.")
    choice =input("Does he Keep Walking or Stop (Keep Walking/Stop)")
    if choice.lower().strip() =="keep walking":
        print ("")
        phaseonelevelfour()
    elif choice.lower().strip() =="stop":
        print ("")
        phaseonelevelfive()


def phaseonelevelthree():
    print("However, before then he decides to grab a gallon of milk. The freshest are always in the back he points out in his head as he reaches in. He suddenly feels a tug on his arm and is jolted through the fridge.")
    print("")
    print("He discovers he was pulled by a milk carton who points out The freshest humans are always in the back. The absurdity of this instantly gives him the realization that he is dreaming. But, he is not able to wake up.")
    print("")
    print("The Milk Ending...")
    phaseoneplayagain()

def phaseonelevelfour():
    print("The floor wasn't glistening because of the sun, but because of spilled cleaning product.")
    print("When Gramps awakens, he finds himself in the same spot except the exit isn't in front of him anymore. He scours the whole store and there is no exit at all.")
    print("")
    print("So Close Yet So Far Ending")
    phaseoneplayagain()

def phaseonelevelfive():
    print("Gramps stops because he realizes that the floor was glistening because of the cleaning product. He carefully steps around it and walks out the door")
    print("As soon as he steps out of the building, he wakes up.")
    print("")
    print("Escaped the Dream Ending")
    phaseoneplayagain()

def phasetwolevelzero ():
    choice = input("Are you ready to play the game? (Yes/No)")
    if choice.lower().strip() == "yes":
        print("Alright, let's begin")
        phasetwolevelone()
    elif choice.lower().strip() == "no":
        print("Oh well, come back when you are ready to play!")
    else:
        print("Make sure to type Yes or No")
        phasetwolevelzero()

def phasetwolevelone():
  print("Placeholder")

#Start game below
startmenu() 
