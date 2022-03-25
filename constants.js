// Options the user could type in
const prompts = [
  ["hi", "hey", "hello"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["information related to Approval Process"],
  ["New User-id and password (login credentials)"],
  ["forgot password"],
  ["how can generate report"],
  ["how to update faculty details?"],
  ["I have made Online Payment but amount is not updated in portal."],
  ["Who is Chairman of AICTE?"],
  ["What is aishe code?"],
  ["How do I edit my Aicte profile?"],
  ["Who founded AICTE?"],
  ["Does AICTE follow UGC guidelines?"],
  ["What is the role of AICTE?"],
  ["How can I get approval from AICTE?"],
  ["What happens if my college is not AICTE approved but university is UGC approved?"],
  ["Is AICTE approval mandatory?"],
  ["How to delete old faculty details? "],
  ["Does AICTE comes under UGC?"],
  ["Which is better UGC or AICTE?"],
  ["Is AICTE a good college?"],
  ["Is NAAC and AICTE same?"],
  ["What is Student ID in AICTE internship?"],
  ["What is Institute permanent ID?"],
  ["Is AICTE a statutory body?"],
  ["Is AICTE certificate valid?"],
  ["Is AICTE approval necessary for Government jobs?"],
  ["What is Ter charges of AICTE?"],
  ["What if ree is not AICTE approved?"],
  ["How can I change my Institute name in Aicte internship?"],
  ["Is UGC approval necessary?"],
  ["Bye"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ], 
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am AICTE chatbot"],
  ["Information related to Approval Process 2020 21 available on AICTE Website's Homepage Quick Links Approval Process 2020 21."],
  ["Please click on Sign Up link on AICTE Webportal or go to link http://portal.aicteindia.org/partnerportal_enu. User Manual for Obtaining USERNAME and PASSWORD @https://aicte-india.org/bureaus/approval/ap_2020-21"],
  ["Please refer User Manual for Forgotten Password available https://aicteindia.org/bureaus/approval/ap_2020-21"],
  ["Please refer User Manual for Report Generation to generate Reports."],
  ["Please follow the User Manual available  https://aicte-india.org/bureaus/approval/ap_2020-21for uploading faculty details by import method."],
  ["Generally payment receipt gets updated immediately In case your payment receipt is notupdated then click on View Transaction Button under Payment tab Otherwise it will get updated in48 to 72 working hours In case it is not updated even after that please raisegrievance with transaction details Transaction Id generated while making the payment throughOnline Grievance Redressal form Link is available on Approval Process 2020-21 page."],
  ["Prof Anil D Sahasrabudhe"],
  ["identifier for a college university or standalone institution in India issued by the All India Survey on Higher Education No label defined."],
  ["Data Editing in AICTE Web-portal Steps to be followed Click on Submit Application button to submit the changes Once the changes are submitted no editing will be allowed further."],
  ["the Government of India Constitution of the Technical Education Committee of the Central Advisory Board of Education CABE of 1943 Preparation of the Sergeant Report of 1944 and Formation of the All India Council for Technical Education AICTE in 1945 by the Government of India."],
  ["All the AICTE approved institutions  universities have been asked to follow AICTE and University Grants Commission UGC guidelines issued from time to time in view of the Covid 19 pandemic as per an official release."],
  ["stablished in November 1945 first as an advisory body and later on in 1987 given statutory status by an Act of Parliament AICTE is responsible for proper planning and coordinated development of the technical education and management education system in India."],
  ["Institute first go to Official website of AICTE URL www.aicte-india.org Page 3  After login click on Extension Approval Tab A Instruction Page will appear in which general instructions to be followed are listed in a sequential order for all the institutions Now the Application will get open."],
  ["So if a student is joining a course that is run by a UGC approved University and the university is not AICTE approved then the student shall have no fear. The main object to do the course is to have a legitimate and legal degree to join a public sector or a Private sector job to do higher study etc."],
  [" Universities do not require prior approval of AICTE to commence a new Department or Course and Programme in Technical Education, however Universities have obligation or duty to conform to the standards and norms laid down by the AICTE."],
  ["Faculty record cannot be deleted Faculty can be marked as Duplicate or Left the Institute under HOI  Faculty Details tab."],
  ["UGC and AICTE are two apex organisations that cater for the higher studies in India. One of the main differences between University Grants Commission UGC and the All India Council for Technical Education AICTE is that the later one basically deals with technical education."],
  ["ugc approved is better as it wii be internationally recognised aicte is some kind of govt recognition but it will have no reciprocal approval internationally aicte approval is used be deemed universities as a money spinner for the colleges."],
  ["AICTE and UGC are two the zenith regulators of our Indian education. They offer quality education to all masses and have indeed done a very good job. AICTE was established in 1945 and on the other hand UGC was established in 1956."],
  ["These bodies will replace autonomous bodies like University Grants Commission UGC All India Council of Technical Education AICTE and National Assessment and Accreditation Council NAAC The first vertical of HECI will be the National Higher Education Regulatory Council NHERC."],
  ["Student shall select Step2 and enter State Institute Permanent Id First Name Last Name Roll Number provided by the institute and Date of Birth After entering all details click on Get Student ID On completion of steps as above the system will display Student ID ."],
  ["identifier number issued by AICTE the authorized organization in India which grants approval for starting and accreditation technical institutions in India. No label defined."],
  ["In view of the above AICTE became a statutory body through an Act of Parliament 52 in 1987."],
  ["AICTE stands for All India Council for Technical Education It is an advisory board which grants approval for colleges by certification The AICTE certificated universities degree is valid through out the world."],
  ["you are eligible to apply for government jobs if your college is not recognised or apporoved by AICTE If any college is already approved by UGC then the approval from AICTE is not necessary."],
  ["Required land and infrastructure are available and ready withthe Society. Please confirm whether we have to pay 8Lakh TER Charges for both the Courses or have to pay 8Lakh TER Charges Page 3 Ans for individual Course The TER Charges is 8 Lakh for both Courses together."],
  ["So if a student is joining a course that is run by a UGC approved University and the university is not AICTE approved then the student shall have no fear. The main object to do the course is to have a legitimate and legal degree to join a public sector or a Private sector job, to do higher study etc."],
  ["Navigate to the Institute tab  For applying for the change of Institute name fill in the below details Do you wish to change Institute Name Select Y from dropdown Please Enter New Institute Name Provide the new name for the Institute."],
  ["UGC has been established under the ministry of education for the maintenance of standards of education by higher education institutes It is mandatory for every university to get approved or recognized by the University Grants Commission to provide valuable and valid degree courses in India."],
  ["Bye,thank you"]
]

// Random for any other user input

const alternative = [
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand :("
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]