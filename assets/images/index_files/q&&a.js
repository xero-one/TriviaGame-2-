var celebrationImages = [
    "assets/images/celebration1.gif",
    "assets/images/celebration2.gif",
    "assets/images/celebration3.gif",
    "assets/images/celebration4.gif",
    "assets/images/celebration5.gif",
    "assets/images/celebration6.gif"
];

var wrongImages = [
    "assets/images/wrong1.gif",
    "assets/images/wrong2.gif",
    "assets/images/wrong3.gif",
    "assets/images/wrong4.gif",
    "assets/images/wrong5.gif",
    "assets/images/wrong6.gif"
];

var triviaQuestions = [
{
    question: "Who was the villain in the original Friday the 13th?",
    choices: ["(A) Freddy Krueger", "(B) Jason Voorhees", "(C) Diana Kimble", "(D) Pamela Voorhees"],
    rightAnswer: "(D) Pamela Voorhees"
    //description: "There are 12 movies in this series. Given that this quiz is being written on an actual Friday the 13th, we can’t help but think that Paramount made a mistake by not having the 13th film release today. But, of course, there are other Friday the 13ths available. And, to be fair, maybe 12 is a good enough of a place to stop. When was the last time one of these movies entertained? 1983? My god. The actual horror has transferred into the real-world knowing that there are still people wanting to see this series continue."
},
{
    question: "A Nightmare on Elm Street takes place where?",
    choices: ["(A) Cunningham County, New Jersey", "(B) Springwood, California", "(C) Springwood, Ohio","(D) Shades of Death Rd, New Jersey"],
    rightAnswer: "(B) Springwood, Ohio"
    //description: "There is a timelessness that A Nightmare on Elm Street has. Of course, the clothes, the hair and the production values have dated it, but its core story—about fear, about growing up—is one that anybody can identify with. Even its suburban setting is bland and familiar to at once make the audience comfortable and underline the horror that’s undermining its picturesque, Anywhere, USA feel. However, the film did bother to name the little slice of Norman Rockwell bliss. Of course, it’s not often mentioned, so we hope you were paying attention."
},
{
    question: "Who did Captain Elliot Spencer become?",
    choices: ["(A) Pinhead", "(B) Jigsaw", "(C) Tall Man", "(D) Scream"],
    rightAnswer: "(A) Pinhead"
    //description: "Villains receiving backstories sometimes can be forgotten or underproduced. Our imaginations, along with general ambiguity, make them scarier because they are forever unknown to us, and the idea that they could really be anyone. Once we can categorize and understand them, their mystery is undermined. They can become familiar. It isn’t a deal breaker, of course—or at least not always—but this is a perfect example of an unnecessary backstory. It’s also not the worst by any stretch, so there’s that at least."
},
{
    question: "What early 2000s horror franchise utter the line 'Do you want to play a game?' to the victims in the movie?",
    choices: ["(A) Halloween", "(B) Hellraiser", "(C) Saw", "(D) Alien"],
    rightAnswer: "(C) Saw"
    //description: "The Saw franchise has left us with many questions over the years: How does Jon Kramer have all this time and money? Didn’t he die in Saw 3? How are these characters so stupid? How does Cary Elwes still get work? However, for all its questions, we’re always left with one important statement. One we’ll never forget. That creepy little doll Billy riding up on his little bike, echoing Tobin Bell’s gravel: “I want to play a game.” So, if you’ve seen the movie, you’ll know what games are about to be played."
},
{
    question: "How many Michael Myers Halloween movies were made in between its inception in 1978 - 2018?",
    choices: ["(A) 5", "(B) 9", "(C) 12", "(D) 7"],
    rightAnswer: "(B) 9"
    //description: "Yeah this franchise has more movies than bones in your body"
},
{
    question: "Which 90s slasher franchise main character is named Sidney Prescott?",
    choices: ["(A) Final Destination", "(B) The Texas Chainsaw", "(C) Scream", "(D) Psycho"],
    rightAnswer: "(C) Scream"
    //description: "Leather jackets, white crop tops and black platform shoes seemed to be the only thing in her wordrobe. Not to mention Neve Campbell's character has more lives than a cat, she never seemed to die no matter how hard the perps tried to cut her!"
},
{
    question: "What 70s themed movie illustrated a pack of strangers terrorizing a family in their home (hint: this movie is based off of the Manson Family Murders)?",
    choices: ["(A) The Conjuring", "(B) The Strangers", "(C) The Amityville Horror", "(D) The Hills Have Eyes"],
    rightAnswer: "(B) The Strangers"
    //description: "The Strangers was a horro film depiction of the real-life Manson Family murders of 1969, wherein the victims all the films were randomly tortured and brutally slaughtered in their homes."
},
{
    question: "Where does the movie, 'The Thing' take place?",
    choices: ["(A) Russia", "(B) Antarctica", "(C) Canada", "(D) Roswell, Mexico"],
    rightAnswer: "(B) Antarctica"
    //description: "Based on the 1938 John W. Campbell Jr. novella Who Goes There?, it tells the story of a group of American researchers in Antarctica who encounter the eponymous 'Thing', a parasitic extraterrestrial life-form that assimilates, then imitates other organisms."
},
{
    question: "What inspired the fictional relationship between Will Graham and Hannibal Lecter?",
    choices: ["(A) Ken Landwehr's interviews with Dennis Rader", "(B) John Douglas' interviews with David Berkowitz", "(C) Robert Keppel's interviews with Ted Bundy", "(D) Patrick Kennedy's interviews with Jeffrey Dahmer"],
    rightAnswer: "(C) Robert Keppel's interviews with Ted Bundy"
    //description: "You can just as easily apply this to the Clarice Starling/Hannibal Lecter relationship; we just went with Graham because he was first. Both FBI investigators sought out an incarcerated Hannibal Lecter’s advice with a case—the Tooth Fairy and Buffalo Bill, respectively. The strategy, and the effect it had on the FBI agents, was based largely on real-life events. You might complain about needing outside knowledge for this one, but they even made a movie about the real-life incident too. Where did the relationship come from?"
},
{
    question: "Finish the quote: “Agnes, it's me--",
    choices: ["(A) Jimmy", "(B) Billy", "(C) Willy", "(D) Timmy"],
    rightAnswer: "(B) Billy"
    //description: "Black Christmas is one of the first slashers ever made. Unfortunately, unless you’re already a horror movie fan, it’s likely you’ve never heard of it. The story: a sorority house is being harassed via phone calls by a pervert. Things escalated on Christmas to the point of murder. We never know the killer’s motives, or even see his face. Unless you’re counting the awful remake, which elucidates everything. The quote we’re using here, is one of the last lines of the movie, and it’s as close as you’ll get to closure."
},
{
    question: "What is Randy Meeks’ favorite scary movie?",
    choices: ["(A) April Fool's Day", "(B) Happy Birthday to Me", "(C) Hardcore", "(D) Showgirls"],
    rightAnswer: "(D) Showgirls"
    //description: "The Scream series hasn’t aged entirely well. The first one itself is still…fine, I guess, but it certainly loses its pop after repeated viewings. As one of the few mainstream horror movies, even people who never saw any of the films will remember the famous refrain of the killer: “What’s your favorite scary movie?” Randy Meeks was one of the character savvy to the clichés and tropes of horror films and helped the core group stay one step ahead of Ghost Face. Of course, he was eventually targeted, and asked the question himself."
},
{
    question: "Which statement about Freddy Krueger is false?",
    choices: ["(A) Alice Cooper played his father", "(B) There was a prequel made called 'Freddy’s Nightmares'", "(C) He was wrongfully executed by a mob of townspeople", "(D) He's bastard son of a hundred maniacs"],
    rightAnswer: "(C) He was wrongfully executed by a mob of townspeople"
    //description: "No one deserves death, but Fred Krueger;the bastard son of a hundred maniacs. From the very beginning we’ve been given bits and pieces of his origin story. Unfortunately, due to Hollywood’s tedious remake policy, we have to mention that this question indeed covers both the remake and the original; fair is fai"
},
{
    question: "What infamous episode of the X-Files was banned from television?",
    choices: ["(A) Oeuf", "(B) The Encounter", "(C) Home", "(D) The Host"],
    rightAnswer: "(C) Home"
    //description: "The X-files—and the subject of the question—is based on TV and not a film. That said, the series was incredibly popular, and did eventually produce two films and two revival miniseries that can be categorized as horror for all the wrong reasons. Anyway, there was an episode of The X-Files that was initially banned from television, and only played twice in syndication. Even by today’s standards, the episode was brutal. What episode was it?"
},
{
    question: "What is the first creature Jay sees in It Follows?",
    choices: ["(A) Naked Woman", "(B) Old Woman", "(C) Tall Man", "(D) The Hobo"],
    rightAnswer: "(A) Naked Woman"
    //description: "One of the best modern horror flicks ever made. What makes 'It Follows' so damn scary is it's obscure randomness in how the demon takes random human form and appears at unexpected times. It's like the demon is a function using 'Math.random(Math.floor())' to randomly spawn into any human known to its's victim. However in the beginning, the movie locks in it's viewers by showing  a curvatious naked women follow the main character. We know this lady isn't of human origin because she walks slow but remains behind the character as he sprints through the scenes, oh yeah and we can also  tell because she is naked walking barefoot through abandoned buildings."
},
{
    question: "Which movie does this quote 'They’re coming, Barbara!' come from?",
    choices: ["(A) The Exorcist", "(B) Night of the Living Dead", "(C) The Shinning", "(D) Jaws"],
    rightAnswer: "(B) Night of the Living Dead"
    //description: "If you don’t know this one, you’re taking the wrong quiz. But, by all means, finish it anyway. I have gambling debts that need to be paid and my thumbs don’t need to be broken again. Also, even if you don’t do so well here, the movies I bring up are all almost entirely worth exploring. Honestly, I never cared much for Texas Chainsaw Massacre of Jason Voorhees, and perhaps my affection for the Cenobites says things about me I’d rather not confront, but I stand by my beliefs."
},
{
    question: "Which horror icon has the highest body count?",
    choices: ["(A) Lubin", "(B) Michael Myers", "(C) Chucky", "(D) Jason Voorhees"],
    rightAnswer: "(D) Jason Voorhees"
    //description: "We all have our favorite horror movie icons. We all think we’ve chosen correctly, but really it all comes down to what scares us the most. We’re attracted to fear. Also, it really helps if the character has a cool design, good dialogue and an interesting story. But if you go by the numbers, one of these maniacs just has the highest kill-number of them all. By a surprisingly large margin as well. Kinda makes me wish Pinhead had succeeded in enslaving the world in Bloodline. But, oh well. Maybe next time."
},
{
    question: "What is the name of Leatherface's family?",
    choices: ["(A) Klien", "(B) Henkel", "(C) Sawyer", "(D) Hooper"],
    rightAnswer: "(C) Sawyer"
    //description: "An old, isolated, rural family turns out to be a group of incestuous, serial killing cannibals. Like many of the best horror franchises, it was a cheap production. Like all horror franchises, its accidental success guaranteed that sequels would be made, and each would be worse than the last. Texas Chainsaw Massacre is the perfect example of diminishing returns, and given how rarely the many sequels, prequels, reboots have fared, even audiences are sick of the shtick."
},
{
    question: "What was the controversial scene in Don’t Look Now?",
    choices: ["(A) The stragulation of a cat", "(B) The sex scene", "(C) The murder twist", "(D) The child drowning"],
    rightAnswer: "(B) The sex scene"
    //description: "Don’t Look Now gained a great deal of attention even before it debuted. Adapted from the novel by acclaimed novelist Daphne du Maurier and directed by Nicolas Roeg, the film starred Julie Christie and Donald Sutherland—two very big names for a horror film. Further setting the film apart is the attention to character and plot, and the Italian setting creating a sense of history, a loss of place, and a growing isolation. Oh, yeah, and then the twist. It’s not so much of a twist as it is a bizarre and brutal murder, but, yeah, you were surprised weren’t you?"
},
{
    question: "Which of these horror movies has never seen a remake?",
    choices: ["(A) I Spit on Your Grave", "(B) Cannibal Holocaust", "(C) The Entity", "(D) All of the above"],
    rightAnswer: "(C) The Entity"
    //description: "Scream 4 spent a good 16 minutes having Kirby recite all of the horror movies that had been remake up to that point. That was in 2011. Gird your loins because the list is longer than Santa’s and no less ridiculous. And yet some horror movies, for better or for worse, have flown under the radar. The Hollywood elite have somehow overlooked one of the movies on this list for the tedious, modern (and likely PG-13) remake. Admittedly, the other alternative would be an equally soulless straight-to-DVD/Netflix remake."
},
{
    question: "What perfume does Clarice Starling use?",
    choices: ["(A) L'Air du Temps", "(B) Amarige", "(C) J'adore", "(D) Black Orchid"],
    rightAnswer: "(A) L'Air du Temps"
    //description: "When Clarice Starling walks down the row of cells in the Maryland State Hospital for the Criminally Insane, she’s greeted by creeps you’d expect; the leering, the babbling, the catatonic. Multiple Miggs hisses at her, claiming her can smell something of hers. When finally reaching Dr. Lecter, he gives the air a whiff and shows off his great senses. He tells her what skin cream she uses and the type of perfume she wears (“but not today!”). What was the name of that perfume?"
},
{
    question: "What is Pinhead’s real name?",
    choices: ["(A) Nepheron", "(B) Donald Spencer", "(C) John Bradley", "(D) Hell Priest"],
    rightAnswer: "(D) Hell Priest"
    //description: "In Clive Barker’s original story, The Hellbound Heart, the character of Pinhead was merely referred to as “The Engineer.” The popularity of Hellraiser had fans call him Pinhead since he was simply called “Lead Cenobite” in the feature. In the universe Barker created, the character itself became cognizant of the Pinhead nickname and found it unflattering. He took specific joy in torturing those who called him that. In the “final” Pinhead story, The Scarlet Gospels, Barker reveals Pinhead’s true name."
},
{
    question: "How many people died in The Babadook?",
    choices: ["(A) 4", "(B) 2", "(C) 0", "(D) 9"],
    rightAnswer: "(C) 0"
    //description: "Jennifer Kent's Austrailian horror is a terrifying thriller of a mother who must protect her son from an evil, supernatural entity that has escaped the pages of a children's book and is lurking in their home. The uniqness of this movie is that dispite all the strange and violent things that happen no one dies..."
},
{
    question: "Which of these is NOT a George A. Romero film?",
    choices: ["(A) Bruiser", "(B) Dawn of the Dead", "(C) The Crazies", "(D) Return of the Living Dead"],
    rightAnswer: "(D) Return of the Living Dead"
    //description: "George A. Romero struck gold with Night of the Living Dead. It made his career. He used it to launch a franchise and fund his other writing ventures outside of zombies. For those of you who aren’t aware, yes, he had many other projects outside of the Dead series. He wrote and directed for TV shows and films—usually remaining in horror or in something horror adjacent—but he clearly wanted to flex his muscles beyond the living undead."
},
{
    question: "What’s “the secret” of Michael Myers’ mask?",
    choices: ["(A) The original was accidentally auctioned off for $9", "(B) It's real hair", "(C) It's actually a Lee Majors mask painted white", "(D) It's actually a William Shatner mask painted white"],
    rightAnswer: "(D) It's actually a William Shatner mask painted white"
    //description: "To say the first Halloween movie was made on a shoestring budget is an understatement. Its budget was so thin you could floss with it. When it came time to actually dress Michael Myers, production designer Tommy Lee Wallace literally went to a costume shop and picked up whatever he could with the money he had in his wallet. At one point Myers was going to be dressed as a clown—a reference to the beginning of the film—but this was abandoned. You still see the costume hanging in the costume shop in the film."
},
{
    question: "What’s the most difficult thing to do in a horror movie?",
    choices: ["(A) Call the police", "(B) Survive", "(C) Apply common sense", "(D) Run without tripping"],
    rightAnswer: "(D) Run without tripping"
    //description: "Yes we are serious. As bad as it sounds it's true, every horror movie director has some blonde girl tripping over a sock or marker as they try to get away from their killers lol. And yeah they either kill off all the African American actors in the flick or the cops take the entire movie to show when 911 was dialed long before at the beginning of the movie. What whould an American horror film be without these stereotypes lol!"
},
{
    question: "How many sequels to Cabin Fever are there?",
    choices: ["(A) 10", "(B) 8", "(C) 2", "(D) 1"], 
    rightAnswer: "(D) 1"
    //description: "Cabin Fever exists in a weird time in American horror. The slasher revival had dissipated, and we had only just begun making PG-13 remakes to Japanese films and torture porn was not yet a thing. Cabin Fever was about anxiety and isolation, but also marked by occasional and unforgettable gore. Not so much violent as it is heavy with inevitable dread, it was surprisingly warmly received by critics along with fans. It didn’t build beyond that one flash in the pan, but it was nice while it lasted."
},
{
    question: "In ________ a group of young kids planned to rob the perpetrator blind, who was literlly a blind war hero?",
    choices: ["(A) Wrong Turn", "(B) The Exorcist", "(C) Don't Breathe", "(D) Silence"],
    rightAnswer: "(C) Don't Breathe"
    //description: "Don’t Breathe is such a breath of fresh air (tee-hee-hee). Character motivations are established, the directing is tight and claustrophobic, and not a moment is wasted. Hell, even the acting is good. Of course, there’s the twist, which plays not only with expectation, but makes us consider our own preconceptions of good and evil. We saw the Blind Man as a victim in every sense of the word but were shocked to find he was hardly one to remain that way. It takes a ballsy movie to have no hero, and it takes a great one to do it well."
},
{
    question: "How did the Blind Man lose his sight, in 'Don't Breathe'?",
    choices: ["(A) During the break-in", "(B) He was bron blind", "(C) In the war", "(D) None of the above"],
    rightAnswer: "(C) In the war"
    //description: "Stephen Lang's character is a tough ranking officer who tragically lost his eyes in the Gulf War. He revieved many medals/awards for his curageuous service and quitely returned to the states ultimately losing his family except his daught which whom he lost aswell later on in his backstory. He ends up imprisioning the person responsible for his daughters death in his basement. This backstory illustrated a perfect way to turn a hero into a troubled soul!"
},
{
    question: "Finish the quote: 'Long live--'",
    choices: ["(A) --the new flesh.", "(B) --the new chief.", "(C) --the savage new times.", "(D) --the savage new times."],
    rightAnswer: "(A) --the new flesh."
    //description: "Like most David Cronenberg films, Videodrome isn’t necessarily horror, but a horror-subgenre. It is Cronenbergian-horror. He’s so good, and so specific with it, that it demands its own classification. Videodrome is rife with violence, body-horror and satire. Historians say that films like Network predicted our current media landscape. Not even close. It was Videodrome. Crongenberg correctly predicted our fixation on sex and violence, and the media’s ratings obsession by treated tragedy as a product. The television screen is the retina of the mind's eye. But remember: it bites."
},
{
    question: "What movie was the first to incorporate the 'found-footage technique'?",
    choices: ["(A) The Blair Witch Project", "(B) Cloverfield", "(C) Paranormal ACtivity", "(D) Salem Witch Trials"],
    rightAnswer: "(A) The Blair Witch Project"
    //description: "The film is heavily credited with popularizing the found-footage technique which was later used by similarly successful horror films such as Paranormal Activity and Cloverfield. A sleeper hit, The Blair Witch Project grossed nearly $250 million worldwide on a modest budget of $60,000, making it one of the most successful independent films of all time. The film took 8 days to shoot but 8 months to edit and Sánchez the co-director built the movie's website to help spread the myth of the Blair Witch to anybody wanting the information. He was the only one involved with the movie who had web-building experience. According to Sánchez, he also had the free time available to work on the site as he didn’t have a girlfriend at the time.lol"
},
{
    question: "What is the estate Maxim de Winter lives in?",
    choices: ["(A) Vandelay", "(B) Manderley", "(C) Mandalay", "(D) Cornwall"],
    rightAnswer: "(B) Manderley"
    ////description: "Debuting in April of 1940, Rebecca was one of the first horror movies. It’s also become exceedingly rare. Back before streaming, I had to import a DVD of this American movie from South Korea in order to watch it. Like living in the Stone Age. Anyway, the plot: an unnamed woman comes to live at the estate of the aristocrat Maxim de Winter. They marry, only for strange things to begin happening at the house. As she starts to fear for her life, she also comes to believe that Maxim may have murdered his previous wife Rebecca and may have designs to kill her as well."
},
{
    question: "Which of the movies DOES NOT feature a killer clown?",
    choices: ["(A) Poltergeist", "(B) Mockingbird", "(C) Terrified", "(D) IT"],
    rightAnswer: "(B) Mockingbird"
    ////description: "Has something meant to be so innocent been so poorly received as clowns? You can write dissertations on what exactly it is that makes their jolly nonsense so off-putting, but whatever the case, the fear of them is so profound and common that it has its own listing in the DSM-V. Matter of fact, I once had a girlfriend who was afraid of them. When she left the room, I would change the wallpaper on her computer to clowns; happy ones, sad ones, scary ones, whatever. Scared the crap out of her every time."
},
{
    question: "Don’t Breathe was inspired by what horror classic?",
    choices: ["(A) Wait Until Dark", "(B) Repulsion", "(C) Eyes Without a Face", "(D) Cabin Fever"],
    rightAnswer: "(A) Wait Until Dark"
    ////description: "Fede Álvarez’s remake of Evil Dead was easily the finest entry in the franchise. It paid homage to the original while also going off in its own direction. It did so without the shlock and was scarier than any of the previous entries (or anything else in the decade before it). But critics are schmucks. They said that it was a good movie, but not original enough. So Álvarez made Don’t Breathe. While, yes, it takes inspiration from a movie on this list, it is a supremely original and effective creation."
},
{
    question: "'A Quiet Place' was originally meant as a sequel to what film?",
    choices: ["(A) Under the Skin","(B) Species", "(C) It Comes at Night", "(D) 10 Cloverfield Lane"],
    rightAnswer: "(D) 10 Cloverfield Lane"
    ////description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from alien monsters with ultra-sensitive hearing. The movie was suppose to be a crossover from 10 Cloverfield Lane but Paramount recognized it as a film as a wholly original, stand-alone film, rather than to make it as a part of the Cloverfield film franchise, or any other film franchise"
},
{
    question: "How many Amityville movies are there?",
    choices: ["(A) 8", "(B) 7", "(C) 5", "(D) 16"],
    rightAnswer: "(D) 16"
    ////description: "Speaking retelling stories into infinity, here’s the Amityville franchise. My god, how many times can you tell the exact same story? Had it not been for the “based on a true story” claim, and had Ed and Lorraine Warren not attached themselves to the media frenzy, we might have let the DeFeo family find peace in death. But no. We have to pretend ghosts and goblins and not the evil of one man was behind the mass murder."
},
{
    question: "'They’re here' is the iconic line from what horror film?",
    choices: ["(A) Poltergeist", "(B) Hellraiser", "(C) The Exorcist", "(D) The Amityville Horror (original movie)"],
    rightAnswer: "(A) Poltergeist"
    ////description: "For all the crap horror movies have to eat from critics, it boasts more iconic dialogue than any other genre out there (second only, perhaps, to action movies). This movie made a bland, simple observation into an unforgettable moment thanks to the lilting, melodic and almost cheerful line-reading by Heather O'Rourke. Sure, I may be give you too many hints here, but really, this isn’t a hard question anyway. Also, did you know Steven Spielberg co-wrote the film? Good stuff."
},
{
    question: "'Deep Blue Sea' was a sequal to Jaws?",
    choices: ["(A) True", "(B) False"],
    rightAnswer: "(B) False"
    ////description: "Searching for a cure to Alzheimer's disease, a group of scientists on an isolated research facility become the prey, as a trio of intelligent sharks fight back. Despite having heavy influence from the Jaws franchise, Renny Harlin decided he wanted to make his own Jaws."
},
{
    question: "What movie was believed to be a real snuff film upon its release?",
    choices: ["(A) Faces of Death", "(B) Snuff", "(C) Cannibal Holocaust", "(D) Thriller - A Cruel Picture"],
    rightAnswer: "(C) Cannibal Holocaust"
    ////description: "The 1970s was the most experimental time in American film. It’s not a surprise that the best and riskiest films were released in that decade. In the horror genre, exploitation had become exciting. Grindhouse and splatter movies were making money and violence needed to be delivered. But that’s the thing. When you know it’s fake, the thrill isn’t the same. So, horror creators began to push limits. Some went so far as to purposely make movies that looked like snuff; one perfected that craft, to the point where its director was put on trial for murder. Now, if that isn’t a resume builder, I don’t know what is."
},
{
    question: "What is the name of the demon from The Exorcist?",
    choices: ["(A) Azazel", "(B) Pazuzu", "(C) Abaddon", "(D) Tannin"],
    rightAnswer: "(B) Pazuzu"
    //description: "We can all safely agree that The Exorcist never should have become a franchise. As a standalone picture it was fine; with the ever-growing number of sequels, prequels, remakes and new adaptations, the legacy of the original gets tarnished. The demon at the center of the franchise—the one who took control of poor Regan MacNeil is central to the series—hardly receives any development. That is to the series’ advantage; less is more, especially in backstories. So what is the demon’s real name?"
},
{
    question: "What supernatural power do the Scanners have?",
    choices: ["(A) Telekinesis", "(B) Pyrokinesis", "(C) Mind Control", "(D) Immortality"],
    rightAnswer: "(A) Telekinesis"
    //description: "Scanner is like 24 with superpowers, with a dash of surreality and the usual Cronenbergian abstract horror. Naturally, its success spawned sequels and spinoffs, all of which were quite terrible. Cronenberg himself had nothing to do with any of the follow-ups. As per the current rules in Hollywood, the once fallow franchise is currently being fitted for a TV series, as announced in the fall of last year. Thankfully, nothing else has been announced since."
},
{
    question: "What horror movie has the tagline: 'We dare you to say his name 5 times'?",
    choices: ["(A) Wishmaster", "(B) Urban Legends", "(C) Candyman", "(D) Green Mile"],
    rightAnswer: "(C) Candyman"
    //description: "Horror movies have often taken on the idea of using urban legends. Some horror icons, however, become urban legends themselves in some way as their mythologies grow. There are even some movies, like this one, that establish its own horror icon as an in-world urban legend. Of course, it has become one itself due to its popularity. By taking inspiration from Bloody Mary and some good old-fashioned voodoo, Clive Barker created a unique character in a dark fairytale of a series."
},
{
    question: "True or False, despite being filmed in Los Angeles on a staged set, Candyman (1992) setting is suppose to take place in the dilapidated streets of Chicago",
    choices: ["(A) True", "(B) False"],
    rightAnswer: "(A) True"
    //description: "Although being made on location in Chicago, studio sets were built at Occidental Studios, 201 North Occidental Boulevard in the Rampart District, south of Silverlake, Los Angeles. In fact, there's a glimpse of LA during the film's prologue when the urban legend of the Candyman is recounted."
},
{
    question: "What fictionalized movie detailed the filming of Nosferatu?",
    choices: ["(A) Interview with the Vampire", "(B) Shadow of the Vampire", "(C) Shade of the Bat", "(D) Vampires and Demons"],
    rightAnswer: "(B) Shadow of the Vampire"
    //description: "There are only so many ways to mine a classic. This film turns the production of the seminal vampire film Nosferatu into a horror movie of its own. With little splashes of satire and a commentary on the self-aggrandizing directors do, this is indeed a horror movie, but it’s just as much about what goes into making horror movies and why we like them. It’s not perfect—it attempts to do too much—but it is worth a watch. You’ll even know it’s title once you answer the question."
},
{
    question: "From it's beginning in 2007 to 2015, how many movies are in the  'Paranormal Activity' franchise?",
    choices: ["(A) 10", "(B) 5", "(C) 4", "(D) 6" ],
    rightAnswer: "(D) 6",
    //description: "Like Holloween and AMittyvill Horror, Paranormal Activity is trailing behind them. Seeing 'realistic' live paranormal activity based from 'true events' on a webcam was a thrilling idea. In the beginning the first three where okay but after the 4th one it began to look like white painted walls."
},
{
    question: "In what movie did Annabelle the doll first appear?",
    choices: ["(A) The Conjuring", "(B) The Conjuring 2", "(C) Insidious", "(D) Annabelle"],
    rightAnswer: "(A) The Conjuring"
    //description: "While everyone has done the creepy, possessed doll story before—the great “Living Doll” episode of The Twilight Zone, the crappy “Chinga” episode of The X-Files (which was written by overrated gasbag Stephen King)—Annabelle is based on a real evil, possessed doll. Of course, take this with a grain of salt; this is Ed and Lorraine we’re talking about. The story of the doll was enough to warrant its own set of movies, born out of the franchise based on Ed and Lorraine’s case files and stories."
},
{
    question: "It Follows takes place in what city?",
    choices: ["(A) Chicago", "(B) Baltimore", "(C) New York City", "(D) Detroit"],
    rightAnswer: "(D) Detroit"
    //description: "Unlike IT or A Nightmare on Elm Street, which parallel real places, It Follows uses a real city and makes it a character in the film itself. The dreary weather combined with the acknowledged urban decay of the area makes everything about the film into a nightmare. Sure, Jay is going through an internal struggle fighting off an entity only she can see, but the world around her reflects the same ugliness and desperation she is struggling with. In that way, her friends can identify with her struggle as much as she can’t escape it. Horror surrounds her without respite."
},
{
    question: "Who/what killed Beth in The Descent?",
    choices: ["(A) She fell when her line was severed", "(B) Crawlers ate her", "(C) Sarah bludgeoned her", "(D) Juno stabbed her"],
    rightAnswer: "(C) Sarah bludgeoned her"
    //description: "The Descent is a brutally vicious and emotionally exhausting horror. Rarely do you find a horror movie that makes its characters anything more than chattel to be fed to a thresher, but here almost everyone gets an opportunity to shine. Hell, even without the monsters there’s enough material here for a good drama. But there are monsters. And they’re not to be trifled with. Claustrophobic, bloody and seemingly inescapable, 'The Descent' should be the blueprint for modern horror."
},
{
    question: "'Sinister' the main character was played by Ethan Hawke?",
    choices: ["(A) True", "(B) False"],
    rightAnswer: "(A) True"
    //description: "Ethan Hawke's character is a Washed-up true-crime writer Ellison Oswalt finds a box of super 8 home movies that suggest the murder he is currently researching is the work of a serial killer whose work dates back to the 1960s."
},
{
    question: "Who was the villain in the movie 'Sinister'?",
    choices: ["(A) The Boogie Man", "(B) Bughuul", "(C) Mr. Boogie", "(D) All the above"],
    rightAnswer: "(D) All the above"
    //description: "Bagul also known as Buhguul, Mr. Boogie, or the Boogie Man, is the main antagonist of the 2012 horror film Sinister, and its 2015 sequel Sinister 2. He is an ancient, pagan Babylonian deity who consumes the souls of human children. He possesses a realm of his own and can travel into the mortal world via images of himself."
},
{
    question: "What movie showed a paranormal film crew and cast getting stcuk in a haunted psychiatric facility while trying to film an episode of their show?",
    choices: ["(A) Paranormal Activity", "(B) A Bugs Life", "(C) Grave Encounters", "(D)Final Destination"],
    rightAnswer: "(C) Grave Encounters"
    //description: "Grave Encounters is a 2011 Canadian found footage supernatural horror film. The footage follows the crew of a paranormal reality television program who lock themselves in a haunted psychiatric hospital in search of evidence of paranormal activity as they shoot what ends up becoming their final episode."
}];
