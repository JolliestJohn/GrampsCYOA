def playagain ():
    answer = input("Play again? (Yes/No)")
    if answer == "Yes":
        print ("Okay")
        levelone()
    elif answer == "No":
        print ("Oh well, come back when you are ready to give it another shot!")
    else:
        print ("Make sure to type Yes or No")
        playagain()

def levelzero ():
    choice = input("Are you ready to play the game? (Yes/No)")
    if choice == "Yes":
        print("Alright, let's begin")
        levelone()
    elif choice == "n":
        print("Oh well, come back when you are ready to play!")
    else:
        print("Make sure to type Yes or No")
        levelzero()

def levelone():
    print("Gramps is strolling through the Grocery store and finds himself lost. ")
    print("He looks to his right and sees the milk aisle. He looks to the left and sees cleaning products section.")
    choice = input("Does he go left or right?")
    if choice == "Left":
         print ("")
         leveltwo()
    elif choice == "Right":
         print ("Gramps decides to investigate the milk aisle to figure out how to get out of the Grocery store. He reasons that since milk aisles are usually in the back of stores, if he walks in the opposition direction he should be out in no time. ")
         levelthree()
    else:
        print("Make sure to type Left or Right")
        levelone()

def leveltwo():
    print("You walk down the cleaning aisle and see the sunshine through the window right above the exit sign for the store. The sun shines down making the metal surfaces glisten and the floors glisten.")
    choice =input("Does he Keep Walking or Stop")
    if choice =="Keep Walking":
        print ("")
        levelfour()
    elif choice =="Stop":
        print ("")
        levelfive()


def levelthree():
    print("However, before then he decides to grab a gallon of milk. The freshest are always in the back he points out in his head as he reaches in. He suddenly feels a tug on his arm and is jolted through the fridge.")
    print("")
    print("He discovers he was pulled by a milk carton who points out The freshest humans are always in the back. The absurdity of this instantly gives him the realization that he is dreaming. But, he is not able to wake up.")
    print("")
    print("The Milk Ending...")
    playagain()

def levelfour():
    print("The floor wasn't glistening because of the sun, but because of spilled cleaning product.")
    print("When Gramps awakens, he finds himself in the same spot except the exit isn't in front of him anymore. He scours the whole store and there is no exit at all.")
    print("")
    print("So Close Yet So Far Ending")
    (playagain)



def levelfive():
    print("Gramps stops because he realizes that the floor was glistening because of the cleaning product. He carefully steps around it and walks out the door")
    print("As soon as he steps out of the building, he wakes up.")
    print("")
    print("Escaped the Dream Ending")
    playagain()

#Start game below
levelzero()