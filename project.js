//Array of questions
var questions = [{//1
  question: "What is the supreme law of the land?",
  answers: ["A: Supreme Court", "B: Bill of Rights", "C: Declaration of Independence", "D: Constitution"],
  correctAnswer: "D: Constitution"
}, {//2
  question: "Name one branch or part of the government.",
  answers: ["A: Congress", "B: Dictator", "C: Prime Minister", "D: Prisons"],
  correctAnswer: "A: Congress"
}, {//3
  question: "What stops one branch of government from becoming too powerful",
  answers: ["A: Bill of Rights", "B: Checks and balances", "C: Speration of powers", "D: B and C"],
  correctAnswer: "D: B and C"
}, {//4
  question: "Who is in charge of the executive branch?",
  answers: ["A: Congress", "B: The House of Representatives", "C: The Senate", "D: The President"],
  correctAnswer: "D: The President"
}, {//5
  question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
  answers: ["A: Citizens 18 and older can vote", "B: Anyone with a drivers license can vote", "C: Everyone must register to vote", "D: None of the above"],
  correctAnswer: "A: Citizens 18 and older can vote"
}, {//6
  question: "What is one reason the colonist came to America?",
  answers: ["A: Political liberty ", "B: Religious freedom", "C: Economic opportunity", "D: All of the above"],
  correctAnswer: "D: All of the above"
}, {//7
  question: "What territory did the United States buy from France in 1803?",
  answers: ["A: New Mexico Territory", "B: Louisiana Territory", "C: Arizona Territory", "D: Nevada Territory"],
  correctAnswer: "B: Louisiana Territory"
}, {//8
  question: "Name one war fought by the United States in the 1900s.",
  answers: ["A: French and Indian War", "B: Civil War", "C: World War I", "D: All of the above"],
  correctAnswer: "C: World War I"
}, {//9
  question: "Name one of the two longest rivers in the United States.",
  answers: ["A: Sacramento River", "B: Ohio River", "C: Missouri River", "D: Hudson River"],
  correctAnswer: "C: Missouri River"
}, {//10
  question: "Why does the flag have 13 stripes?",
  answers: ["A: For the first 13 presidents", "B: Because there were 13 original Colonies", "C: Because America has fought 13 wars", "D: For 13 of the top US generals"],
  correctAnswer: "B: Because there were 13 original Colonies"
}, {//11
  question: "What does the Constitution do?",
  answers: ["A: Sets up the government", "B: Defines the government", "C: Protects basic rights of Americans", "D: All of the above"],
  correctAnswer: "D: All of the above"
}, {//12
  question: "Who makes Federal laws?",
  answers: ["A: Congress", "B: Senate and House(of Representatives)", "C: (U.S. or national) legislature ", "D: All of the above"],
  correctAnswer: "D: All of the above"
}, {//13
  question: "What are the two parts of the U.S. Congress?",
  answers: ["A: The Courts", "B: The House of Representatives", "C: The Senate", "D: Both B and C"],
  correctAnswer: "D: Both B and C"
}, {//14
  question: "How many U.S. Senators are there?",
  answers: ["A: 50", "B: 100", "C: 200", "D: 435"],
  correctAnswer: "B: 100"
}, {//15
  question: "Whhat is one responsibility that is only for United States citizens?",
  answers: ["A: Pay federal taxes", "B: Pay state taxes", "C: Serve on a jury", "D: Obtain a drivers liscence"],
  correctAnswer:  "C: Serve on a jury"
}, {//16
  question: "Who lived in America before the Europeans arrived?",
  answers: ["A: Native Americans", "B: Latinos", "C: Cowboys", "D: All of the above"],
  correctAnswer: "A: Native Americans"
}, {//17
  question:  "Name one war fought by the United States in the 1800s",
  answers: ["A: World War I", "B: American Revolution", "C: French and Indian War", "D: Mexican-American War"],
  correctAnswer: "D: Mexican-American War"
}, {//18
  question: "Who was President during World War I?",
  answers: ["A: John F Kennedy", "B: Theodore Roosevelt", "C: Woodrow Wilson", "D: Herbert Hoover"],
  correctAnswer: "C: Woodrow Wilson"
}, {//19
  question: "Wehat ocean is on the West Coast of the United States?",
  answers: ["A: Indian", "B: Atlantic", "C: Arctic", "D: Pacific"],
  correctAnswer: "D: Pacific"
}, {//20
  question: "We elect a U.S. Senator for how mnay years?",
  answers: ["A: 2", "B: 4", "C: 6", "D: 10"],
  correctAnswer: "C: 6"
}, {//21
  question: "The idea of self-government is in the first three words of the Constitution. What are those words?",
  answers: ["A: We the government", "B: The President is", "C: We the people", "D: The Founding Fathers"],
  correctAnswer: "C: We the people"
}, {//22
  question: "The House of Representatives has how many voting memebers?",
  answers: ["A: 50", "B: 100", "C: 200", "D: 435"],
  correctAnswer: "D: 435"
}, {//23
  question: "We elect a U.S Representative for how many years?",
  answers: ["A: 2", "B: 4", "C: 6", "D: 10"],
  correctAnswer: "A: 2"
}, {//24
  question:  "Who does a U.S. Senator represent?",
  answers: ["A: All of the people from thier state", "B: All of the people of the state in thier party", "C: The northern or southern half of a state ", "D: All of the people in America "],
  correctAnswer: "A: All of the people from thier state"
}, {//25
  question: "Name one right only for United States citizens",
  answers: ["A: Run for federal office", "B: Own a home", "C: Applying for federal grants", "D: None of the above"],
  correctAnswer: "A: Run for federal office"
}, {//26
  question: "What group of people were taken to America and sold as slaves?",
  answers: ["A: Chinese", "B: Latinos", "C: Africans", "D: Indians"],
  correctAnswer: "C: Africans"
}, {//27
  question: "Name the U.S. war between the North and the South.",
  answers: ["A: The Civil War", "B: The Union war", "C: The Confederacy War", "D: None of the above"],
  correctAnswer: "A: The Civil War"
}, {//28
  question: "Who was President during the Great Depression and World War II?",
  answers: ["A: Theodore Roosevelt", "B: Franklin Roosevelt", "C: Herbert Hoover", "D: John F Kennedy"],
  correctAnswer: "B: Franklin Roosevelt"
}, {//29
  question:  "What ocean is on the East Coast of the United States?",
  answers: ["A: Indian", "B: Atlantic", "C: Arctic", "D: Pacific"],
  correctAnswer: "B: Atlantic"
}, {//30
  question: "Why do some states have more Representatives than other states?",
  answers: ["A: Because some states are considered better", "B: Because some states have more people", "C: Because states can pick how many representatives they want to send to the House", "D: None of the above"],
  correctAnswer: "B: Because some states have more people"
}, {//31
  question: "What is an Ammendment?",
  answers: ["A: A change(to the Constitution)", "B: An addition(to the Constitution", "C: Both A and B", "D: None of the above"],
  correctAnswer: "C: Both A and B"
}, {//32
  question: "We elect a President for how mnay years?",
  answers: ["A: 2", "B: 4", "C: 6", "D: 10"],
  correctAnswer: "B: 4"
}, {//33
  question: "In what month do we vote for President?",
  answers: ["A: January", "B: March", "C: September", "D: November"],
  correctAnswer: "D: November"
}, {//34
  question: "What is the name of the President of the United States now?",
  answers: ["A: Barack Obama", "B: George W Bush", "C: Hillary Clinton", "D: Bill Clinton"],
  correctAnswer: "A: Barack Obama"
}, {//35
  question: "What are two rights of everyone living in the United States?",
  answers: ["A: Freedom of speech", "B: Freedom to bear arms", "C: Both A and B", "D: None of the above"],
  correctAnswer: "C: Both A and B"
}, {//36
  question: "Why did the colonists fight the British?",
  answers: ["A: Because of high taxes(taxation without representation)", "B: Because the British army had stayed in thier homes(boarding, quartering)", "C: Because they wnanted to have self government", "D: All of the above"],
  correctAnswer: "D: All of the above"
}, {//37
  question: "Name one problem that led to the Civil War.",
  answers: ["A: Slavery", "B: Oppresion", "C: Language diffrences", "D: All of the above"],
  correctAnswer: "A: Slavery"
}, {//38
  question: "Who did the United States fight in World War II?",
  answers: ["A: Germany only", "B: Italy only", "C: Japan only", "D: Germany, Italy and Japan"],
  correctAnswer:  "D: Germany, Italy and Japan"
}, {//39
  question: "Name one U.S. territory.",
  answers: ["A: Congress", "B: The House of Representatives", "C: The Senate", "D: The President"],
  correctAnswer: "John Roberts"
}, {//40
  question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
  answers: ["A: Puerto Rico", "B: The Caribbean", "C: The Canary Islands", "D: Cuba"],
  correctAnswer: "D: Cuba"
}, {//41
  question: "Name one state that borders Canada",
  answers: ["A: California", "B: south Dakota", "C: New York", "D: Maryland"],
  correctAnswer: "C: New York"
}, {//42
  question: "What do we call the first ten ammendments to the Constitution?",
  answers: ["A: The Bill of Rights", "B: The Ten Commandments", "C: The Bill of Laws", "D: The Preamble to the Constitution"],
  correctAnswer: "A: The Bill of Rights"
}, {//43
  question: "What is the name of the Vice President of the United States now?",
  answers: ["A: Hillary Clinton", "B: Mitt Romney", "C: Joe Biden", "D: Dick Chaney"],
  correctAnswer: "C: Joe Biden"
}, {//44
  question:  "If the President can no longer serve, who becomes President?",
  answers: ["A: The Speaker of the House", "B: The Secretary of State", "C: The Vice President", "D: A member of Congress"],
  correctAnswer: "C: The Vice President"
}, {//45
  question: "If the President and Vice President can no longer serve, who becomes President?",
  answers: ["A: The Secretary of Agriculture", "B: The Secretary of State", "C: The Speaker of the House", "D: A member of Congress"],
  correctAnswer: "C: The Speaker of the House"
}, {//46
  question: "What do we show loyalty to when we say the Pledge of Allegiance",
  answers: ["A: the flag", "B: The President", "C: The Capitol", "D: The Founding Fathers"],
  correctAnswer: "A: the flag"
}, {//47
  question: "Who wrote the Declaration of Independence?",
  answers: ["A: George Washington", "B: James Madison", "C: John Adams", "D: Thomas Jefferson"],
  correctAnswer: "D: Thomas Jefferson"
}, {//48
  question: "What was one important thing that Abraham Lincoln did?",
  answers: ["A: Freed the slaves(Emancipation Proclamation)", "B: Saved(or preserved) the Union", "C: Led the United States during the Civil War", "D: All of the above"],
  correctAnswer: "D: All of the above"
}, {//49
  question: "Before he was President, Eisenhower was a general. What war was he in?",
  answers: ["A: World War I", "B: World War II", "C: Vietnam War", "D: Korean War"],
  correctAnswer: "B: World War II"
}, {//50
  question: "Name one state that borders Mexico?",
  answers: ["A: California", "B: South Dakota", "C: New York", "D: Florida"],
  correctAnswer: "A: California"
 }, {//51
  question: "Who is the Commander in Chief of the military?",
  answers: ["A: The General", "B: The Vice President", "C: The Speaker of the House", "D: The President"],
  correctAnswer: "D: The President"
}, {//52
  question: "What is one right or freedom from the First Ammendment?",
  answers: ["A: Happiness", "B: Speech", "C: Income", "D: Marriage"],
  correctAnswer: "B: Speech"
}, {//53
  question: "Who signs bills to become laws?",
  answers: ["A: Member of Congress", "B: The President", "C: Supreme Court Justices", "D: All of the above"],
  correctAnswer: "B: The President"
}, {//54
  question: "Who vetoes bills?",
  answers: ["A: Member of Congress", "B: The President", "C: Supreme Court Justices", "D: All of the above"],
  correctAnswer: "B: The President"
}, {//55
  question: "What does the President's cabinet do?",
  answers: ["A: Advises the President", "B: Provides administrative support for the President", "C: Hires White House employees", "D: Writes laws"],
  correctAnswer: "A: Advises the President"
}, {//56
  question: "What is one promise you make when you become a United States citizen?",
  answers: ["A: To always recite the Pledge of Allegiance", "B: To obey the laws of the United States", "C: To vote in every presidential election", "D: To engage in activism"],
  correctAnswer: "B: To obey the laws of the United States"
}, {//57
  question: "When was the Declaration of Independence adopted?",
  answers: ["A: July 2nd 1776", "B: July 4th 1776", "C: July 4th 1789", "D: July 8th 1776"],
  correctAnswer: "B: July 4th 1776"
}, {//58
  question: "What did the Emancipation Proclamation do?",
  answers: ["A: Freed the slaves", "B: Declared war on the South", "C: Proclaimed the Union's independence from the Confederacy", "D: All of the above"],
  correctAnswer: "A: Freed the slaves"
}, {//59
  question: "What document did the U.S Constitution replace?",
  answers: ["A: The Federalist Papers", "B: The Bill of Rights", "C: The Articles of Confederation", "D: The Declaration of Independence"],
  correctAnswer: "C: The Articles of Confederation"
}, {//60
  question: "During the Cold War, what was the main concern of the United States?",
  answers: ["A: Slavery", "B: Socialism", "C: Communism", "D: Civil Rights"],
  correctAnswer: "C: Communism"
},{//61
  question: "What is the capital of the United States?",
  answers: ["A: Washington DC", "B: Philadelphia", "C: New York", "D: Los Angeles"],
  correctAnswer:  "A: Washington DC"
}, {//62
  question: "Name two national U.S. holidays",
  answers: ["A: Independence Day and Martin Luther King Jr Day", "B: Caesar Chavez Day and Easter", "C: Mother and Father's Day", "D: Civil Rights and Declaration of Independence Day"],
  correctAnswer: "A: Independence Day and Martin Luther King Jr Day"
}, {//63
  question:  "How many ammendments does the Constitution have?",
  answers: ["A: 10", "B: 5", "C: 102", "D: 27"],
  correctAnswer: "D: 27"
}, {//64
  question: "What office requires the candidate to be a natural-born citizen?",
  answers: ["A: Speaker of the House", "B: President and Vice President", "C: Senator", "D: Chief Justice of the Supreme Court"],
  correctAnswer: "B: President and Vice President"
}, {//65
  question: "What does the judicial branch do?",
  answers: ["A: Writes laws", "B: Only reviews laws", "C: Only explains laws", "D: Reviews and explains laws, resolves disputes and decides if a law goes agaianst the Constitution"],
  correctAnswer: "D: Reviews and explains laws, resolves disputes and decides if a law goes agaianst the Constitution"
}, {//66
  question: "What is the highest court in the United States?",
  answers: ["A: The Court of Appeals", "B: The District Court", "C: The Supreme Court", "D: The Federal Court"],
  correctAnswer: "C: The Supreme Court"
}, {//67
  question: "How old do citizens have to be to vote for President?",
  answers: ["A: 16", "B: 17", "C: 18", "D: 21"],
  correctAnswer: "C: 18"
}, {//68
  question: "There were 13 original states. Name three.",
  answers: ["A: Louisiana, Texas, New Mexico", "B: California, Nebraska, Nevada", "C: Michigan, Illinois, Ohio", "D: Massachusetts, New York, Virginia"],
  correctAnswer: "D: Massachusetts, New York, Virginia" 
}, {//69
  question: "What did Susan B Anthony do?",
  answers: ["A: Was first woman to serve in office", "B: Fought for women's rights", "C: Fought for slave's rights", "D: Fought in the Battle of Monmouth"],
  correctAnswer: "B: Fought for women's rights"
}, {//70
  question: "What movement tried to end racial discrimination?",
  answers: ["A: The anti-communist movement", "B: The Civil Rights movement", "C: The LGBT movement", "D: The feminist movement"],
  correctAnswer: "B: The Civil Rights movement"
}, {//71
  question: "Where is the Statue of Liberty?",
  answers: ["A: Washington DC", "B: Philadelphia", "C: New York", "D: Los Angeles"],
  correctAnswer: "C: New York"
}, {//72
  question: "How many justices are on the Supreme Court?",
  answers: ["A: 5", "B: 7", "C: 9", "D: 11"],
  correctAnswer: "C: 9"
}, {//73
  question: "What did the Declaration of Independence do?",
  answers: ["A: Announced our Independence(from Great Britain)", "B: Announced our Independence(from Great Britain)", "C: Said that the United States is free(from Great Britain)", "D: All of the above"],
  correctAnswer: "D: All of the above"
}, {//74
  question: "Who is the Chief Justic of the United States now?",
  answers: ["A: John Roberts", "B: Samuel Alito", "C: Anthony Kennedy", "D: Ruth Bader Ginsburg"],
  correctAnswer: "A: John Roberts"
}, {//75
  question: "Under our Constitution, some powers belong to the Federal government. What is one power of the Federal government?",
  answers: ["A: To incarcerate", "B: To declare war", "C: To print money", "D: Both B and C"],
  correctAnswer: "D: Both B and C"
}, {//76
  question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
  answers: ["A: Provide schooling and education", "B: Provide jobs", "C: Provide transportation", "D: Provide medical care"],
  correctAnswer: "A: Provide schooling and education"
}, {//77
  question: "What are two ways that Americans can participate in thier democracy?",
  answers: ["A: Vote", "B: Help with a campain", "C: Open a business", "D: Both A and B"],
  correctAnswer: "D: Both A and B"
}, {//78
  question: "What happend at the Constitutional Convention?",
  answers: ["A: The first President was elected", "B: The Constitution was written", "C: The Constitution was destroyed", "D: The Declaration of Independence was signed"],
  correctAnswer: "B: The Constitution was written"
}, {//79
  question: "When was the Constitution written?",
  answers: ["A: 1776", "B: 1777", "C: 1778", "D: 1787"],
  correctAnswer: "D: 1787"
}, {//80
  question: "What did Martin Luther King, Jr. do?",
  answers: ["A: Fought for civil rights", "B: Became the first black President", "C: Opened a university", "D: All of the above"],
  correctAnswer: "A: Fought for civil rights"
}, {//81
  question: "What are two rights in the Declaration of Independence?",
  answers: ["A: Life", "B: Voting", "C: Liberty", "D: Both A and C"],
  correctAnswer: "D: Both A and C"
}, {//82
  question: "What is freedom of religion?",
  answers: ["A: Religion has power over the government", "B: You can force anyone to participate in your religion", "C: You can practice any religion, or not practice a religion", "D: Religion should not exist, and all citizens should be free from it"],
  correctAnswer: "C: You can practice any religion, or not practice a religion"
}, {//83
  question: "What is the economic system in the United States?",
  answers: ["A: Capitalist economy", "B: Political economy", "C: Socialist economy", "D: Communist economy"],
  correctAnswer: "A: Capitalist economy"
}, {//84
  question: "What are the two major political parties in the United States?",
  answers: ["A: Democratic and Republican", "B: Independent and Republican", "C: Tea party and Libertarian", "D: Democratic and Republican"],
  correctAnswer: "A: Democratic and Republican"
}, {//85
  question: "What is the political party of the President now?",
  answers: ["A: Democratic", "B: Republican", "C: Independent", "D: Libertarian"],
  correctAnswer: "A: Democratic"
}, {//86
  question: "What is the name of the Speaker of the House of Representatives now?",
  answers: ["A: Paul Ryan", "B: John McCain", "C: John Boehner", "D: John Edwards"],
  correctAnswer: "A: Paul Ryan"
}, {//87
  question: "When is the last day you can send in federal income tax forms?",
  answers: ["A: March 15th", "B: April 15th", "C: May 15th", "D: June 15th"],
  correctAnswer: "B: April 15th"
}, {//88
  question: "The Federalist Papers supported the passage of the U.S Constitution. Name one of the writers.",
  answers: ["A: James Madison", "B: Thomas Jefferson", "C: George Washington", "D: All of the above"],
  correctAnswer: "A: James Madison"
}, {//89
  question: "What is one thing Benjamin Franklin is famous for?",
  answers: ["A: Declaring war on the South", "B: Having started the first three libraries", "C: Being a President", "D: Inventing the dollar"],
  correctAnswer: "B: Having started the first three libraries"
}, {//90
  question: "What major event happened on September11,2001 in the United States?",
  answers: ["A: The U.S. declared war on Syria", "B: The U.S. was attacked by terrorists", "C: Both A and B", "D: None of the above"],
  correctAnswer: "B: The U.S. was attacked by terrorists"
}, {//91
  question: "What is the Rule of Law",
  answers: ["A: Everyone must follow the law, except the leaders", "B: Everyone must follow the law, except the government", "C: Only Congress is above the law", "D: Everyone must follow the law, leaders and government must obey the law, and no one is above the law"],
  correctAnswer: "D: Everyone must follow the law, leaders and government must obey the law, and no one is above the law"
}, {//92
  question: "What day do we thank people for thier service in the military?",
  answers: ["A: Columbus Day", "B: Labor Day", "C: Veterans Day", "D: Memorial Day"],
  correctAnswer: "C: Veterans Day"
}, {//93
  question: "Who wrote the Star Spangled Banner?",
  answers: ["A: Benjamin Franklin", "B: Francis Scott Key", "C: Woody Guthrie", "D: Frank Sinatra"],
  correctAnswer: "B: Francis Scott Key"
}, {//94
  question: "Name one American Indian tribe in the United States.",
  answers: ["A: Maasai", "B: The Village People", "C: Cherokee", "D: Mayans"],
  correctAnswer: "C: Cherokee"
}, {//95
  question: "What U.S. aganecy is responsible for space exploration?",
  answers: ["A: Center for Space Exploration", "B: Kennedy Space Center", "C: Center for Disease Control", "D: NASA"],
  correctAnswer: "D: NASA"
}, {//96
  question: "What is the Sufferage Act?",
  answers: ["A: 19th amendment allowing women the right to vote", "B: Fight agaisnt Communism", "C: Ban on Socialism", "D: Job relief for unemployed workers during the Depression era"],
  correctAnswer: "A: 19th amendment allowing women the right to vote"
}, {//97
  question: "What is the name of the national anthem?",
  answers: ["A: Born in the USA", "B: America", "C: The Star-Spangled Banner", "D: Oh Freedom"],
  correctAnswer: "C: The Star-Spangled Banner"
}, {//98
  question: "Who is the Father of our Country?",
  answers: ["A: John Q Adams", "B: Alexander Hamilton", "C: George Washington", "D: James Madison"],
  correctAnswer: "C: George Washington"
}, {//99
  question: "What was one of the 13 original states?",
  answers: ["A: Michigan", "B: New Jersey", "C: California", "D: Texas"],
  correctAnswer:  "B: New Jersey"
}, {//100
  question: "When was the U.S Constitution written?",
  answers: ["A: September 17, 1787", "B: December 25, 1777", "C: The June 21, 1788", "D: July 4, 1776"],
  correctAnswer: "A: September 17, 1787"
 }];

